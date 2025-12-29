import express from "express";
import session from "express-session";

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true }
}));

function randomState(len = 32) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

app.get("/auth/discord/start", (req, res) => {
  const state = randomState();
  req.session.oauth_state = state;

  const scope = ["identify", "email"]; // якщо не хочеш email — прибери
  const params = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    redirect_uri: process.env.DISCORD_REDIRECT_URI,
    response_type: "code",
    scope: scope.join(" "),
    state,
    prompt: "consent",
  });

  res.redirect(`https://discord.com/oauth2/authorize?${params.toString()}`);
});

app.get("/auth/discord/callback", async (req, res) => {
  const { code, state } = req.query;

  if (!code || !state) return res.status(400).send("Missing code/state");
  if (state !== req.session.oauth_state) return res.status(400).send("Bad state");

  // 1) міняємо code -> access_token
  const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code: String(code),
      redirect_uri: process.env.DISCORD_REDIRECT_URI,
    }),
  });

  if (!tokenRes.ok) {
    const txt = await tokenRes.text();
    return res.status(400).send(`Token exchange failed: ${txt}`);
  }

  const tokenJson = await tokenRes.json(); // { access_token, token_type, expires_in, refresh_token?, scope }
  const accessToken = tokenJson.access_token;

  // 2) беремо юзера
  const userRes = await fetch("https://discord.com/api/users/@me", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!userRes.ok) {
    const txt = await userRes.text();
    return res.status(400).send(`User fetch failed: ${txt}`);
  }

  const user = await userRes.json(); // id, username, discriminator, avatar, email?, verified?
  // Тут зберігаєш user.id (discord_id) у своїй БД і створюєш сесію.
  req.session.user = { discord_id: user.id, username: user.username, email: user.email ?? null };

  res.send(`Logged in as ${user.username} (${user.id})`);
});

app.get("/me", (req, res) => {
  res.json(req.session.user ?? null);
});

app.listen(3000, () => console.log("http://localhost:3000"));

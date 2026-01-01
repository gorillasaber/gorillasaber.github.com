function randomState(len = 24) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let s = "";
  for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

export function startDiscordLogin() {
  const clientId = "1455325991449657556";
  const redirectUri = encodeURIComponent("https://gorillasaber.github.io/auth/discord/callback");
  const scope = encodeURIComponent("identify email");
  const state = randomState();

  sessionStorage.setItem("discord_oauth_state", state);

  const authUrl =
    `https://discord.com/oauth2/authorize?` +
    `client_id=${clientId}` +
    `&response_type=code` +
    `&redirect_uri=${redirectUri}` +
    `&scope=${scope}` +
    `&state=${encodeURIComponent(state)}`;

  window.location.href = authUrl;
}

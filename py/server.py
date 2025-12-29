import os
import secrets
from urllib.parse import urlencode

import requests
from flask import Flask, redirect, request, session, send_from_directory, abort
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder=".", static_url_path="")
app.secret_key = os.getenv("SESSION_SECRET", "dev_secret_change_me")

DISCORD_CLIENT_ID = os.getenv("DISCORD_CLIENT_ID")
DISCORD_CLIENT_SECRET = os.getenv("DISCORD_CLIENT_SECRET")
DISCORD_REDIRECT_URI = os.getenv("DISCORD_REDIRECT_URI", "http://localhost:3000/auth/discord/callback")

DISCORD_AUTH_URL = "https://discord.com/oauth2/authorize"
DISCORD_TOKEN_URL = "https://discord.com/api/oauth2/token"
DISCORD_ME_URL = "https://discord.com/api/users/@me"

def require_env():
    if not DISCORD_CLIENT_ID or not DISCORD_CLIENT_SECRET:
        raise RuntimeError("DISCORD_CLIENT_ID або DISCORD_CLIENT_SECRET не задані в .env")

@app.get("/")
def home():
    return send_from_directory(".", "index.html")

@app.get("/ranked")
def ranked():
    # приклад “закритої” сторінки
    if "user" not in session:
        return redirect("/signup")
    return send_from_directory(".", "ranked.html")

@app.get("/signup")
def signup():
    # якщо в тебе є окрема signup.html — заміни тут
    # або можеш залишити index.html і просто показувати кнопку там
    return send_from_directory(".", "index.html")

@app.get("/auth/discord")
def auth_discord():
    require_env()

    state = secrets.token_urlsafe(16)
    session["oauth_state"] = state

    params = {
        "client_id": DISCORD_CLIENT_ID,
        "redirect_uri": DISCORD_REDIRECT_URI,
        "response_type": "code",
        "scope": "identify email",  # якщо email не треба — залиш тільки "identify"
        "state": state,
        "prompt": "consent",
    }
    return redirect(f"{DISCORD_AUTH_URL}?{urlencode(params)}")

@app.get("/auth/discord/callback")
def auth_discord_callback():
    require_env()

    code = request.args.get("code")
    state = request.args.get("state")
    saved_state = session.get("oauth_state")

    if not code or not state or state != saved_state:
        return abort(400, "OAuth state invalid або немає code")

    # міняємо code на access_token
    data = {
        "client_id": DISCORD_CLIENT_ID,
        "client_secret": DISCORD_CLIENT_SECRET,
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": DISCORD_REDIRECT_URI,
    }
    headers = {"Content-Type": "application/x-www-form-urlencoded"}

    token_res = requests.post(DISCORD_TOKEN_URL, data=data, headers=headers, timeout=15)
    token_res.raise_for_status()
    token_json = token_res.json()

    access_token = token_json["access_token"]

    # беремо профіль юзера
    me_res = requests.get(
        DISCORD_ME_URL,
        headers={"Authorization": f"Bearer {access_token}"},
        timeout=15
    )
    me_res.raise_for_status()
    user = me_res.json()

    # зберігаємо мінімум у сесію
    session["user"] = {
        "id": user.get("id"),
        "username": user.get("username"),
        "global_name": user.get("global_name"),
        "avatar": user.get("avatar"),
        "email": user.get("email"),
    }

    return redirect("/ranked")  # або куди треба після логіну

@app.get("/logout")
def logout():
    session.clear()
    return redirect("/")

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)

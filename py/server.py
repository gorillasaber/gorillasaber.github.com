import os
from urllib.parse import urlencode

import requests
from flask import Flask, redirect, request, session, url_for
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SESSION_SECRET", "dev_secret")

CLIENT_ID = os.getenv("DISCORD_CLIENT_ID")
CLIENT_SECRET = os.getenv("DISCORD_CLIENT_SECRET")
REDIRECT_URI = os.getenv("DISCORD_REDIRECT_URI")

DISCORD_AUTH = "https://discord.com/oauth2/authorize"
DISCORD_TOKEN = "https://discord.com/api/oauth2/token"
DISCORD_ME = "https://discord.com/api/users/@me"

SCOPES = "identify email"

@app.get("/")
def home():
    return "OK. Go to /login"

@app.get("/login")
def login():
    params = {
        "client_id": CLIENT_ID,
        "redirect_uri": REDIRECT_URI,
        "response_type": "code",
        "scope": SCOPES,
    }
    return redirect(f"{DISCORD_AUTH}?{urlencode(params)}")

@app.get("/auth/discord/callback")
def callback():
    code = request.args.get("code")
    if not code:
        return "No code", 400

    data = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": REDIRECT_URI,
        "scope": SCOPES,
    }
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    r = requests.post(DISCORD_TOKEN, data=data, headers=headers)
    if r.status_code != 200:
        return f"Token exchange failed: {r.status_code} {r.text}", 400

    token = r.json()["access_token"]
    me = requests.get(DISCORD_ME, headers={"Authorization": f"Bearer {token}"}).json()

    session["user"] = me
    return f"Logged in as: {me.get('username')}#{me.get('discriminator')} (id={me.get('id')})"

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)

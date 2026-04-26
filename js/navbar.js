const me = JSON.parse(localStorage.getItem("discord_me") || "null");
const loginBtn = document.getElementById("discordLoginBtn");

if (loginBtn) {
  if (me) {
    loginBtn.textContent = me.username;
    loginBtn.href = "#";
    loginBtn.insertAdjacentHTML("afterend",
      `<a href="#" id="logoutBtn" style="color:#e57373;">Вийти</a>`
    );
    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("discord_me");
      localStorage.removeItem("discord_token");
      location.reload();
    });
  }
}
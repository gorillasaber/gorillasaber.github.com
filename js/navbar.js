(() => {
  const me = JSON.parse(localStorage.getItem("discord_me") || "null");
  const loginBtn = document.getElementById("discordLoginBtn");

  if (loginBtn) {
    if (me) {
      loginBtn.style.display = "none";
      loginBtn.insertAdjacentHTML("afterend",
        `<a href="#" id="logoutBtn" style="color:#e57373;">Вийти (${me.username})</a>`
      );
      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("discord_me");
        localStorage.removeItem("discord_token");
        location.reload();
      });
    }
  }
})();
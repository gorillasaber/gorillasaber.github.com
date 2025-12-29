const PROXY = "https://gs-proxy.partymonkevrgt.workers.dev";

function proxyFetch(targetUrl) {
  const encoded = encodeURIComponent(targetUrl);
  return fetch(`${PROXY}?url=${encoded}`);
}
const translations = {
  en: {
    site_title: "Gorilla Saber 🦍",
    site_title_sppbot: "Gorilla Saber 🦍 - SPP Bot",
    site_title_leaderboard: "Gorilla Saber 🦍 - Leaderboard",
    site_title_rankedmapslist: "Gorilla Saber 🦍 - Ranked Maps List",
    site_title_register: "Gorilla Saber 🦍 - Register",
    nav_home: "Home",
    nav_spp: "SPP Bot",
    nav_leaderboard: "Global Ranking",
    nav_ranked: "Ranked Maps",
    nav_register: "Register",
    nav_discordlogin: "Log In via Discord",

    footer_text: "Gorilla Saber is a fan project • Almost 2026 • All rights is not reserved(",

    home_h2_title: "Welcome to Gorilla Saber",
    home_h2_404: "Oops! There is no page like this one(",
    home_intro: "Fan-made ranking for Beat Saber. Shiny PP, custom ranked maps and global SPP leaderboard.",
    home_news_title: "News",
    home_news_latest: "Latest info:",
    home_news_latest_text: "v0.6 alpha – site and SPP bot online. Ranked pool and mods are in progress.",
    home_downloads_title: "Downloads",
    home_downloads_desc: "When PC / Quest mods are ready, download links will appear here.",
    home_download_pc: "Download PC Mod (soon)",
    home_download_quest: "Download Quest qmod (soon)",

    spp_title: "SPP Bot",
    spp_label_bl: "BeatLeader profile:",
    spp_label_ss: "ScoreSaber profile:",
    spp_button: "Count SPP",
    spp_calculating: "Counting...",
    spp_error_prefix: "Error: ",

    lb_title: "Gorilla Saber – Global SPP Ranking",
    lb_h2: "World SPP Ranking",
    lb_th_rank: "#",
    lb_th_player: "Player",
    lb_th_country: "Country",
    lb_th_spp: "SPP",
    lb_th_bl: "BL",
    lb_th_ss: "SS",
    lb_loading: "Loading...",
    lb_no_players: "No players yet",
    lb_failed: "Failed to load players.json",
    lb_prev: "Prev",
    lb_next: "Next",
    lb_page: "Page",
    lb_of: "of",

    rk_title: "Gorilla Saber – Ranked Maps",
    rk_header: "Gorilla Saber – Ranked Maps",
    rk_h2: "Ranked maps",
    rk_th_name: "Name",
    rk_th_bsr: "!bsr",
    rk_th_mapper: "Mapper",
    rk_th_diff: "Diff",
    rk_th_stars: "⭐",
    rk_th_pass: "Pass",
    rk_th_acc: "Acc",
    rk_th_tech: "Tech",
    rk_loading: "Loading...",
    rk_none: "No ranked maps yet",
    rk_failed: "Failed to load ranked-maps.json",

    reg_title: "Register Gorilla Saber account",
    reg_hint: "Fill the form. The site will calculate your SPP and generate a JSON entry for players.json.",
    reg_label_name: "Nickname:",
    reg_label_country: "Country (e.g. UA, PL, US):",
    reg_label_bl: "BeatLeader profile URL:",
    reg_label_ss: "ScoreSaber profile URL:",
    reg_button: "Generate entry",
    reg_status_wait: "Calculating SPP...",
    reg_status_error_prefix: "Error: ",
    reg_result_title: "Your players.json entry",
    reg_copy_info: "Copy this JSON into data/players.json (or send it to the admin)."
  },

  ua: {
    site_title: "Gorilla Saber 🦍",
    site_title_sppbot: "Gorilla Saber 🦍 - СПП Бот",
    site_title_leaderboard: "Gorilla Saber 🦍 - Лідерборд",
    site_title_rankedmapslist: "Gorilla Saber 🦍 - Список ранкованих мап",
    site_title_register: "Gorilla Saber 🦍 - Реєстрація",
    nav_home: "Головна",
    nav_spp: "SPP Бот",
    nav_leaderboard: "Глобальний рейтинг",
    nav_ranked: "Ранкнуті мапи",
    nav_register: "Реєстрація",
    nav_discordlogin: "Увійти через Discord",

    footer_text: "Gorilla Saber фан-проєкт • Майже 2026 • Усі права не захищені(",

    home_h2_title: "Ласкаво просимо до Gorilla Saber",
    home_h2_404: "Упс! Таких сторінок як цієї немає(",
    home_intro: "Фанатський рейтинг для Beat Saber. Shiny PP, свій пул ranked карт та глобальний SPP рейтинг.",
    home_news_title: "Новини",
    home_news_latest: "Остання інфа:",
    home_news_latest_text: "v0.6 alpha – сайт і SPP бот онлайн. Ranked pool та моди в розробці.",
    home_downloads_title: "Завантаження",
    home_downloads_desc: "Коли PC / Quest моди будуть готові, тут зʼявляться посилання.",
    home_download_pc: "Завантажити PC мод (скоро)",
    home_download_quest: "Завантажити Quest qmod (скоро)",

    spp_title: "SPP Бот",
    spp_label_bl: "Профіль BeatLeader:",
    spp_label_ss: "Профіль ScoreSaber:",
    spp_button: "Порахувати SPP",
    spp_calculating: "Рахую...",
    spp_error_prefix: "Помилка: ",

    lb_title: "Gorilla Saber – Глобальний SPP рейтинг",
    lb_h2: "Світовий SPP рейтинг",
    lb_th_rank: "#",
    lb_th_player: "Гравець",
    lb_th_country: "Країна",
    lb_th_spp: "SPP",
    lb_th_bl: "BL",
    lb_th_ss: "SS",
    lb_loading: "Завантажую...",
    lb_no_players: "Поки немає гравців",
    lb_failed: "Не вдалося завантажити players.json",
    lb_prev: "Назад",
    lb_next: "Далі",
    lb_page: "Сторінка",
    lb_of: "з",

    rk_title: "Gorilla Saber – Ранкнуті мапи",
    rk_header: "Gorilla Saber – Ранкнуті мапи",
    rk_h2: "Ранкнуті мапи",
    rk_th_name: "Назва",
    rk_th_bsr: "!bsr",
    rk_th_mapper: "Маппер",
    rk_th_diff: "Складність",
    rk_th_stars: "⭐",
    rk_th_pass: "Pass",
    rk_th_acc: "Acc",
    rk_th_tech: "Tech",
    rk_loading: "Завантажую...",
    rk_none: "Ранкнутих мап ще немає",
    rk_failed: "Не вдалося завантажити ranked-maps.json",

    reg_title: "Реєстрація Gorilla Saber акаунта",
    reg_hint: "Заповни форму. Сайт порахує твій SPP і згенерує запис для players.json.",
    reg_label_name: "Нікнейм:",
    reg_label_country: "Країна (наприклад UA, PL, US):",
    reg_label_bl: "URL профілю BeatLeader:",
    reg_label_ss: "URL профілю ScoreSaber:",
    reg_button: "Згенерувати запис",
    reg_status_wait: "Рахую SPP...",
    reg_status_error_prefix: "Помилка: ",
    reg_result_title: "Твій запис для players.json",
    reg_copy_info: "Скопіюй цей JSON у data/players.json (або відправ адміну)."
  }
};

let currentLang = localStorage.getItem("gs_lang") || "en";

function t(key) {
  const table = translations[currentLang] || translations.en;
  return table[key] ?? translations.en[key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = t(key);
    if (text != null) el.textContent = text;
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("gs_lang", lang);
  applyTranslations();
}

const langSwitch = document.getElementById("langSwitch");
if (langSwitch) {
  langSwitch.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-lang]");
    if (!btn) return;
    setLanguage(btn.getAttribute("data-lang"));
  });
}

applyTranslations();

const API_BL = "https://api.beatleader.com";
const API_SS = "https://scoresaber.com/api";

function extractBeatLeaderId(url) {
  const m = url.match(/\/u\/([^/?#]+)/);
  return m ? m[1] : null;
}

function extractScoreSaberId(url) {
  const m = url.match(/\/u\/([^/?#]+)/);
  return m ? m[1] : null;
}

async function fetchBLpp(blId) {
  const url = `${API_BL}/player/${blId}`;
  const res = await proxyFetch(url);
  if (!res.ok) throw new Error("BL API error");
  const data = await res.json();
  return data.pp ?? data.rankPp ?? 0;
}

async function fetchSSpp(ssId) {
  const url = `${API_SS}/player/${ssId}/full`;
  const res = await proxyFetch(url);
  if (!res.ok) throw new Error("SS API error");
  const data = await res.json();
  return data.pp ?? data.playerInfo?.pp ?? 0;
}

function calcSPP(blPP, ssPP) {
  const w_bl = 0.5;
  const w_ss = 0.5;
  return blPP * w_bl + ssPP * w_ss;
}

async function runSppBot(blUrl, ssUrl) {
  const blId = extractBeatLeaderId(blUrl);
  const ssId = extractScoreSaberId(ssUrl);
  if (!blId || !ssId) throw new Error("Bad profile URLs");

  const rankedData = await fetch("data/ranked-maps.json").then(r => r.json());
  const rankedHashes = rankedData.map(x => x.hash.toLowerCase());

  const blScoresRes = await fetch(`https://api.beatleader.com/player/${blId}/scores?sortBy=pp&page=1&count=1000`);
  const blScores = await blScoresRes.json();

  const rankedScores = blScores.data.filter(s => rankedHashes.includes(s.leaderboard.songHash.toLowerCase()));

  let blPP = 0;
  if (rankedScores.length > 0) {
    const sumPP = rankedScores.reduce((a, s) => a + s.pp, 0);
    blPP = sumPP / rankedScores.length;
  }

  const ssRes = await fetch(`https://scoresaber.com/api/player/${ssId}/full`);
  const ssData = await ssRes.json();
  const ssPP = ssData.pp ?? ssData.playerInfo?.pp ?? 0;

  const spp = calcSPP(blPP, ssPP);

  return { blPP, ssPP, spp };
}


const sppForm = document.getElementById("sppForm");
if (sppForm) {
  sppForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const blUrl = document.getElementById("blUrl").value.trim();
    const ssUrl = document.getElementById("ssUrl").value.trim();
    const out = document.getElementById("sppResult");
    out.textContent = t("spp_calculating");

    try {
      const { blPP, ssPP, spp } = await runSppBot(blUrl, ssUrl);
      out.innerHTML = `
        <p>BeatLeader PP: <b>${blPP.toFixed(2)}</b></p>
        <p>ScoreSaber PP: <b>${ssPP.toFixed(2)}</b></p>
        <p>Gorilla SPP: <b>${spp.toFixed(2)}</b></p>
      `;
    } catch (err) {
      out.textContent = t("spp_error_prefix") + err.message;
    }
  });
}

const rankedTableBody = document.getElementById("rankedTableBody");
if (rankedTableBody) {
  fetch("data/ranked-maps.json")
    .then(r => r.json())
    .then(list => {
      rankedTableBody.innerHTML = "";
      const ranked = list.filter(x => x.ranked);
      if (!ranked.length) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 7;
        td.textContent = t("rk_none");
        tr.appendChild(td);
        rankedTableBody.appendChild(tr);
        return;
      }
      for (const m of ranked) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${m.name}</td>
          <td>${m.bsr}</td>
          <td>${m.mapper}</td>
          <td>${m.mode} ${m.difficulty}</td>
          <td>${m.stars ?? ""}</td>
          <td>${m.passStars ?? ""}</td>
          <td>${m.accStars ?? ""}</td>
          <td>${m.techStars ?? ""}</td>
        `;
        rankedTableBody.appendChild(tr);
      }
    })
    .catch(() => {
      rankedTableBody.innerHTML =
        `<tr><td colspan="7">${t("rk_failed")}</td></tr>`;
    });
}

const playersTableBody = document.getElementById("playersTableBody");
if (playersTableBody) {
  const PAGE_SIZE = 100;
  let players = [];
  let currentPage = 1;

  function renderPage() {
    playersTableBody.innerHTML = "";
    if (!players.length) {
      playersTableBody.innerHTML =
        `<tr><td colspan="6">${t("lb_no_players")}</td></tr>`;
      return;
    }

    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const pagePlayers = players.slice(start, end);

    pagePlayers.forEach((p, idx) => {
      const tr = document.createElement("tr");
      const globalIndex = start + idx + 1;
      tr.innerHTML = `
        <td>${globalIndex}</td>
        <td>${p.name}</td>
        <td>${p.country || ""}</td>
        <td>${p.spp.toFixed(2)}</td>
        <td>${p.blUrl ? `<a href="${p.blUrl}" target="_blank">BL</a>` : ""}</td>
        <td>${p.ssUrl ? `<a href="${p.ssUrl}" target="_blank">SS</a>` : ""}</td>
      `;
      playersTableBody.appendChild(tr);
    });

    const pageInfo = document.getElementById("pageInfo");
    if (pageInfo) {
      const totalPages = Math.ceil(players.length / PAGE_SIZE);
      pageInfo.textContent =
        `${t("lb_page")} ${currentPage} ${t("lb_of")} ${totalPages}`;
    }
  }

  fetch("data/players.json")
    .then(r => r.json())
    .then(list => {
      players = list.sort((a, b) => b.spp - a.spp);
      currentPage = 1;
      renderPage();
    })
    .catch(() => {
      playersTableBody.innerHTML =
        `<tr><td colspan="6">${t("lb_failed")}</td></tr>`;
    });

  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage();
      }
    });

    nextBtn.addEventListener("click", () => {
      const totalPages = Math.ceil(players.length / PAGE_SIZE);
      if (currentPage < totalPages) {
        currentPage++;
        renderPage();
      }
    });
  }
}

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  const regStatus = document.getElementById("regStatus");
  const regResult = document.getElementById("regResult");
  const regOutput = document.getElementById("regOutput");

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("regName").value.trim();
    const country = document.getElementById("regCountry").value.trim().toUpperCase();
    const blUrl = document.getElementById("regBlUrl").value.trim();
    const ssUrl = document.getElementById("regSsUrl").value.trim();

    regStatus.textContent = t("reg_status_wait");
    regResult.style.display = "none";

    try {
      const { spp } = await runSppBot(blUrl, ssUrl);

      const playerObj = {
        name: name || "Player",
        country: country || "",
        spp: Number(spp.toFixed(2)),
        blUrl,
        ssUrl
      };

      const jsonStr = JSON.stringify(playerObj, null, 2);
      regOutput.value = jsonStr;
      regResult.style.display = "block";
      regStatus.textContent = "";
    } catch (err) {
      regStatus.textContent =
        t("reg_status_error_prefix") + err.message;
      regResult.style.display = "none";
    }
  });
}
const rankedScores = blScores.data.filter(s => {
  const entry = rankedData.find(x => x.hash.toLowerCase() === s.leaderboard.songHash.toLowerCase());
  if (!entry) return false;
  s.weight = entry.sppWeight || 1.0;
  return true;
});

let blPP = 0;
if (rankedScores.length > 0) {
  const total = rankedScores.reduce((a, s) => a + s.pp * s.weight, 0);
  blPP = total / rankedScores.length;
}

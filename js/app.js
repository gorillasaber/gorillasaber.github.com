const API_BL = "https://api.beatleader.com";      // перевіриш актуальний
const API_SS = "https://scoresaber.com/api";      // для старого API; для нового інший шлях

function extractBeatLeaderId(url) {
  const m = url.match(/\/u\/([^/?#]+)/);
  return m ? m[1] : null;
}

function extractScoreSaberId(url) {
  const m = url.match(/\/u\/([^/?#]+)/);
  return m ? m[1] : null;
}

async function fetchBLpp(blId) {
  const res = await fetch(`${API_BL}/player/${blId}`);
  if (!res.ok) throw new Error("BL API error");
  const data = await res.json();
  // поле може називатись по-іншому, перевіриш у їх docs
  return data.pp || data.rankPp || 0;
}

async function fetchSSpp(ssId) {
  const res = await fetch(`${API_SS}/player/${ssId}/full`);
  if (!res.ok) throw new Error("SS API error");
  const data = await res.json();
  return data.pp || data.playerInfo?.pp || 0;
}

function calcSPP(blPP, ssPP) {
  const w_bl = 0.5;
  const w_ss = 0.5;
  return blPP * w_bl + ssPP * w_ss;
}

async function runSppBot(blUrl, ssUrl) {
  const blId = extractBeatLeaderId(blUrl);
  const ssId = extractScoreSaberId(ssUrl);
  if (!blId || !ssId) throw new Error("Не можу розпарсити ID");

  const [blPP, ssPP] = await Promise.all([
    fetchBLpp(blId),
    fetchSSpp(ssId)
  ]);

  const spp = calcSPP(blPP, ssPP);
  return { blPP, ssPP, spp };
}

// привʼязка до форми
const sppForm = document.getElementById("sppForm");
if (sppForm) {
  sppForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const blUrl = document.getElementById("blUrl").value.trim();
    const ssUrl = document.getElementById("ssUrl").value.trim();
    const out = document.getElementById("sppResult");
    out.textContent = "Рахую...";

    try {
      const { blPP, ssPP, spp } = await runSppBot(blUrl, ssUrl);
      out.innerHTML = `
        <p>BeatLeader PP: <b>${blPP.toFixed(2)}</b></p>
        <p>ScoreSaber PP: <b>${ssPP.toFixed(2)}</b></p>
        <p>Gorilla SPP: <b>${spp.toFixed(2)}</b></p>
      `;
    } catch (err) {
      out.textContent = "Помилка: " + err.message;
    }
  });
}

// завантаження ранкнутого списку
const rankedTableBody = document.getElementById("rankedTableBody");
if (rankedTableBody) {
  fetch("data/ranked-maps.json")
    .then(r => r.json())
    .then(list => {
      rankedTableBody.innerHTML = "";
      for (const m of list.filter(x => x.ranked)) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${m.name}</td>
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
    .catch(err => {
      rankedTableBody.innerHTML = `<tr><td colspan="7">Помилка завантаження ranked-maps.json</td></tr>`;
    });
}

let scadenza = "12/23/2024";

function tempoRimasto(tempo) {
  let t = Date.parse(tempo) - Date.parse(new Date());
  let sec = Math.floor((t / 1000) % 60);
  return {
    secondi: sec,
  };
}

function inizializzoTimer(id, scadenza) {
  let timer = document.getElementById(id);

  let intervalloTempo = setInterval(function () {
    let t = tempoRimasto(scadenza);
    timer.innerHTML = "secondi: " + t.secondi;
    if (t.total <= 0) {
      clearInterval(intervalloTempo);
    }
  }, 1000);
}

inizializzoTimer("timer", scadenza);

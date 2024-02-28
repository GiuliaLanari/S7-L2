let i = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0;

const conta = function () {
  i = i + 1;
  document.getElementById("timer").innerText = i + " secondi di sessione aperta";
  sessionStorage.setItem("count", i);
};

setInterval(conta, 1000);

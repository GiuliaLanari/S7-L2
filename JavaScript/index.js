const registrazioneKey = "registrazione-memoria";
const h3 = document.querySelector("h3");
const nameInput = document.getElementById("nome-utente");
const btnSalvaInput = document.getElementById("btn-salva");
const btnRimuoviInput = document.getElementById("btn-rimuovi");
const form = document.querySelector("form");

const save = (e) => {
  e.preventDefault();
  const nameInserito = nameInput.value;
  const savedElements = localStorage.setItem(registrazioneKey, nameInserito);

  rivela();
};

const rivela = () => {
  const datoSalvato = localStorage.getItem(registrazioneKey);
  if (datoSalvato) {
    h3.innerText = datoSalvato;
    nameInput.value = "";
  } else {
    h3.innerText = "";
  }
};

const rimuovi = (e) => {
  localStorage.removeItem(registrazioneKey);
  rivela();
};

window.onload = () => {
  rivela();
  form.addEventListener("submit", save);
  btnRimuoviInput.addEventListener("click", rimuovi);
};

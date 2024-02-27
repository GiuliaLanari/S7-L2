const registrazioneKey = "registrazione-memoria";

const nameInput = document.getElementById("nome-utente");

const btnSalvaInput = document.getElementById("btn-salva");
const btnRimuoviInput = document.getElementById("btn-rimuovi");
const form = document.querySelector("form");

class registrazioneElement {
  constructor(name) {
    this.name = name;
  }
}

const save = (e) => {
  e.preventDefault();
  const newElement = new registrazioneElement(nameInput.value);

  const savedElements = localStorage.getItem(registrazioneKey);

  if (savedElements) {
    const savedElementsArray = JSON.parse(savedElements);
    savedElementsArray.push(newElement);
    localStorage.setItem(registrazioneKey, JSON.stringify(savedElementsArray));
  } else {
    const elements = [];
    elements.push(newElement);
    localStorage.setItem(registrazioneKey, JSON.stringify(elements));
  }

  nameInput.value = "";
  generaTestoNomiPresenti();
};

const generaTestoNomiPresenti = () => {
  const savedElements = localStorage.getItem(registrazioneKey);
  const lista = document.getElementById("add-testo");

  if (savedElements) {
    const savedElementsArray = JSON.parse(savedElements);
    lista.innerHTML = "";

    savedElementsArray.forEach((el) => {
      const newLi = document.createElement("li");
      newLi.className = "list-group-item";
      newLi.innerText = el.name;

      lista.appendChild(newLi);
    });
  }
};

const reset = () => {
  const confermaElliminazione = confirm("Sei sicuro di voler elliminare?");

  if (confermaElliminazione) {
    nameInput.value = "";
    localStorage.removeItem(registrazioneKey);
  }
};

window.onload = () => {
  form.addEventListener("submit", save);
  btnRimuoviInput.addEventListener("click", reset);
  generaTestoNomiPresenti();
};

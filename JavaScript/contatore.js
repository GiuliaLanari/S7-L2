const storageCounter = "counter-memory";
const counterTitle = document.querySelectorAll("h2");

setInterval(() => {
  localStorage.setItem(storageCounter, counter++);
  counterTitle.innerText = sessionStorage.getItem(storageCounter);
}, 1000);

window.onload=(){
    
}
function toggler() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

let toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", toggler);

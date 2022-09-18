let overlay = document.querySelector(".overlay");
let uskaName = document.querySelector(".Uska");
let uskaWindow = document.querySelector(".uska-modal");

let closeBtn = document.querySelector(".fa-x");
// function openform() {
//   personName.addEventListener("click", function () {
//     modalWindow.classList.add("active-window");
//   });
// }
let closeovelay = function () {
  overlay.style.display = "none";
  uskaWindow.style.display = "none";
  ninoWindow.style.display = "none";
};
// Uska Bio - modal window
uskaName.onclick = function () {
  uskaWindow.style.display = "block";
  overlay.style.display = "block";
};
closeBtn.onclick = closeovelay;
overlay.onclick = closeovelay;

// Nino Bio-modal window
let ninoName = document.querySelector(".Nino");
let ninoWindow = document.querySelector(".nino-modal");

ninoName.onclick = function () {
  ninoWindow.style.display = "block";
  overlay.style.display = "block";
};

closeBtn.onclick = closeovelay;
//   Salome Bio-modal window
let salomeName = document.querySelector(".Salome");
let salomeWindow = document.querySelector(".salome-modal");
salomeName.onclick = function () {
  salomeWindow.style.display = "block";
};

"use strict";

let overlay = document.querySelector(".overlay");
let uskaName = document.querySelector(".Uska");
let uskaWindow = document.querySelector(".uska-modal");

let closeBtn = document.querySelectorAll(".fa-circle-xmark");

// for (let i = 0; i < closeBtn.length; i++) {
//   closeBtn[i].onclick.style.Color = "red";
// function openform() {
//   personName.addEventListener("click", function () {
//     modalWindow.classList.add("active-window");
//   });

// openform();

let closeovelay = function () {
  overlay.style.display = "none";
  mariamWindow.style.display = "none";
  ninoWindow.style.display = "none";
  salomeWindow.style.display = "none";
  lanaWindow.style.display = "none";
  ketiWindow.style.display = "none";
};

// // Uska Bio - modal window
// uskaName.onclick = function () {
//   uskaWindow.style.display = "block";
//   overlay.style.display = "block";
// };
// closeBtn.onclick = closeovelay;
overlay.onclick = closeovelay;

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = closeovelay;
}

// // Nino Bio-modal window
let ninoName = document.querySelector(".Nino");
let ninoWindow = document.querySelector(".nino-modal");

ninoName.onclick = function () {
  ninoWindow.style.display = "block";
  overlay.style.display = "block";
};

//   Salome Bio-modal window
let salomeName = document.querySelector(".Salome");
let salomeWindow = document.querySelector(".salome-modal");

salomeName.onclick = function () {
  salomeWindow.style.display = "block";
  overlay.style.display = "block";
};

// Lana modal-window
let lanaName = document.querySelector(".Lana");
let lanaWindow = document.querySelector(".lana-modal");
lanaName.onclick = function () {
  lanaWindow.style.display = "block";
  overlay.style.display = "block";
};

// mariam modal-window
let mariamName = document.querySelector(".Mariam");
let mariamWindow = document.querySelector(".mariam-modal");
mariamName.onclick = function () {
  mariamWindow.style.display = "block";
  overlay.style.display = "block";
};
// keti modal-window
let ketiName = document.querySelector(".Keti");
let ketiWindow = document.querySelector(".keti-modal");
ketiName.onclick = function () {
  ketiWindow.style.display = "block";
  overlay.style.display = "block";
};

// burger bar
let hamburger = document.querySelector(".humburger");
let menubar = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("activemenu");
  menubar.classList.toggle("activemenu");
});

document.querySelectorAll(".nav-a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("activemenu");
    menubar.classList.remove("activemenu");
  })
);

// current date

let today = new Date();
let date =
  " " +
  today.getDate() +
  "." +
  (today.getMonth() + 1) +
  "." +
  today.getFullYear();
document.querySelector(".ftr-bottom-text").append(date);

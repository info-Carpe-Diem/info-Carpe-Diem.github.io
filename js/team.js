"use strict";

let overlay = document.querySelector(".overlay");
let ninoName = document.querySelector(".Nino");
let ninoWindow = document.querySelector(".nino-modal");
let mariamName = document.querySelector(".Mariam");
let mariamWindow = document.querySelector(".mariam-modal");
let khatiaName = document.querySelector(".Khatia");
let khatiaWindow = document.querySelector(".khatia-modal");
let ketiName = document.querySelector(".Keti");
let ketiWindow = document.querySelector(".keti-modal");
let closeBtn = document.querySelectorAll(".fa-circle-xmark");

let closeovelay = function () {
  overlay.style.display = "none";
  ninoWindow.style.display = "none";
  khatiaWindow.style.display = "none";
  mariamWindow.style.display = "none";
  ketiWindow.style.display = "none";
};

// for (let i = 0; i < closeBtn.length; i++) {
//   closeBtn[i].onclick.style.Color = "red";
// function openform() {
//   personName.addEventListener("click", function () {
//     modalWindow.classList.add("active-window");
//   });

// openform();

// overlay.onclick = closeovelay;

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = closeovelay;
}

// // Nino Bio-modal window

ninoName.onclick = function () {
  ninoWindow.style.display = "block";
  overlay.style.display = "block";
};

// mariam modal-window

mariamName.onclick = function () {
  mariamWindow.style.display = "block";
  overlay.style.display = "block";
};
// khatia
khatiaName.onclick = function () {
  khatiaWindow.style.display = "block";
  overlay.style.display = "block";
};
// keti modal-window

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
    aburger.classList.remove("activemenu");
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

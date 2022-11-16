let accordeon = document.querySelectorAll(".question-block");
for (i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener("click", function () {
    this.classList.toggle("active-question");
  });
}

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

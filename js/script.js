// // slider

const swiper = new Swiper(".swiper", {
  // Optional parameters

  // If we need pagination

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});
// document.querySelector(".swiper-button-next").style.color = "green";
// document.querySelector(".swiper-button-prev").style.color = "green";
// document.querySelector(".swiper-scrollbar").style.background = "green";

// accordeon for questions

let accordeon = document.querySelectorAll(".question-box");
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

// // accordeon

// let accordeon = document.querySelectorAll(".question-block");
// for (i = 0; i < accordeon.length; i++) {
//   accordeon[i].addEventListener("click", function () {
//     this.classList.toggle("active-question");
//   });
// }

// slider

// let image = document.createElement("img");
// image.src = "..images/";
// document.querySelector(".container").appendChild(image);

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
    delay: 1500,
  },
  loop: true,
});
document.querySelector(".swiper-button-next").style.color = "green";
document.querySelector(".swiper-button-prev").style.color = "green";
document.querySelector(".swiper-scrollbar").style.background = "green";
document.querySelector(".swiper-pagination-bullet-active").style.background =
  "green";

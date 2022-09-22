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
document.querySelector(".swiper-button-next").style.color = "green";
document.querySelector(".swiper-button-prev").style.color = "green";
document.querySelector(".swiper-scrollbar").style.background = "green";

// accordeon for questions

let accordeon = document.querySelectorAll(".question-box");
for (i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener("click", function () {
    this.classList.toggle("active-question");
  });
}

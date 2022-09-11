let accordeon = document.querySelectorAll(".question-block");
for (i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener("click", function () {
    this.classList.toggle("active-question");
  });
}

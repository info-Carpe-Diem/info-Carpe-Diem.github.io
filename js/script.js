// accordeon

let accordeon = document.querySelectorAll(".question-block");
for (i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener("click", function () {
    this.classList.toggle("active-question");
  });
}

// slider

let image = document.createElement("img");
image.src = "..images/";
document.querySelector(".container").appendChild(image);

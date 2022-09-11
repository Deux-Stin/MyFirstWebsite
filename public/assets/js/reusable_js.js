//Reusable javascripts

//Rolling text initial work from https://codepen.io/gabrielcojea/pen/GRpZbZL -->

(function($) {

let elements = document.querySelectorAll(".rolling-text");

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = "";

  let textContainer = document.createElement("div");
  textContainer.classList.add("block");

  for (let letter of innerText) {
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("letter");
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});


})(jQuery);


// Fonction permettant de mettre en forme la barre de couleur sous les titres d'articles :
var widthToGet = document.getElementsByClassName("widthToGet");
var widthTarget = document.getElementsByClassName("widthTarget");
for (var i = 0; i < widthToGet.length; i++) {
    resizeElements(widthToGet.item(i), widthTarget.item(i));
}


function resizeElements(toGet, target) {
    var widthToGet = toGet.clientWidth;
    let widthTarget = target;

    const text = toGet.textContent;
    const font = "1rem Poppins, sans-serif"
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;

    const {
        width
    } = context.measureText(text);

    widthTarget.style.width = width + 'px';
    // console.log(width+'px');
}


// GSAP use for articles expand
const myElement = document.querySelectorAll(".blog-card");

var hover = false;

myElement.forEach(function (element, i) {
  gsap.set(element, { width: "max-content", height: "5.5vh" });

  element.addEventListener("mouseover", () => {
    gsap.to(element, { width: "max-content", height: "max-content"});
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, { width: "max-content", height: "5.5vh"});
  });
});
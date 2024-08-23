
let leftPosition = 0;

function moveRight() {
  leftPosition += 50;
  let circle = document.getElementById("circle");
  circle.style.right = `${leftPosition}px`;
    circle.classList.toggle("toYellow")
}


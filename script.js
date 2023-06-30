let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = 0;
let isSpinning = false;
let targetRotation = 0;
let rotateInterval;

btn.onclick = function () {
  if (isSpinning) {
    return; // Ignore the click if the wheel is already spinning
  }

  isSpinning = true;
  targetRotation += 360 * 4 + 10; // Adjust the target rotation to stop at the "Try Again" option
  
  rotateInterval = setInterval(() => {
    number += 20; // Increase the rotation angle increment to make the wheel spin faster

    container.style.transform = "rotate(" + number + "deg)";

    if (number >= targetRotation) {
      clearInterval(rotateInterval);
      isSpinning = false;
    }
  }, 10);
}

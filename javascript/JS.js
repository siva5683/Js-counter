var countDown = document.getElementById('countDown');
var bgImage = document.getElementById('bg-image');
var initialCountdown = parseInt(countDown.innerHTML);

// Set initial background image on load
if (initialCountdown % 2 === 0) {
  bgImage.src = "images/bg2.jpg";  // Even image
} else {
  bgImage.src = "images/bg1.jpg";  // Odd image
}

var interval = setInterval(function () {
  if (initialCountdown <= 0) {
    clearInterval(interval);
    return;
  }

  initialCountdown = initialCountdown - 1;
  countDown.innerHTML = initialCountdown;

  // Decrease font size dynamically
  countDown.style.fontSize = initialCountdown * 100 + "px";

  // Scale background with respect to current countdown number
  let scaleValue = initialCountdown / 10; // 10 → 1, 0 → 0
  if (scaleValue < 0) scaleValue = 0;
  bgImage.style.transform = "scale(" + scaleValue + ")";

  // Change background image for even and odd numbers
  if (initialCountdown % 2 === 0) {
    bgImage.src = "images/bg2.jpg";
  } else {
    bgImage.src = "images/bg1.jpg";
  }
}, 1000);
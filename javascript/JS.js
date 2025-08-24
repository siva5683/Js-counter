
var countDown = document.getElementById('countDown');
var bgImage = document.getElementById('bg-image');

<<<<<<< HEAD
var initialCountdown = countDown.innerHTML;

var interval = setInterval(function () {
    initialCountdown = initialCountdown - 1;
    countDown.innerHTML = initialCountdown;


    countDown.style.fontSize = initialCountdown * 100 + "px";

    var imagePath = initialCountdown % 2 === 0 ? './images/bg1.jpg' : './images/bg2.jpg';
    bgImage.src = imagePath;
    bgImage.style.width = initialCountdown * 100 + "px";

    if (initialCountdown <= 0) {
        clearInterval(interval);
    }
}, 1000);
=======


var initialCountdown = countDown.innerHTML;


var interval = setInterval(function () {

    initialCountdown = initialCountdown - 1;

    countDown.innerHTML = initialCountdown

    countDown.style.fontSize = initialCountdown * 100 + "px";


    var imagePath = initialCountdown % 2 === 0 ? './images/bg1.jpg' : './images/bg2.jpg';
    bgImage.src = imagePath;
    console.log(bgImage.src);

    if (initialCountdown <= 0) {
        clearInterval(interval)
    }

}, 1000)
>>>>>>> 1e5c8106ee9f3de0904bb0939cecdd571cc97b70

var countDown = document.getElementById('countDown');
var bgImage = document.getElementById('bg-image');



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

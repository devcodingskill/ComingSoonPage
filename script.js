
(()=>{
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

var countdownDate = new Date("May 16, 2025 00:00:00").getTime();

const interval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = day < 10 ? "0" + day : day;
    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    minutes.innerHTML = minute < 10 ? "0" + minute : minute;
    seconds.innerHTML = second < 10 ? "0" + second : second;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(interval);
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
    }

}, 1000);
})();
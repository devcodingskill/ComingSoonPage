
const days =document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');      
const seconds = document.getElementById('seconds');
let today = new Date();
const targetDate = new Date('2025-05-10T12:59:59');
console.log(targetDate);
console.log(targetDate.getSeconds()-today.getSeconds());
days.innerHTML = today.getDate();
    hours.innerHTML = today.getHours();
    minutes.innerHTML = today.getMinutes();
    seconds.innerHTML = today.getSeconds();
setInterval(countdown,1000);

function countdown() {   
    today = new Date();
    days.innerHTML = targetDate.getDate()-today.getDate()<9? '0' + targetDate.getDate()-today.getDate() : targetDate.getDate()-today.getDate();
    hours.innerHTML = targetDate.getHours()-today.getHours()<9? '0' + targetDate.getHours()-today.getHours() : targetDate.getHours()-today.getHours();  
    minutes.innerHTML = targetDate.getMinutes()-today.getMinutes()<9? '0' + targetDate.getMinutes()-today.getMinutes() : targetDate.getMinutes()-today.getMinutes();
    seconds.innerHTML = targetDate.getSeconds()-today.getSeconds()<9? '0' + targetDate.getSeconds()-today.getSeconds() : targetDate.getSeconds()-today.getSeconds();

}
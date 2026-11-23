// script.js
function showTime() {
   const time = new Date();
   let hour = time.getHours();
   let minutes = time.getMinutes();
   let seconds = time.getSeconds();
   let am_pm = "AM";
   if (hour >= 12) {
       am_pm = "PM";
       if (hour > 12) hour -= 12;
   } else if (hour === 0) {
       hour = 12;
   }
   hour = hour < 10 ? "0" + hour : hour;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;
   const currentTime = `${hour}:${minutes}:${seconds} ${am_pm}`;
   document.getElementById("clock").innerText = currentTime;
}
setInterval(showTime, 1000);
showTime();
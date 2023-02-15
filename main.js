function displayTime() {
  const date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let milsec = date.getMilliseconds();
  let session = document.querySelector("#session");

  hours = hours == 0 ? 12 : hours > 12 ? hours - 12 : hours;
  session = hours >= 12 ? "PM" : "AM";

  const hrs = document.querySelector("#hour");
  const minutes = document.querySelector("#min");
  const seconds = document.querySelector("#sec");
  const milleSeconds = document.querySelector("#milsec");

  hrs.innerHTML = hours;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  milleSeconds.innerHTML = milsec;

  const yearFull = document.querySelector("#year");
  const monthFull = document.querySelector("#month");
  const dayFull = document.querySelector("#day");

  yearFull.innerHTML = year;
  monthFull = innerHTML = month;
  dayFull.innerHTML = day;
}
setInterval(displayTime, 1000);

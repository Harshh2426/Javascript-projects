let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let icon = document.querySelector(".dayOrNight");

setInterval(() => {
  let d = new Date();
  let h = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
  let hrs;
  if (h > 12) {
    hrs = h - 12;
    if (!icon.classList.contains("active")) {
      icon.classList.add("active");
    }
  } else {
    hrs = h;
    if (icon.classList.contains("active")) {
        icon.classList.remove("active");
      }
  }
  hrs = hrs < 10 ? "0" + hrs : d.getHours();
  hours.innerHTML = hrs;
  minutes.innerHTML =
    d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  seconds.innerHTML =
    d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
}, 1000);

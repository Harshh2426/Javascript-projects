let mainbox = document.querySelector(".mainbox");
let body = document.body;

mainbox.addEventListener("click", (e) => {
  body.style.background = e.target.id;
  let allBtn = document.getElementsByClassName("button");
  let aaloo=Array.from(allBtn)
  aaloo.forEach((element) => {
    if (element.classList.contains("layer")) element.classList.remove("layer");
  });
  e.target.classList.toggle("layer");
});

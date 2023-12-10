let results = document.querySelector("#results");

let btn = document.querySelector("#btn");

let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

let node;
btn.addEventListener("click", (e) => {
  e.preventDefault();

  let h = Number.parseInt(height).value;
  let w = Number.parseInt(weight).value;
  let ans = w / (h * h);
  if (ans < 18.6) {
    node = "Under Weight";
  } else if (ans > 24.9) {
    node = "Overweight";
  } else {
    node = "Normal Range";
  }
  results.innerHTML = node;
  results.classList.add("active");
});

height.addEventListener("focus", () => {
  if (results.classList.contains("active")) {
    results.classList.remove("active");
  }
});
width.addEventListener("focus", () => {
  if (results.classList.contains("active")) {
    results.classList.remove("active");
  }
});

// const html = document.querySelector("html");
// const btn = document.querySelector("#theme-toggle");

// function toggleTheme() {
//   html.classList.toggle("dark");
// }

// btn.addEventListener("click", toggleTheme);

const html = document.querySelector("html");
const btn = document.querySelector("#theme-toggle");

function toggleTheme() {
  // giver knappen class "dark" → knob slider
  btn.classList.toggle("dark");

  // giver html class "dark" → dit tema skifter
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);

// const html = document.querySelector("html");
// const btn = document.querySelector("#theme-toggle");

// function toggleTheme() {
//   html.classList.toggle("dark");
// }

// if (localStorage.getItem("darkmode")) {
//   html.classList.toggle("dark");
//   btn.textContent = "Light";
// }

// if (html.classList.contains("dark")) {
//   btn.textContent = "Light";
//   localStorage.setItem("darkmode", true);
// } else {
//   btn.textContent = "Dark";
//   localStorage.setItem("darkmode", false);
// }

// btn.addEventListener("click", toggleTheme);

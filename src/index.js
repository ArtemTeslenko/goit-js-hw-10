import "./css/styles.css";

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box");

// const r = fetch("https://restcountries.com/v3.1/name/sw")
//   .then((response) => {
//     return response.json();
//   })
//   .then((country) => console.log(country));
// console.log(r);

inputEl.addEventListener("input", onInput);

function onInput(e) {
  const val = e.target.value;
  console.log(val);
}

function fetchCountries(name) {}

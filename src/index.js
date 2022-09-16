import "./css/styles.css";
import { fetchCountries } from "./js/fetchCountries";
import { debounce } from "throttle-debounce";

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box");

inputEl.addEventListener("input", debounce(1500, onInput));

function onInput(e) {
  const val = e.target.value;
  fetchCountries(val);
}

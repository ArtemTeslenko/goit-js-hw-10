import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import * as renderingFn from './js/rendering';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const val = e.target.value.trim();
  if (val) {
    fetchCountries(val);
  } else {
    renderingFn.resetMarkup();
  }
}

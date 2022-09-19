export { countriesListRendering, countryInformationRendering, resetMarkup };
import { refs } from "./variables";

function countriesListMarkup(item) {
  return `<li><img src = "${item.flags.svg}" width="20px" height="100%" alt = "${item.name.official}"></img><p>${item.name.official}</p></li>`;
}

function countryInformationMarkup(objData) {
  return `<div class="header-wrapper"><img src="${
    objData.flags.svg
  }" width="40px" height="100%" alt = ""></img><h1>${
    objData.name.official
  }</h1></div><ul class="country-inform"><li><span class="description">Capital:</span>${
    objData.capital
  }</li><li><span class="description">Population:</span>${
    objData.population
  }</li><li><span class="description">Languages:</span>${Object.values(
    objData.languages
  )}</li></ul>`;
}

function countriesListRendering(data) {
  if (data.length > 1) {
    const markup = data.reduce(
      (acc, item) => acc + countriesListMarkup(item),
      ""
    );
    refs.countryContainerEl.innerHTML = "";
    refs.listEl.innerHTML = markup;
  }
}

function countryInformationRendering(data) {
  if (data.length === 1) {
    const objData = data[0];
    const markup = countryInformationMarkup(objData);
    refs.listEl.innerHTML = "";
    refs.countryContainerEl.innerHTML = markup;
  }
}

function resetMarkup() {
  refs.countryContainerEl.innerHTML = "";
  refs.listEl.innerHTML = "";
}

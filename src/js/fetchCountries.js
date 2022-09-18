import * as renderingFn from "./rendering";
import * as notificationsFn from "./notifications";

export function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then((response) => {
      if (response.status === 404) {
        notificationsFn.onFetchError();
        return [];
      }
      return response.json();
    })
    .then(rendering);
}

function rendering(data) {
  if (data.length > 10) {
    notificationsFn.onFetchTooMach();
    return;
  }
  if (data.length > 1) {
    renderingFn.countriesListRendering(data);
  }
  if (data.length === 1) {
    renderingFn.countryInformationRendering(data);
  }
}

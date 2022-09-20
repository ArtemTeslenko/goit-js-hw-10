import * as renderingFn from './rendering';
import * as notificationsFn from './notifications';

const COUNTRY_ROUTE = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  fetch(
    `${COUNTRY_ROUTE}${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (response.status === 404) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(rendering)
    .catch(() => {
      notificationsFn.onFetchError();
      renderingFn.resetMarkup();
    });
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
  if (data.length === 0) {
    return;
  }
}

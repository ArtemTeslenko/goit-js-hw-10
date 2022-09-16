export function fetchCountries(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => {
      return response.json();
    })
    .then(rendering);
}

function rendering(response) {
  for (const item of response) {
    console.log(item.name.official);
    console.log(item.capital);
    console.log(item.population);
    console.log(item.flags.svg);
    console.log(item.languages);
  }
}

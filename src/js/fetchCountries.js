export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => console.log(data));
}

// {name}?fields=name.official,capital,population,flags.svg,languages

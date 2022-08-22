import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import countryMarkup from './templates/country-info.hbs';
import someCountriesMarkup from './templates/some-countries-markup.hbs';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 500;

const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(evt) {
  let inputValue = evt.target.value.trim(); //санитизацию введенной строки

  if (inputValue) {
    fetchCountries(inputValue).then(renderMarcup).catch(onError);
  }
  if (!inputValue) {
    clearMarcup();
  }
}

function renderMarcup(data) {
  clearMarcup();

  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }
  if (data.length >= 2) {
    data.forEach(elem => {
      countryList.innerHTML += someCountriesMarkup(elem);
    });
  }
  if (data.length === 1) {
    countryInfo.innerHTML = countryMarkup(data[0]);
  }
}

function onError() {
  Notify.failure('Oops, there is no country with that name');
}

function clearMarcup() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}

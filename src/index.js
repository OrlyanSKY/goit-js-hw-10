import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', evt => {
  val = evt.target.value;
  fetchCountries(val);
});

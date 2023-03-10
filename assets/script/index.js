'use strict';

const digitalClock = document.querySelector('#digitalClock');

setInterval(() => {
  return digitalClock.innerText = new Date().toLocaleTimeString();
}, 1000);

const alarm = document.querySelector('#alarm');
const input = document.querySelector('.input');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  alarm.append(input.value);
});
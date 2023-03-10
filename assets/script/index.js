'use strict';

const digitalClock = document.querySelector('#digitalClock');

let clock = setInterval(() => {
  digitalClock.innerText = new Date().toLocaleTimeString();
}, 1000);

const alarm = document.querySelector('#alarm');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const output = document.querySelector('#output');

function hasColon() {
  if (input.value.includes(':') && input.value.indexOf(':') === 2) {
    return true;
  }
  
  else {
    return false;
  }
}

button.addEventListener('click', () => {
  if (hasColon()) {
    alarm.innerText = input.value;
    input.value = '';
  } else {
    output.innerText = 'Please follow the example below: 00:00';
  }
});

const alarmSound = new Audio('./assets/audio/alarm.mp3');
alarmSound.type = 'audio/mp3';
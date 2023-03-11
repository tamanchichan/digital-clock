'use strict';

const digitalClock = document.querySelector('#digitalClock');
const alarm = document.querySelector('#alarm');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const output = document.querySelector('#output');

const alarmSound = new Audio('./assets/audio/alarm.mp3');
alarmSound.type = 'audio/mp3';

function clock() {
  let hours = new Date().getHours().toString().padStart(2, '0');
  let minutes = new Date().getMinutes().toString().padStart(2, '0');
  let seconds = new Date().getSeconds().toString().padStart(2, '0');
  let time = `${hours}:${minutes}:${seconds}`;
  
  setInterval(
    () => {
      digitalClock.innerText = clock();
    }, 1000
  );
  
  if (alarm.innerText === `${hours}:${minutes}`) {
    playAlarm();
    // NOT WORKING! IT IS GLITCHING
    // setTimeout(
    //   () => {
    //     stopAlarm();
    //   }, 5000
    // )
  }
  
  return time;
}

clock();

function hasColon() {
  if (input.value.includes (':') && input.value.indexOf(':') === 2) {
    return true;
  } else {
    return false;
  }
}

function playAlarm() {
  alarmSound.play();
}

function stopAlarm() {
  alarmSound.pause();
}

button.addEventListener('click', () => {
  if (hasColon()) {
    alarm.innerText = input.value;
  } else {
    output.innerText = 'Please follow the example below: hh:mm (12:34)'
  }
});
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
  alarmSound.currentTime = 0;
}

button.addEventListener('click', () => {
  if (hasColon()) {
    alarm.innerText = input.value;
    input.value = '';
    
    const alarmHour = alarm.innerText.slice(0,2);
    const alarmMinute = alarm.innerText.slice(3,5);
    
    const alarmTime = new Date();
    alarmTime.setHours(alarmHour);
    alarmTime.setMinutes(alarmMinute);
    alarmTime.setSeconds(0);
    alarmTime.setMilliseconds(0);
    
    const currentTime = new Date();
    const timeUntilAlarm = alarmTime.getTime() - currentTime.getTime();

    setTimeout(() => {
      playAlarm();
      alarm.style.color = '#f00';
      
      setTimeout(() => {
        stopAlarm();
        alarm.style.color = '#000';
        alarm.innerText = '';
      }, 5000);
    }, timeUntilAlarm);
  } else {
    output.innerText = 'Please follow the example below: hh:mm (12:34)'
  }
});
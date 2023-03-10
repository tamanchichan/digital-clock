'use strict';

const digitalClock = document.querySelector('#digitalClock');

setInterval(() => {
  return digitalClock.innerText = new Date().toLocaleTimeString();
}, 1000);
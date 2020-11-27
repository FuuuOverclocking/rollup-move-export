'use strict';

let depModule = null;

function registerModule(m) {
  depModule = m;
}

function getModule() {
  return depModule;
}

console.log(getModule());

registerModule(null);

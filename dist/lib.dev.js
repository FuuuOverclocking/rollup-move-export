'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const moduleA = {
  id: "A",
};

// I don't need to import anything, but anything under
// this folder (src/core/**) should import me.

let depModule = null;

function registerModule(m) {
  depModule = m;
}

function getModule() {
  return depModule;
}

console.log(getModule()); // ⚠ incorrectly print "undefined"

const abc = 123;

registerModule(moduleA); // side-effect statement

exports.abc = abc;

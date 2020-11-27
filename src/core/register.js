// I don't need to import anything, but anything under
// this folder (src/core/**) should import me.

let depModule = null;

export function registerModule(m) {
  depModule = m;
}

export function getModule() {
  return depModule;
}

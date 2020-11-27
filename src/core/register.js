let depModule = null;

export function registerModule(m) {
  depModule = m;
}

export function getModule() {
  return depModule;
}

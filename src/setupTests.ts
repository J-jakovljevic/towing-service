const IntersectionObserverStub = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};

if (typeof globalThis.IntersectionObserver === "undefined") {
  Object.defineProperty(globalThis, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserverStub,
  });
}

if (typeof globalThis.IntersectionObserverEntry === "undefined") {
  Object.defineProperty(globalThis, "IntersectionObserverEntry", {
    writable: true,
    configurable: true,
    value: class IntersectionObserverEntry {},
  });
}

export {};

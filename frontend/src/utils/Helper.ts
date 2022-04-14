export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const throttle = (fn: Function, ms = 300) => {
  let enableCall = true;

  return function (this: any, ...args: any[]) {
    if (!enableCall) return;
    enableCall = false;
    fn.apply(this, args);
    setTimeout(() => (enableCall = true), ms);
  };
};

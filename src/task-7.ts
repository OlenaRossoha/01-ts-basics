/*xport function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}*/
function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello from TS');
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));

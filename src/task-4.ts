/*export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}*/
function printUserInfo(name: string, age: number, email?: string): void {
  console.log('Name:', name);
  console.log('Age:', age);
  if (email) {
    console.log('Email:', email);
  }
}

printUserInfo('Alice', 30);
printUserInfo('Bob', 25, 'bob@mail.com');

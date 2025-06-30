/*export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}*/
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Виклики з явною типізацією дженериків
const num = getFirstElement<number>([1, 2, 3]); // number
const str = getFirstElement<string>(['a', 'b', 'c']); // string
const bool = getFirstElement<boolean>([true, false, true]); // boolean

console.log(num); // 1
console.log(str); // "a"
console.log(bool); // true

// ❌ TypeScript не дозволить передати масив змішаних типів без явної типізації
// const mixed = getFirstElement([1, "two", true]); // Помилка

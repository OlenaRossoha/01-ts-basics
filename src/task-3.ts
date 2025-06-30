/*export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}*/
// Тип для елементів масиву products
interface Product {
  id: number;
  title: string;
}

// Типізовані масиви
const usernames: string[] = ['alice', 'bob', 'charlie'];

const ratings: number[] = [4.5, 3.8, 5];

const products: Product[] = [
  { id: 1, title: 'Phone' },
  { id: 2, title: 'Laptop' },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);

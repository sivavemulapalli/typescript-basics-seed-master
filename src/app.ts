let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y) => {
  if(y) {
   return x * y
  } else {
    return x;
  }

const sum = sumOrder(25);

sumOrder(25, 2);

console.log(`Total sum: ${sum}`);

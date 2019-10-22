let pizza: { name: string; price: number; getName(): string };

pizza = {
  name: "Plain Old Pepperoni",
  price: 20,
  getName() {
    return pizza.name;
  }
};

console.log(pizza.getName());

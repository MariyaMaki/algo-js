class Animal {
  constructor(name) {
    this.name = name;
    this.greeting = "Hello";
  }
  sayHello() {
    return `${this.greeting}! I'm a ${this.name}!`;
  }
}

let dog = new Animal("dog");
let cat = new Animal("cat");

console.log(dog.sayHello());
console.log(cat.sayHello());

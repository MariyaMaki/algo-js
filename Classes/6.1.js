class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name} is saying: Meow! and is ${this.age} years old`);
  }
}
let Skitty = new Cat("Skitty", 9);
let Pixel = new Cat("Pixel", 6);
Skitty.speak();
Pixel.speak();

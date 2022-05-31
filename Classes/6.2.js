class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
  }
}
let person = new Person("John", "Doe");
person.sayHello();

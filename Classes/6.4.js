// Create a class named Person. It will have two properties, firstname and lastname, as well as a getter name, which will return "[firstname] [lastname]", and a setter name, which will divide the full name on the basis of a space: the first element will be the firstname, the second the lastname.

// Test the class: Create an instance of the Person class and display the value of the name inside the console, then assigns a new value to it and displays the state of the instance inside the console at the end of the process.

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get name() {
    return `${this.firstname} ${this.lastname}`;
  }
  set name(fullName) {
    let name = fullName.split(" ");
    this.firstname = name[0];
    this.lastname = name[1];
  }
}
let personBis = new Person("Luca", "Faus");
console.log(personBis.name);

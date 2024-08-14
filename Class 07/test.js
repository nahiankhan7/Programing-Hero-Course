const person = {
  firstName: "Alex",
  lastName: "Rio",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  salary: 1500,
  chargeBill: function (amount, tips, tax) {
    this.salary = this.salary - amount - tips - tax;
    return this.salary;
  },
};
person.chargeBill(1);
// console.log(person.salary);

const heroPerson = {
  firstName: "Rex",
  lastName: "Fex",
  salary: 1000,
};
// bind method call another object function
const heroBill = person.chargeBill.bind(heroPerson);
// heroBill(200);
// console.log(heroPerson.salary);

// call method call another object function
person.chargeBill.call(heroPerson, 900, 25, 25);
console.log(heroPerson.salary);

// make all object shorter using class object method
class Person {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
}
const firstPerson = new Person("Alex", "Rio", 2000);
console.log(firstPerson);
const secondPerson = new Person("Neo", "Jax", 5000);
console.log(secondPerson);

// apply method and use parameter like array []
const test = person.chargeBill.apply(firstPerson, [500, 500, 10]);
console.log(test);

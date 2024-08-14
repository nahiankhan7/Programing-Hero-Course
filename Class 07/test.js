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

//apply method and use parameter like array []

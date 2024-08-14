const person = {
  firstName: "Alex",
  lastName: "Rio",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  salary: 1500,
  chargeBill: function (amount) {
    this.salary = this.salary - amount;
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
const heroBill = person.chargeBill.bind(heroPerson);
heroBill(300);
console.log(heroPerson.salary);

// const number = [10, 20, 30, 40, 50];
// const output = [];
// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   const result = element * element;
//   output.push(result);
// }
// console.log(output);

// const number = [10, 20, 30, 40, 50];
// const result = number.map((x) => x * x);
// console.log(result);

// const number = [10, 20, 30, 40, 50];
// const result = number.filter((x) => x > 10);
// console.log(result);

const students = [
  {
    id: 99,
    name: "Hero",
  },
  {
    id: 104,
    name: "Pappu",
  },
  {
    id: 102,
    name: "Noor",
  },
];
const names = students.map((s) => s.name);
const bigger = students.filter((x) => x.id >= 100);
console.log(bigger);

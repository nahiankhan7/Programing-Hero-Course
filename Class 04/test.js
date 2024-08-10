// const person = {
//   name: "Jack",
//   age: 24,
//   address: "Baler Hat",
//   phone: 889231467,
//   friendList: ["john", "lari", "neo"],
// };
// const { address, phone } = person;
// console.log(address, phone);

const friends = [
  "Oliver",
  "Jake",
  "Noah",
  "James",
  "William",
  "Damian",
  "Daniel",
  "Thomas",
];
const [x, y, z, ...w] = friends;
console.log(...w);

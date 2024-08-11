// function sum(first, second) {
//   let result = first + second;
//   return result;
// }
// const output = sum(3, 12);
// console.log(output);

// const addName = ["Alex", "John", "Peri"];
// const randomIndex = Math.floor(Math.random() * addName.length);
// const winner = addName[randomIndex];
// console.log(`The winner is: ${winner}`);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const part = numbers.slice(2, 7);
// const remove = numbers.splice(2, 5);
// const join = numbers.join(" ");
// console.log(join);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < number.length; index++) {
  const element = number[index];
  if (element > 5) {
    break;
    // continue;
  }
  console.log(element);
}

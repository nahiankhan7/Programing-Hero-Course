// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       displayData(data);
//     });
// }
// loadData();

function displayData(data) {
  const parentNode = document.getElementById("myList");
  data.forEach((user) => {
    const item = document.createElement("li");
    item.innerText = user.name;
    parentNode?.appendChild(item);
  });
}

// async function hello(name) {
//   return "hello " + name;
// }
// const getHi = hello("Mofiz");
// console.log(getHi);
// getHi.then((res) => console.log(res));

async function usersData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}
usersData().then((data) => {
  displayData(data);
});

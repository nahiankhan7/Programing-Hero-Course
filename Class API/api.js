// const user = { id: 201, name: "Kader" };
// const userJson = JSON.stringify(user);
// const jSonUser = JSON.parse(userJson);
// console.log(jSonUser);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => displayUser(json));

function displayUser(users) {
  const userNames = users.map((user) => user.name);

  userNames.forEach((user) => {
    const ulElement = document.getElementById("allUsers");
    const liElement = document.createElement("li");

    liElement.textContent = user;
    ulElement?.appendChild(liElement);
  });
}

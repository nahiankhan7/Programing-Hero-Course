// const user = { id: 201, name: "Kader" };
// const userJson = JSON.stringify(user);
// const jSonUser = JSON.parse(userJson);
// console.log(jSonUser);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => displayUser(json))
//   .catch((error) => console.log(error));

// function displayUser(users) {
//   const userNames = users.map((user) => user.name);
//   const ulElement = document.getElementById("allUsers");

//   userNames.forEach((user) => {
//     const liElement = document.createElement("li");
//     liElement.textContent = user;
//     ulElement?.appendChild(liElement);
//   });
// }

const submitButton = document.getElementById("subButton");
submitButton?.addEventListener("click", function () {
  const title = document.getElementById("titleId")?.value;
  const bodyContent = document.getElementById("bodyId")?.value;

  const postInfo = {
    title: title,
    body: bodyContent,
  };
  postToServer(postInfo);
});

function postToServer(postInfo) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postInfo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

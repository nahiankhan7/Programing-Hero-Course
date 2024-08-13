const allData = "https://jsonplaceholder.typicode.com/comments";

fetch(allData)
  .then((res) => res.json())
  .then((data) => getComment(data));

// function usersDetails(users) {
//   const usersName = users.map((user) => user.company.name);
//   const webLink = users.map((link) => link.website);

//   setInterval(() => {
//     const randomIndex = Math.floor(Math.random() * usersName.length);
//     const randomName = usersName[randomIndex];

//     const element = (document.getElementById("activity").innerText =
//       randomName);
//   }, 1000);

//   const linkElement = document.getElementById("link");
//   linkElement.href = webLink[5];
// }

function getComment(cmnt) {
  const comment = cmnt.map((x) => x.body);

  const ulElement = document.getElementById("ulItem");
  comment.forEach((x) => {
    const liElement = document.createElement("li");
    const pTag = document.createElement("p");

    liElement.className = "li-list";
    pTag.textContent = x;

    liElement.appendChild(pTag);
    ulElement?.appendChild(liElement);
  });
}

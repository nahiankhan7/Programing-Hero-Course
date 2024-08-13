fetch("https://randomuser.me/api")
  .then((res) => res.json())
  .then((data) => {
    const user = data.results[0];

    // Set user picture
    const minPhoto = user.picture.large;
    document.getElementById("image").src = minPhoto;

    // Set user name
    const { title, first, last } = user.name;
    const fullName = `${title} ${first} ${last}`;
    document.getElementById("user-name").innerText = fullName;

    // Set user gender
    const gender = user.gender;
    document.getElementById("gender").innerText = gender;

    // Set user age
    const age = user.dob.age;
    document.getElementById("age").innerText = age;

    // Set user email
    const email = user.email;
    document.getElementById("email").innerText = email;

    // Set user phone
    const phone = user.phone;
    document.getElementById("number").innerText = phone;

    // Set user location
    const { city, state, country } = user.location;
    const location = `${city}, ${state}, ${country}`;
    document.getElementById("location").innerText = location;
  })
  .catch((error) =>
    console.log("There was a problem with the fetch operation:", error)
  );

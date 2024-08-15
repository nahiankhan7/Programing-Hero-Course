async function countriesData() {
  const api = await fetch("https://restcountries.com/v3.1/all");
  const data = await api.json();
  return data;
}

countriesData().then((data) => {
  allData(data);
});

function allData(data) {
  const bodyTag = document.getElementById("bodyElement");

  if (!bodyTag) {
    console.error("bodyElement not found in the DOM.");
    return;
  }

  // Assuming 'data' is an array of objects

  // Create the main parent container that will hold all childDiv
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("container");

  // Loop through the data array to create and append childDiv
  data.forEach((x) => {
    const shortName = x.altSpellings
      ? x.altSpellings[0]
      : "No short name available";
    const fullName =
      x.altSpellings && x.altSpellings.length > 1
        ? x.altSpellings[1]
        : "No full name available";

    // Create the childDiv
    const childDiv = document.createElement("div");
    childDiv.classList.add("items");

    // Add mouseover event listener to each childDiv
    childDiv.addEventListener("mouseover", () => {
      // Remove existing capital element if it exists to prevent duplicates
      const existingCapital = childDiv.querySelector(".capital");
      if (!existingCapital) {
        const capital = x.capital ? x.capital[0] : "No capital available";
        const p2Tag = document.createElement("p");
        p2Tag.classList.add("capital");
        p2Tag.textContent = capital;

        childDiv.appendChild(p2Tag);
      }
    });

    childDiv.addEventListener("mouseout", () => {
      // Remove the capital element when the mouse leaves the childDiv
      const existingCapital = childDiv.querySelector(".capital");
      if (existingCapital) {
        childDiv.removeChild(existingCapital);
      }
    });

    // Create the h1 and p elements and set their content
    const hTag = document.createElement("h1");
    const pTag = document.createElement("p");

    hTag.textContent = shortName;
    pTag.textContent = fullName;

    // Append the h1 and p elements to the childDiv
    childDiv.appendChild(hTag);
    childDiv.appendChild(pTag);

    // Append the childDiv to the parentDiv
    parentDiv.appendChild(childDiv);
  });

  // Finally, append the parentDiv to the body (or any other desired parent element)
  document.body.appendChild(parentDiv);
}

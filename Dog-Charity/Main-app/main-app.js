document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer");
  const detailsContainer = document.getElementById("detailsContainer");

  fetch("../dog-data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      jsonData.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = item.imageUrl;
        card.appendChild(image);

        const title = document.createElement("h2");
        title.textContent = item.name;
        card.appendChild(title);

        cardContainer.appendChild(card);
        card.addEventListener("click", function () {
          detailsContainer.style.display = "block";
          displayDetails(item);
        });
      });
    })
    .catch((error) => console.error("Error", error));

  function displayDetails(item) {
    detailsContainer.innerHTML = "";

    const detailsImage = document.createElement("img");
    detailsImage.src = item.imageUrl;

    const detailsTitle = document.createElement("h2");
    detailsTitle.textContent = `Hi my name is ${item.name}`;

    const detailsParagraph = document.createElement("p");
    detailsParagraph.textContent = "Additional details about the dog...";

    detailsContainer.appendChild(detailsImage);
    detailsContainer.appendChild(detailsTitle);
    detailsContainer.appendChild(detailsParagraph);
  }
});

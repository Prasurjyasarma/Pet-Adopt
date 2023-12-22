document.addEventListener("DOMContentLoaded", function () {
  //! Get the container element where the cards will be added
  const preLoader = document.getElementById("preloader");
  const cardContainer = document.getElementById("cardContainer");

  //! Function to hide the preloader
  window.addEventListener("load", () => {
    preLoader.style.display = "none";
  });

  //! Fetch data from the JSON file
  fetch("../dog-data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      //! Iterate through each item in the JSON data
      jsonData.forEach((item) => {
        //! Create a card element
        const card = document.createElement("div");
        card.classList.add("card");

        //! Create an image element and set its source
        const image = document.createElement("img");
        image.src = item.imageUrl;
        card.appendChild(image);

        //! Create a title element and set its text content
        const title = document.createElement("h2");
        title.textContent = item.name;
        card.appendChild(title);

        //! Append the card to the card container
        cardContainer.appendChild(card);

        //! Add a click event listener to each card
        card.addEventListener("click", function () {
          //! Call the navigateToDetailsPage function when a card is clicked
          navigateToDetailsPage(item);
        });
      });
    })
    .catch((error) => console.error("Error", error));

  //! Function to navigate to the details page with item information
  function navigateToDetailsPage(item) {
    //! Create a query string with item information
    const queryParams = `?name=${item.name}&imageUrl=${item.imageUrl}`;

    //! Set the window location to the details page with the query parameters
    window.location.href = `./details-content/detailscontainer.html${queryParams}`;
  }
});

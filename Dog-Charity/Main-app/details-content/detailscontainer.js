//! Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  const preLoader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    preLoader.style.display = "none";
  });
  //! Retrieve query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const dogName = urlParams.get("name");
  const dogImageUrl = urlParams.get("imageUrl");

  //! Get the container where the details will be displayed
  const detailsContainer = document.getElementById("detailsContainer");

  //! Create a container for images
  const imagesContainer = document.createElement("div");

  //! Create and append three image elements with the same URL (consider changing this logic)
  for (let i = 0; i < 3; i++) {
    const detailsImage = document.createElement("img");
    detailsImage.src = dogImageUrl;
    imagesContainer.appendChild(detailsImage);
  }

  //! Create and set the title element with the dog's name
  const detailsTitle = document.createElement("h3");
  detailsTitle.textContent = `Hi, my name is ${dogName}`;

  //! Create and set the title element with age, breed, and location information
  const ageAndBreedTitle = document.createElement("h2");
  ageAndBreedTitle.textContent = "Age: 3 | Breed: Lab | Location: abc";

  //! Create and set a paragraph element with a description of the dog
  const detailsParagraph = document.createElement("p");
  detailsParagraph.textContent = `Meet our lovable furry friend, ready for adoption! This charming dog, known as ${dogName}, boasts a heartwarming personality. With its gentle nature and adorable antics, ${dogName} is an ideal companion. Their playful demeanor and loyalty make them the perfect addition to any loving home. Adopt today and experience unconditional love!`;

  //! Create a button element for adoption
  const detailsButton = document.createElement("button");
  detailsButton.textContent = "I want to adopt";

  //! Append the created elements to the detailsContainer
  detailsContainer.appendChild(imagesContainer);
  detailsContainer.appendChild(ageAndBreedTitle);
  detailsContainer.appendChild(detailsTitle);
  detailsContainer.appendChild(detailsParagraph);
  detailsContainer.appendChild(detailsButton);

  detailsButton.addEventListener("click", () => {
    window.location.href = "./form-content/form-contetnt.html";
  });
});

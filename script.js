// An array of image objects
var images = [
  {
    imageUrl: "./images/MicrosoftTeams-image (1).png",
    price: "$4000",
    size: "Large",
    type: "Nature"
  },
  {
    imageUrl: "./images/MicrosoftTeams-image (2).png",
    price: "$1500",
    size: "Medium",
    type: "City",
  },
  {
    imageUrl: "./images/MicrosoftTeams-image (3).png",
    price: "$3000",
    size: "Small",
    type: "Abstract",
  },
  {
    imageUrl: "./images/MicrosoftTeams-image (4).png",
    price: "$2000",
    size: "Small",
    type: "Abstract",
  },
  // Add more image objects here
];
//clear function

// Function to create image elements with additional information and append them to the container
function displayImages(value) {
  var container = document.querySelector(".image-container");

  // Loop through the images array
  for (var i = 0; i < value.length; i++) {
    var image = value[i];

    // Create a container for each image with additional information
    var imageCard = document.createElement("div");
    imageCard.classList.add("image-card");

    // Create an image element
    var imageElement = document.createElement("img");
    imageElement.src = image.imageUrl;
    imageCard.appendChild(imageElement);

    // Create elements for additional information (price, size, type)
    // var typeElement = document.createElement("p");
    // typeElement.textContent = "Section: " + image.type;
    // imageCard.appendChild(typeElement);

    var priceElement = document.createElement("p");
    priceElement.textContent = "Price: " + image.price;
    imageCard.appendChild(priceElement);

    var sizeElement = document.createElement("p");
    sizeElement.textContent = "Size: " + image.size;
    imageCard.appendChild(sizeElement);

    var typeElement = document.createElement("p");
    typeElement.textContent = "Type: " + image.type;
    imageCard.appendChild(typeElement);

    // Append the image container to the main container
    container.appendChild(imageCard);
  }
}
// Call the displayImages function
displayImages(images);
function clear() {
  const clearData = document.getElementById("image-container");
  if (clearData) {
    while (clearData.firstChild) {
      clearData.removeChild(clearData.firstChild);
    }
  }
}
//function to sort by size
function sizeCheck(size) {
  var checkSize = images.filter((i) => i.size === size);
  clear();
  displayImages(checkSize);
  console.log(checkSize);
}
//function to sort by price
function priceSort(price) {
  if (price == "highToLow") {
    var sortPrice = images.sort((p1, p2) =>
      p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
    );
    clear();
    displayImages(sortPrice);
  } else {
    var sortPrice = images.sort((p1, p2) =>
      p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
    );
    clear();
    displayImages(sortPrice);
  }
}

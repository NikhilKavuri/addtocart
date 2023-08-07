let checkBoxContainers = document.getElementsByClassName("checkbox-container");
let radioInputs = document.getElementsByClassName("radio-input");
let tables = document.querySelectorAll("table");
let originalPrices = document.getElementsByClassName("original-price");
let populars = document.getElementsByClassName("popular");
let activeContainerIndex = -1;
const addToCart = document.getElementsByClassName("add-btn")[0];
const showToast = document.getElementsByClassName("success-toast-container")[0];

for (let i = 0; i < checkBoxContainers.length; i++) {
  // Event listener for the container click
  checkBoxContainers[i].addEventListener("click", () => {
    // if nothing is clicked
    if (activeContainerIndex !== -1 && activeContainerIndex !== i) {
      checkBoxContainers[activeContainerIndex].classList.remove("active");
      checkBoxContainers[activeContainerIndex].style.backgroundColor =
        "initial";
      tables[activeContainerIndex].style.display = "none";
      populars[activeContainerIndex].style.display = "none";
      originalPrices[activeContainerIndex].style.display = "none";
      radioInputs[activeContainerIndex].checked = false;
    }
    // if a pair is selected
    if (activeContainerIndex !== i) {
      checkBoxContainers[i].classList.add("active");
      checkBoxContainers[i].style.backgroundColor = "#F4FBF9";
      checkBoxContainers[i].style.outline = "#007F61";
      tables[i].style.display = "block";
      originalPrices[i].style.display = "block";
      populars[i].style.display = "block";
      radioInputs[i].checked = true;
      activeContainerIndex = i;
    }
    // if the second one is selected then close the before one 
    else {
      checkBoxContainers[i].classList.remove("active");
      checkBoxContainers[i].style.backgroundColor = "initial";
      tables[i].style.display = "none";
      populars[i].style.display = "none";
      originalPrices[i].style.display = "none";
      radioInputs[i].checked = false;
      activeContainerIndex = -1;
    }
  });
  // To stop event bubbling while selecting the Table
  let tablesInContainer = checkBoxContainers[i].querySelectorAll("table");
  for (let j = 0; j < tablesInContainer.length; j++) {
    tablesInContainer[j].addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
}
// Event Listener to add to cart
addToCart.addEventListener("click", () => {
  // If any of the pair is selected then Toast should be success
  if (activeContainerIndex >= 0) {
    showToast.firstElementChild.textContent = "Added to Cart Successfully";
    showToast.style.backgroundColor = "rgb(169, 243, 171)";
    showToast.firstElementChild.style.color = "#3c8956";
    showToast.firstElementChild.style.textAlign = "center";
    showToast.style.display = "block";
  }
  // If Nothing is selected then Toast should be Error 
  else {
    showToast.firstElementChild.textContent = "Please select something to add";
    showToast.firstElementChild.style.color = "white";
    showToast.style.backgroundColor = "#F45050";
    showToast.firstElementChild.style.textAlign = "center";
    showToast.style.width = "20vw";
    showToast.style.left = "39vw";
    showToast.style.display = "block";
  }
  // remove the toast message after 2 seconds
  setTimeout(() => {
    showToast.style.display = "none";
  }, 2000);
});

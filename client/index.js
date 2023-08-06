let checkBoxContainers = document.getElementsByClassName("checkbox-container");
let radioInputs = document.getElementsByClassName("radio-input");
let tables = document.querySelectorAll("table");
let originalPrices = document.getElementsByClassName("original-price");
let populars = document.getElementsByClassName("popular");
let activeContainerIndex = -1;
const addToCart = document.getElementsByClassName("add-btn")[0];
const showToast = document.getElementsByClassName("success-toast-container")[0];

for (let i = 0; i < checkBoxContainers.length; i++) {
  checkBoxContainers[i].addEventListener("click", () => {
    if (activeContainerIndex !== -1 && activeContainerIndex !== i) {
      checkBoxContainers[activeContainerIndex].classList.remove("active");
      checkBoxContainers[activeContainerIndex].style.backgroundColor =
        "initial";
      tables[activeContainerIndex].style.display = "none";
      populars[activeContainerIndex].style.display = "none";
      originalPrices[activeContainerIndex].style.display = "none";
      radioInputs[activeContainerIndex].checked = false;
    }
    if (activeContainerIndex !== i) {
      checkBoxContainers[i].classList.add("active");
      checkBoxContainers[i].style.backgroundColor = "#E5F9DB";
      tables[i].style.display = "block";
      originalPrices[i].style.display = "block";
      populars[i].style.display = "block";
      radioInputs[i].checked = true;
      activeContainerIndex = i;
    } else {
      checkBoxContainers[i].classList.remove("active");
      checkBoxContainers[i].style.backgroundColor = "initial";
      tables[i].style.display = "none";
      populars[i].style.display = "none";
      originalPrices[i].style.display = "none";
      radioInputs[i].checked = false;
      activeContainerIndex = -1;
    }
  });
}
addToCart.addEventListener("click", () => {
  if (activeContainerIndex >= 0) {
    showToast.firstElementChild.textContent = "Added to cart";
    showToast.style.backgroundColor = "#3c8956";
    showToast.firstElementChild.style.color = "white";
    showToast.firstElementChild.style.textAlign = "center";
    showToast.style.display = "block";
  } else {
    showToast.firstElementChild.textContent = "Please select something to add";
    showToast.firstElementChild.style.color = "white";
    showToast.style.backgroundColor = "#F45050";
    showToast.firstElementChild.style.textAlign = "center";
    showToast.style.width = "20vw";
    showToast.style.left = "39vw";
    showToast.style.display = "block";
  }
  setTimeout(() => {
    showToast.style.display = "none";
  }, 2000);
});

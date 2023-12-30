const btnEl = document.getElementsByClassName("addToCart");

const btn1El = document.getElementById("btn-1");
const btn2El = document.getElementById("btn-2");
const btn3El = document.getElementById("btn-3");
const btn4El = document.getElementById("btn-4");
const btn5El = document.getElementById("btn-5");

const localStorageKey = "cartItem";

btn1El.addEventListener("click", () => {
  const itemNameElement = document
    .querySelector("#btn-1")
    .parentNode.querySelector("h4")
    .textContent.trim();

  const itemPriceElement = document
    .querySelector("#btn-1")
    .parentNode.querySelector(".font-semibold")
    .textContent.trim();

  const itemImageElement = document.getElementById("tomato-img").src;

  // Display the item name and price (you can customize this part based on your needs)

  var parts = itemPriceElement.split("/");

  // Take the first part of the resulting array
  var finalItemPrice = parts[0].trim(); // trim to remove leading or trailing spaces

  const enteredItem = {
    itemName: itemNameElement,
    itemPrice: finalItemPrice,
    itemImage: itemImageElement,
  };

  console.log(enteredItem);

  //get existing local storage value , if its exists!
  const existingCourierData = localStorage.getItem(localStorageKey); //check pandrom existing ah ethachum item save panirukoma nu
  // console.log(existingCourierData);

  // //parse that string into javascript value
  const existingCourierArray = JSON.parse(existingCourierData); //javascript value ah kidaikum
  // console.log(existingCourierArray);

  if (existingCourierArray) {
    // Create a new array and push the existing localstorage value into new array.

    existingCourierArray.push(enteredItem);

    localStorage.setItem(localStorageKey, JSON.stringify(existingCourierArray));
  } else {
    const newCourierData = []; //push existing code into new array (because apo tha vera engayachum save panna mudium)

    newCourierData.push(enteredItem);

    localStorage.setItem(localStorageKey, JSON.stringify(newCourierData));
  }
  loaded();
});

btn2El.addEventListener("click", () => {
  const itemNameElement = document
    .querySelector("#btn-2")
    .parentNode.querySelector("h4")
    .textContent.trim();

  const itemPriceElement = document
    .querySelector("#btn-2")
    .parentNode.querySelector(".font-semibold")
    .textContent.trim();

  const itemImageElement = document.getElementById("potato-img").src;

  // Display the item name and price (you can customize this part based on your needs)

  var parts = itemPriceElement.split("/");

  // Take the first part of the resulting array
  var finalItemPrice = parts[0].trim(); // trim to remove leading or trailing spaces

  const enteredItem = {
    itemName: itemNameElement,
    itemPrice: finalItemPrice,
    itemImage: itemImageElement,
  };

  console.log(enteredItem);

  //get existing local storage value , if its exists!
  const existingCourierData = localStorage.getItem(localStorageKey); //check pandrom existing ah ethachum item save panirukoma nu
  // console.log(existingCourierData);

  // //parse that string into javascript value
  const existingCourierArray = JSON.parse(existingCourierData); //javascript value ah kidaikum
  // console.log(existingCourierArray);

  if (existingCourierArray) {
    // Create a new array and push the existing localstorage value into new array.

    existingCourierArray.push(enteredItem);

    localStorage.setItem(localStorageKey, JSON.stringify(existingCourierArray));
  } else {
    const newCourierData = []; //push existing code into new array (because apo tha vera engayachum save panna mudium)

    newCourierData.push(enteredItem);

    localStorage.setItem(localStorageKey, JSON.stringify(newCourierData));
  }
  loaded();
});

btn3El.addEventListener("click", () => {
  const itemNameElement = document
    .querySelector("#btn-3")
    .parentNode.querySelector("h4")
    .textContent.trim();

  const itemPriceElement = document
    .querySelector("#btn-3")
    .parentNode.querySelector(".font-semibold")
    .textContent.trim();

  const itemImageElement = document.getElementById("onion-img").src;

  // Display the item name and price (you can customize this part based on your needs)

  var parts = itemPriceElement.split("/");

  // Take the first part of the resulting array
  var finalItemPrice = parts[0].trim(); // trim to remove leading or trailing spaces

  const enteredItem = {
    itemName: itemNameElement,
    itemPrice: finalItemPrice,
    itemImage: itemImageElement,
  };

  console.log(enteredItem);

  //get existing local storage value , if its exists!
  const existingCourierData = localStorage.getItem(localStorageKey); //check pandrom existing ah ethachum item save panirukoma nu
  // console.log(existingCourierData);

  // //parse that string into javascript value
  const existingCourierArray = JSON.parse(existingCourierData); //javascript value ah kidaikum
  // console.log(existingCourierArray);

  if (existingCourierArray) {
    // Create a new array and push the existing localstorage value into new array.

    existingCourierArray.push(enteredItem);

    localStorage.setItem(localStorageKey, JSON.stringify(existingCourierArray));
  } else {
    const newCourierData = []; //push existing code into new array (because apo tha vera engayachum save panna mudium)

    newCourierData.push(enteredItem);

    localStorage.setItem(localStorageKey, JSON.stringify(newCourierData));
  }
  loaded();
});

btn4El.addEventListener("click", () => {
  const itemNameElement = document
    .querySelector("#btn-4")
    .parentNode.querySelector("h4")
    .textContent.trim();

  const itemPriceElement = document
    .querySelector("#btn-4")
    .parentNode.querySelector(".font-semibold")
    .textContent.trim();

  const itemImageElement = document.getElementById("flower-img").src;

  // Display the item name and price (you can customize this part based on your needs)

  var parts = itemPriceElement.split("/");

  // Take the first part of the resulting array
  var finalItemPrice = parts[0].trim(); // trim to remove leading or trailing spaces

  const enteredItem = {
    itemName: itemNameElement,
    itemPrice: finalItemPrice,
    itemImage: itemImageElement,
  };

  console.log(enteredItem);

  //get existing local storage value , if its exists!
  const existingCourierData = localStorage.getItem(localStorageKey); //check pandrom existing ah ethachum item save panirukoma nu
  // console.log(existingCourierData);

  // //parse that string into javascript value
  const existingCourierArray = JSON.parse(existingCourierData); //javascript value ah kidaikum
  // console.log(existingCourierArray);

  if (existingCourierArray) {
    // Create a new array and push the existing localstorage value into new array.

    existingCourierArray.push(enteredItem);

    localStorage.setItem(localStorageKey, JSON.stringify(existingCourierArray));
  } else {
    const newCourierData = []; //push existing code into new array (because apo tha vera engayachum save panna mudium)

    newCourierData.push(enteredItem);

    localStorage.setItem(localStorageKey, JSON.stringify(newCourierData));
  }
  loaded();
});

btn5El.addEventListener("click", () => {
  const itemNameElement = document
    .querySelector("#btn-5")
    .parentNode.querySelector("h4")
    .textContent.trim();

  const itemPriceElement = document
    .querySelector("#btn-5")
    .parentNode.querySelector(".font-semibold")
    .textContent.trim();

  const itemImageElement = document.getElementById("spinach-img").src;

  //button
  const itemButtonElement = document.getElementById("btn-0");
  console.log(itemButtonElement);

  // Display the item name and price (you can customize this part based on your needs)

  var parts = itemPriceElement.split("/");

  // Take the first part of the resulting array
  var finalItemPrice = parts[0].trim(); // trim to remove leading or trailing spaces

  const enteredItem = {
    itemName: itemNameElement,
    itemPrice: finalItemPrice,
    itemImage: itemImageElement,
  };

  console.log(enteredItem);

  //get existing local storage value , if its exists!
  const existingCourierData = localStorage.getItem(localStorageKey); //check pandrom existing ah ethachum item save panirukoma nu
  // console.log(existingCourierData);

  // //parse that string into javascript value
  const existingCourierArray = JSON.parse(existingCourierData); //javascript value ah kidaikum
  // console.log(existingCourierArray);

  if (existingCourierArray) {
    // Create a new array and push the existing localstorage value into new array.

    existingCourierArray.push(enteredItem);

    localStorage.setItem(localStorageKey, JSON.stringify(existingCourierArray));
  } else {
    const newCourierData = []; //push existing code into new array (because apo tha vera engayachum save panna mudium)

    newCourierData.push(enteredItem);

    localStorage.setItem(localStorageKey, JSON.stringify(newCourierData));
  }
  loaded();
});

document.addEventListener("DOMContentLoaded", function () {
  loaded();
});

function loaded() {
  console.log("loaded");

  const items = JSON.parse(localStorage.getItem(localStorageKey)); // Retrieve data from localStorage

  console.log("items", items);

  if (items && items.length > 0) {
    const tableBody = document.querySelector("#itemDataTable tbody");

    tableBody.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
      // Iterate over each item using a for loop

      const item = items[i];

      const row = document.createElement("tr");

      const nameCell = document.createElement("td"); // Create table data for each item property

      nameCell.textContent = item.itemName;
      row.appendChild(nameCell);

      const priceCell = document.createElement("td");
      priceCell.textContent = item.itemPrice;
      row.appendChild(priceCell);

      const imageCell = document.createElement("td");
      const image = document.createElement("img");
      image.src = item.itemImage;
      image.alt = item.itemName; // or any appropriate alt text
      imageCell.appendChild(image);
      row.appendChild(imageCell);

      const buttonCell = document.createElement("td");
      const button = document.createElement("button");
      button.textContent = "DELETE";
      row.appendChild(buttonCell);

      tableBody.appendChild(row); // Append the row to the table body
    }
  } else {
    console.log("No items found in localStorage or the array is empty.");
  }
}

//hide next buttin while clicking
const nextBtnEl = document.getElementById("nxt-btn");
console.dir(nextBtnEl);

btn1El.addEventListener("click", () => {
  nextBtnEl.hidden = "true";
});

btn2El.addEventListener("click", () => {
  nextBtnEl.hidden = "true";
});

btn3El.addEventListener("click", () => {
  nextBtnEl.hidden = "true";
});

btn4El.addEventListener("click", () => {
  nextBtnEl.hidden = "true";
});

btn5El.addEventListener("click", () => {
  nextBtnEl.hidden = "true";
});

//second page

const tableHeadEl = document.getElementById("tableHead");
console.dir(tableHeadEl);

btn1El.addEventListener("click", () => {
  // tableHeadEl.style.display = "block";
  tableHeadEl.classList = "block";
});

btn2El.addEventListener("click", () => {
  tableHeadEl.classList = "block";
});

btn3El.addEventListener("click", () => {
  tableHeadEl.classList = "block";
});

btn4El.addEventListener("click", () => {
  tableHeadEl.classList = "block";
});

btn5El.addEventListener("click", () => {
  tableHeadEl.classList = "block";
});

// Function to delete data

// function remove (){

//   const ans = confirm("Are you sure want to delete")
//   if(ans == true){
//     row=td.parent
//   }

// }

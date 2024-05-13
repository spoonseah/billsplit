// overall diner section
const dinersList = document.querySelector(".diners-list");

// individual diner data
let numOfDiners = 1;
let currDiner = 0;

// sharing plates data
let numOfSharingPlates = 1;
const sharingList = document.querySelector(".sharing-list");

// tax rates data
const gst = 9;
const serviceCharge = 10;

// buttons
const addDinerBtn = document.querySelector(".diners .add-diner .button");

// add new diner
function addDiner(numOfDiners) {
    const currDinerSection = document.createElement("section");
    currDinerSection.className = "diner";
    currDinerSection.id = `diner-${numOfDiners}`;

    // create diner name div
    const dinerNameDiv = document.createElement("div");
    dinerNameDiv.className = "name";
    // create diner name input
    const dinerNameInput = document.createElement("input");
    dinerNameInput.type = "text";
    dinerNameInput.placeholder = "Name";
    // append input to name div
    dinerNameDiv.appendChild(dinerNameInput);

    // create item list
    const indivListDiv = document.createElement("div");
    indivListDiv.className = "indiv-list";

    // create item
    const indivItem = document.createElement("div");
    indivItem.className = `item`;
    // food name
    const foodNameDiv = document.createElement("div");
    foodNameDiv.className = "food-name";
    const foodNameInput = document.createElement("input");
    foodNameInput.type = "text";
    foodNameInput.placeholder = "Food";
    foodNameDiv.appendChild(foodNameInput);
    // food price
    const foodPriceDiv = document.createElement("div");
    foodPriceDiv.className = "price";
    const foodPriceInput = document.createElement("input");
    foodPriceInput.type = "text";
    foodPriceInput.placeholder = "Price*";
    foodPriceDiv.appendChild(foodPriceInput);

    // plus and minus buttons
    const plusMinusBtnsDiv = document.createElement("div");
    plusMinusBtnsDiv.className = "plus-minus-food";
    // plus button
    const plusBtn = document.createElement("div");
    plusBtn.className = `circle-btn plus diner-${numOfDiners}`;
    const plusImg = document.createElement("img");
    plusImg.src = "images/icon-plus.svg";
    plusImg.alt = "";
    plusBtn.appendChild(plusImg);
    // minus button
    const minusBtn = document.createElement("div");
    minusBtn.className = `circle-btn minus disabled diner-${numOfDiners}`;
    const minusImg = document.createElement("img");
    minusImg.src = "images/icon-minus.svg";
    minusImg.alt = "";
    minusBtn.appendChild(minusImg);
    // append buttons to div
    plusMinusBtnsDiv.appendChild(plusBtn);
    plusMinusBtnsDiv.appendChild(minusBtn);

    // append food name and price to item list
    indivItem.appendChild(foodNameDiv);
    indivItem.appendChild(foodPriceDiv);
    indivItem.appendChild(plusMinusBtnsDiv);


    // append .item to .indiv-list
    indivListDiv.appendChild(indivItem);

    // append .name and .indiv-list to .diner
    currDinerSection.appendChild(dinerNameDiv);
    currDinerSection.appendChild(indivListDiv);

    // append individual diner to overall diners section
    dinersList.appendChild(currDinerSection);
}

function plusSharedPlate(clickedSharingPlusID) {
    // sharing list
    const sharingListDiv = document.querySelector(".sharing-list");

    // item
    const newSharingPlateDiv = document.createElement("div");
    newSharingPlateDiv.className = "item";
    newSharingPlateDiv.id = `item ${clickedSharingPlusID + 1}`;

    // food name
    const foodNameDiv = document.createElement("div");
    foodNameDiv.className = "food-name";
    // input
    const foodNameInput = document.createElement("input");
    foodNameInput.type = "text";
    foodNameInput.placeholder = "Food";
    foodNameDiv.appendChild(foodNameInput);

    // price
    const foodPriceDiv = document.createElement("div");
    foodPriceDiv.className = "price";
    // input
    const foodPriceInput = document.createElement("input");
    foodPriceInput.type = "text";
    foodPriceInput.placeholder = "Price";
    foodPriceDiv.appendChild(foodPriceInput);

    // plus minus sharing
    const plusMinusSharingBtnsDiv = document.createElement("div");
    plusMinusSharingBtnsDiv.className = "plus-minus-sharing";
    // plus button
    const plusSharingBtn = document.createElement("div");
    plusSharingBtn.className = `circle-btn sharing-plus sharing-${clickedSharingPlusID + 1}`;
    const plusSharingImg = document.createElement("img");
    plusSharingImg.src = "images/icon-plus.svg";
    plusSharingImg.alt = "";
    plusSharingBtn.appendChild(plusSharingImg);
    // minus button
    const minusSharingBtn = document.createElement("div");
    minusSharingBtn.className = `circle-btn sharing-minus sharing-${clickedSharingPlusID + 1}`;
    const minusSharingImg = document.createElement("img");
    minusSharingImg.src = "images/icon-minus.svg";
    minusSharingImg.alt = "";
    minusSharingBtn.appendChild(minusSharingImg);
    // append plus and minus to the div
    plusMinusSharingBtnsDiv.appendChild(plusSharingBtn);
    plusMinusSharingBtnsDiv.appendChild(minusSharingBtn);

    newSharingPlateDiv.appendChild(foodNameDiv);
    newSharingPlateDiv.appendChild(foodPriceDiv);
    newSharingPlateDiv.appendChild(plusMinusSharingBtnsDiv);

    // append new sharing plate to sharing list
    sharingListDiv.appendChild(newSharingPlateDiv);

    // enable minus buttons
    const minusBtns = document.querySelectorAll(".circle-btn.sharing-minus");
    minusBtns.forEach((minusBtn) => {
        if (numOfSharingPlates > 1) {
            minusBtn.classList.remove("disabled");
        } else {
            minusBtn.classList.add("disabled");
        }
    });
}

// function minusSharedPlates() {

// }

// document.addEventListener("input", () => {
// })

document.addEventListener("click", (event) => {
    
    if (    // click on plus shared plate button
        event.target.classList.contains("sharing-plus") ||
        event.target.parentNode.classList.contains("sharing-plus")
    ) {
        numOfSharingPlates++;
        const clickedSharingPlusID = parseInt(event.target.className.split("sharing-").pop());
        plusSharedPlate(clickedSharingPlusID);
    }
})

addDinerBtn.addEventListener("click", () => {
    numOfDiners++;
    addDiner(numOfDiners);
});
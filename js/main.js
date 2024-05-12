// overall diner section
const dinersList = document.querySelector(".diners-list");

// individual diner data
let numOfDiners = 1;
let currDiner = 0;

// sharing plates data
let numOfSharingPlates = 0;

// sharing plates data

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

// add new sharing plate
function addNewSharingPlate() {

}

addDinerBtn.addEventListener("click", () => {
    numOfDiners++;
    addDiner(numOfDiners);
});
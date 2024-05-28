// overall diner section
const dinersList = document.querySelector(".diners-list");

// individual diner data
let numOfDiners = 1;
let numOfItemsPerDiner = {1: 1}; // track the number of items for each diner

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
    indivItem.classList = `item diner-${numOfDiners} item-1`;
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
    foodPriceInput.type = "number";
    foodPriceInput.placeholder = "Price*";
    foodPriceDiv.appendChild(foodPriceInput);

    // plus and minus buttons
    const plusMinusBtnsDiv = document.createElement("div");
    plusMinusBtnsDiv.className = "plus-minus-indiv";
    // plus button
    const plusBtn = document.createElement("div");
    plusBtn.className = `circle-btn indiv-plus diner-${numOfDiners} item-1`;
    const plusImg = document.createElement("img");
    plusImg.src = "images/icon-plus.svg";
    plusImg.alt = "";
    plusBtn.appendChild(plusImg);
    // minus button
    const minusBtn = document.createElement("div");
    minusBtn.className = `circle-btn indiv-minus disabled diner-${numOfDiners} item-1`;
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

    // initialise number of items for this diner
    numOfItemsPerDiner[numOfDiners] = 1;
}

function plusIndivPlate(dinerId, itemId) {

    // clicked "+" is not in the last row, have to insert new row in between
    if (itemId < numOfItemsPerDiner[dinerId]) {
        // for all rows after the clicked one, move them back
        for (let i = numOfItemsPerDiner[dinerId]; i > itemId; i--) {
            const divToMove = document.querySelector(`.item.diner-${dinerId}.item-${i}`);
            divToMove.classList = `item diner-${dinerId} item-${i + 1}`;
            
            const classesToMove = document.querySelectorAll(`.diner-${dinerId}.item-${i}`);
            classesToMove.forEach(e => {
                e.classList.replace(`item-${i}`, `item-${i + 1}`);
            });
        }
    }

    numOfItemsPerDiner[dinerId]++;

    const currDinerIndivListDiv = document.querySelector(`#diner-${dinerId} .indiv-list`);
    const newItemId = itemId + 1;

    // new item div
    const currItemDiv = document.createElement("div");
    currItemDiv.classList = `item diner-${dinerId} item-${newItemId}`;

    // food name div
    const foodNameDiv = document.createElement("div");
    foodNameDiv.className = "food-name";
    const foodNameInput = document.createElement("input");
    foodNameInput.type = "text";
    foodNameInput.placeholder = "Food";
    foodNameDiv.appendChild(foodNameInput);

    // price div
    const foodPriceDiv = document.createElement("div");
    foodPriceDiv.className = "price";
    const foodPriceInput = document.createElement("input");
    foodPriceInput.type = "number";
    foodPriceInput.placeholder = "Price*";
    foodPriceDiv.appendChild(foodPriceInput);

    // plus minus indiv
    const plusMinusIndivBtnsDiv = document.createElement("div");
    plusMinusIndivBtnsDiv.className = `plus-minus-indiv`;
    // plus button
    const plusIndivBtn = document.createElement("div");
    plusIndivBtn.className = `circle-btn indiv-plus diner-${dinerId} item-${newItemId}`;
    const plusIndivImg = document.createElement("img");
    plusIndivImg.src = "images/icon-plus.svg";
    plusIndivImg.alt = "";
    plusIndivImg.className = `indiv-plus diner-${dinerId} item-${newItemId}`;
    plusIndivBtn.appendChild(plusIndivImg);
    // minus button
    const minusIndivBtn = document.createElement("div");
    minusIndivBtn.className = `circle-btn indiv-minus diner-${dinerId} item-${newItemId}`;
    const minusIndivImg = document.createElement("img");
    minusIndivImg.src = "images/icon-minus.svg";
    minusIndivImg.alt = "";
    minusIndivImg.className = `indiv-minus diner-${dinerId} item-${itemId + 1}`;
    minusIndivBtn.appendChild(minusIndivImg);
    // append plus and minus to the div
    plusMinusIndivBtnsDiv.appendChild(plusIndivBtn);
    plusMinusIndivBtnsDiv.appendChild(minusIndivBtn);

    currItemDiv.appendChild(foodNameDiv);
    currItemDiv.appendChild(foodPriceDiv);
    currItemDiv.appendChild(plusMinusIndivBtnsDiv);
    
    const refNode = document.querySelector(`.item.diner-${dinerId}.item-${itemId + 2}`);
    currDinerIndivListDiv.insertBefore(currItemDiv, refNode);

    // enable minus buttons
    const minusBtns = document.querySelectorAll(`.circle-btn.indiv-minus.diner-${dinerId}`);
    minusBtns.forEach((minusBtn) => {
        minusBtn.classList.remove("disabled");
    });
}

function minusIndivPlate(dinerId, itemId) {
    numOfItemsPerDiner[dinerId]--;

    // get the section to be deleted
    const removeIndivPlateDiv = document.querySelector(`.item.diner-${dinerId}.item-${itemId}`);
    removeIndivPlateDiv.remove();

    // if removed section is not in last row, move other rows forward
     if (itemId < numOfItemsPerDiner[dinerId] + 1) {
        for (let i = itemId + 1; i <= numOfItemsPerDiner[dinerId] + 1; i++) {
            const divToMove = document.querySelector(`.item.diner-${dinerId}.item-${i}`);
            divToMove.classList = `item diner-${dinerId} item-${i - 1}`;
            
            const classesToMove = document.querySelectorAll(`.diner-${dinerId}.item-${i}`);
            classesToMove.forEach(e => {
                e.classList.replace(`item-${i}`, `item-${i - 1}`);
            });
        }
     }

    // toggle disabled state on minus button
    const minusBtns = document.querySelectorAll(`.circle-btn.indiv-minus.diner-${dinerId}`);
    minusBtns.forEach((minusBtn) => {
        if (numOfItemsPerDiner[dinerId] > 1) {
            minusBtn.classList.remove("disabled");
        } else {
            minusBtn.classList.add("disabled");
        }
    });
}

function plusSharedPlate(clickedSharingPlusID) {
    numOfSharingPlates++;

    // if clicked one is not in the last row, new row to be inserted in between
    if (clickedSharingPlusID + 1 < numOfSharingPlates) {
        // for all rows after the clicked row, move them back
        for (let i = numOfSharingPlates - 1; i > clickedSharingPlusID; i--) {
            const divToMove = document.querySelector(`#sharing-${i}`);
            divToMove.id = `sharing-${i + 1}`;
            
            const classesToMove = divToMove.querySelectorAll(`.sharing-${i}`);
            classesToMove.forEach(e => {
                e.classList.replace(`sharing-${i}`, `sharing-${i + 1}`);
            });
        }
    }

    // sharing list
    const sharingListDiv = document.querySelector(".sharing-list");

    // item
    const newSharingPlateDiv = document.createElement("div");
    newSharingPlateDiv.className = "item";
    newSharingPlateDiv.id = `sharing-${clickedSharingPlusID + 1}`;

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
    foodPriceInput.type = "number";
    foodPriceInput.placeholder = "Price*";
    foodPriceDiv.appendChild(foodPriceInput);

    // plus minus sharing
    const plusMinusSharingBtnsDiv = document.createElement("div");
    plusMinusSharingBtnsDiv.className = `plus-minus-sharing sharing-${clickedSharingPlusID + 1}`;
    // plus button
    const plusSharingBtn = document.createElement("div");
    plusSharingBtn.className = `circle-btn sharing-plus sharing-${clickedSharingPlusID + 1}`;
    const plusSharingImg = document.createElement("img");
    plusSharingImg.src = "images/icon-plus.svg";
    plusSharingImg.alt = "";
    plusSharingImg.className = `sharing-plus sharing-${clickedSharingPlusID + 1}`;
    plusSharingBtn.appendChild(plusSharingImg);
    // minus button
    const minusSharingBtn = document.createElement("div");
    minusSharingBtn.className = `circle-btn sharing-minus sharing-${clickedSharingPlusID + 1}`;
    const minusSharingImg = document.createElement("img");
    minusSharingImg.src = "images/icon-minus.svg";
    minusSharingImg.alt = "";
    minusSharingImg.className = `sharing-minus sharing-${clickedSharingPlusID + 1}`;
    minusSharingBtn.appendChild(minusSharingImg);
    // append plus and minus to the div
    plusMinusSharingBtnsDiv.appendChild(plusSharingBtn);
    plusMinusSharingBtnsDiv.appendChild(minusSharingBtn);

    newSharingPlateDiv.appendChild(foodNameDiv);
    newSharingPlateDiv.appendChild(foodPriceDiv);
    newSharingPlateDiv.appendChild(plusMinusSharingBtnsDiv);

    const refNode = document.querySelector(`#sharing-${clickedSharingPlusID + 2}`);
    sharingListDiv.insertBefore(newSharingPlateDiv, refNode);

    // enable minus buttons
    const minusBtns = document.querySelectorAll(".circle-btn.sharing-minus");
    minusBtns.forEach((minusBtn) => {
        minusBtn.classList.remove("disabled");
    });
}

function minusSharedPlate(clickedSharingMinusID) {
    numOfSharingPlates--;

    // get the section to be deleted
    const removeSharingPlateDiv = document.querySelector(`#sharing-${clickedSharingMinusID}`);
    removeSharingPlateDiv.remove();

    // if removed section is not in last row, move other rows forward
    if (clickedSharingMinusID < numOfSharingPlates + 1) {
        for (let i = clickedSharingMinusID + 1; i <= numOfSharingPlates + 1; i++) {
            const divToMove = document.querySelector(`#sharing-${i}`);
            divToMove.id = `sharing-${i - 1}`;

            const classesToMove = divToMove.querySelectorAll(`.sharing-${i}`);
            classesToMove.forEach(e => {
                e.classList.replace(`sharing-${i}`, `sharing-${i - 1}`);
            });
        }
    }

    // toggle disabled state on minus button
    const minusBtns = document.querySelectorAll(".circle-btn.sharing-minus");
    minusBtns.forEach((minusBtn) => {
        if (numOfSharingPlates > 1) {
            minusBtn.classList.remove("disabled");
        } else {
            minusBtn.classList.add("disabled");
        }
    });
}

function mapPlates() {
    let dinerDict = new Map();
    let currDinerCount = 0;

    // get all diners' names
    const dinerNames = document.querySelectorAll(".diner .name input");
    dinerNames.forEach(dinerName => {
        currDinerCount++;
        if (dinerName.value.trim() == "") dinerName.value = `Unnamed Diner ${currDinerCount}`;
        dinerDict.set(dinerName.value, []);
    });

    // get all diners' individual plates
    for (let currDiner = 1; currDiner <= numOfDiners; currDiner++) {
        const currDinerIndivPlates = document.querySelectorAll(`.item.diner-${currDiner}`);
        currDinerIndivPlates.forEach(currDinerIndivPlate => {
            const currPlatePrice = (currDinerIndivPlate.querySelector(".price input")).value;

            // get diner name
            const dinerName = (document.querySelector(`#diner-${currDiner} .name input`)).value;
            if (dinerDict.has(dinerName)) {
                dinerDict.get(dinerName).push(currPlatePrice);
            }
        })
    }

    displayResults(calculateSharedShare(), dinerDict);
}

function calculateSharedShare() {
    let totalSharedPrice = 0;

    // get all price input fields for shared plates
    const sharedPlatePrices = document.querySelectorAll(".sharing-list .item .price input");
    sharedPlatePrices.forEach(input => {
        const price = input.value.trim();
        if (price !== "") { 
            totalSharedPrice += parseFloat(price);
        }
    });

    // calculate share for each diner
    const sharedShare = (totalSharedPrice / numOfDiners).toFixed(2);

    return sharedShare;
}

function displayResults(sharedShare, dinerDict) {
    const resultsSection = document.querySelector(".results .results-items");

    // clear previous results
    while (resultsSection.firstChild) {
        resultsSection.removeChild(resultsSection.firstChild);
    }

    dinerDict.forEach((plates, dinerName) => {
        // calculate total for indiv share
        let indivTotal = plates.reduce(
            (sum, price) => sum + (price.trim() === '' ? 0 : parseFloat(price)),
            parseFloat(sharedShare),
        ).toFixed(2);

        const gstCheckbox = document.querySelector("#gst");
        const serviceChargeCheckbox = document.querySelector("#service-charge");

        if (gstCheckbox.checked == true && serviceChargeCheckbox.checked == true) {
            indivTotal = (indivTotal * (1 + gst/100) * (1 + serviceCharge/100)).toFixed(2);
        } else if (gstCheckbox.checked == true) {
            indivTotal = (indivTotal * (1 + gst/100)).toFixed(2);
        } else if (serviceChargeCheckbox.checked == true) {
            indivTotal = (indivTotal * (1 + serviceCharge/100)).toFixed(2);
        }


        // create new result row
        const resultsItemDiv = document.createElement("div");
        resultsItemDiv.className = "item";

        const resultsItemName =  document.createElement("div");
        resultsItemName.className = "name";
        resultsItemName.textContent = dinerName;

        const resultsItemTotal = document.createElement("div");
        resultsItemTotal.className = "total";
        resultsItemTotal.textContent = `$${indivTotal}`;

        resultsItemDiv.appendChild(resultsItemName);
        resultsItemDiv.appendChild(resultsItemTotal);
        
        resultsSection.appendChild(resultsItemDiv);
    });
}

document.addEventListener("input", () => {
    mapPlates();
})

document.addEventListener("click", (event) => {
    // plus indiv
    const clickedIndivPlus = event.target.closest(".indiv-plus");
    if (clickedIndivPlus) {
        const [_, dinerId, itemId] = clickedIndivPlus.className.match(/diner-(\d+)\sitem-(\d+)/).map(Number);        
        plusIndivPlate(dinerId, itemId);
    }

    // minus indiv
    const clickedIndivMinus = event.target.closest(".indiv-minus");
    if (clickedIndivMinus) {
        const [_, dinerId, itemId] = clickedIndivMinus.className.match(/diner-(\d+)\sitem-(\d+)/).map(Number);
        minusIndivPlate(dinerId, itemId);
    }

    // plus sharing
    const clickedSharingPlus = event.target.closest(".sharing-plus");
    if (clickedSharingPlus) {
        const sharingId = parseInt(clickedSharingPlus.className.match(/sharing-(\d+)/)[1]);
        plusSharedPlate(sharingId);
    }

    // minus sharing
    const clickedSharingMinus = event.target.closest(".sharing-minus");
    if (clickedSharingMinus) {
        const sharingId = parseInt(clickedSharingMinus.className.match(/sharing-(\d+)/)[1]);
        minusSharedPlate(sharingId);
    }
});


addDinerBtn.addEventListener("click", () => {    
    numOfDiners++;
    addDiner(numOfDiners);
});
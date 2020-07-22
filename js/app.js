// selector for first item
const plusIcon1 = document.getElementById('plusIcon1');
const minusIcon1 = document.getElementById('minusIcon1');
const countItem1 = document.getElementById('countItem1');
const itemPrice1 = document.getElementById('itemPrice1');

// selector for second item
const plusIcon2 = document.getElementById('plusIcon2');
const minusIcon2 = document.getElementById('minusIcon2');
const countItem2 = document.getElementById('countItem2');
const itemPrice2 = document.getElementById('itemPrice2');


const subTotal = document.getElementById('subTotal');
const total = document.getElementById('total');
const tax = document.getElementById('tax');

// add quantity event listener for item-1
plusIcon1.addEventListener('click', function (e) {
    addItem(countItem1, itemPrice1, 1219, subTotal, tax);
});
// remove quantity event listener for item-1
minusIcon1.addEventListener('click', function (e) {
    removeItem(countItem1, itemPrice1, 1219, subTotal);
});


// add quantity event listener for item-2
plusIcon2.addEventListener('click', function (e) {
    addItem(countItem2, itemPrice2, 599, subTotal)
});
// remove quantity event listener for item-2
minusIcon2.addEventListener('click', function (e) {
    removeItem(countItem2, itemPrice2, 599, subTotal);
});


/// function for add quantity
function addItem(itemNum, totalPrice, amount, subTotal) {
    const currentItem = parseInt(itemNum.value);
    const updateItem = currentItem + 1;
    itemNum.value = updateItem;
    const updatePrice = amount * updateItem;
    totalPrice.innerText = updatePrice;
    // Sub total amount
    const subTotalAmount = parseInt(subTotal.innerText);
    const updateSubTotal = subTotalAmount + amount;
    subTotal.innerText = updateSubTotal;

    //tax ammount 
    if (updateSubTotal > 5000) {
        var updateTax = parseFloat(updateSubTotal * 0.01);
        tax.innerText = updateTax.toFixed(2);
    }

    // total amount
    const currentTax = parseFloat(tax.innerText)
    const updateTotalAmount = updateSubTotal + currentTax;
    total.innerText = updateTotalAmount;
}
/// function for remove quantity
function removeItem(itemNum, totalPrice, amount, subTotal) {
    let currentItem = parseInt(itemNum.value);
    if (currentItem > 1) {
        const updateItem = currentItem - 1;
        itemNum.value = updateItem;
        const updatePrice = amount * updateItem;
        totalPrice.innerText = updatePrice;

        // Sub total amount
        const subTotalAmount = parseInt(subTotal.innerText);
        const updateSubTotal = subTotalAmount - amount;
        subTotal.innerText = updateSubTotal;

        // tax amount
        if (updateSubTotal > 5000) {
            const updateTax = parseFloat(updateSubTotal * 0.01);
            tax.innerText = updateTax;
        } else {
            tax.innerText = 00;
        }

        // total amount
        const currentTax = parseFloat(tax.innerText)
        const updateTotalAmount = updateSubTotal + currentTax;
        total.innerText = updateTotalAmount;
    }
}
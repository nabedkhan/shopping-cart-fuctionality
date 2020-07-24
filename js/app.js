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
// selector for price total and tax
const subTotal = document.getElementById('subTotal');
const total = document.getElementById('total');
const tax = document.getElementById('tax');
// selector for delete prouct from checkout
const remove1 = document.getElementById('remove1');
const remove2 = document.getElementById('remove2');

// add quantity event listener for item-1
plusIcon1.addEventListener('click', function () {
    addItem(countItem1, itemPrice1, 1219, subTotal, tax);
});
// remove quantity event listener for item-1
minusIcon1.addEventListener('click', function () {
    removeItem(countItem1, itemPrice1, 1219, subTotal);
});

// add quantity event listener for item-2
plusIcon2.addEventListener('click', function () {
    addItem(countItem2, itemPrice2, 599, subTotal)
});
// remove quantity event listener for item-2
minusIcon2.addEventListener('click', function () {
    removeItem(countItem2, itemPrice2, 599, subTotal);
});

// delete prouct from checkout
remove1.addEventListener('click', function () {
    const cart1 = document.getElementById('item-1');
    cart1.style.display = 'none';
    /// clear total price
    removeTotalAmount(itemPrice1, subTotal);
})
remove2.addEventListener('click', function () {
    const cart2 = document.getElementById('item-2');
    cart2.style.display = 'none';
    /// clear total price
    removeTotalAmount(itemPrice2, subTotal);
})


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

    // tax and total amount function called
    taxAndTotalAmount(updateSubTotal);
}

/// function for remove quantity
function removeItem(itemNum, totalPrice, amount, subTotal) {
    const currentItem = parseInt(itemNum.value);
    if (currentItem > 1) {
        const updateItem = currentItem - 1;
        itemNum.value = updateItem;
        const updatePrice = amount * updateItem;
        totalPrice.innerText = updatePrice;

        // Sub total amount
        const subTotalAmount = parseInt(subTotal.innerText);
        const updateSubTotal = subTotalAmount - amount;
        subTotal.innerText = updateSubTotal;

        // tax and total amount function called
        taxAndTotalAmount(updateSubTotal);
    }
}

// tax amount function
function taxAndTotalAmount(inputSubTotal) {
    // tax amount
    if (inputSubTotal > 5000) {
        const updateTax = parseFloat(inputSubTotal * 0.01);
        tax.innerText = updateTax.toFixed(2);
    } else {
        tax.innerText = 00;
    }
    // total amount
    const currentTax = parseFloat(tax.innerText)
    const updateTotalAmount = inputSubTotal + currentTax;
    total.innerText = updateTotalAmount;
}

// when click remove icon in product delete suntotal,tax, total 
function removeTotalAmount(input1, input2) {
    // Sub total amount
    const currrentAmount = parseFloat(input1.innerText);
    const subTotalAmount = parseInt(input2.innerText);
    const updateSubTotal = subTotalAmount - currrentAmount;
    subTotal.innerText = updateSubTotal;

    // tax and total amount function called
    taxAndTotalAmount(updateSubTotal);
}

/// Checkout Button event handler
const checkoutBtn = document.getElementById('check-out');
const cartArea = document.getElementById('cart-area');
const message = document.getElementById('message');
const preLoader = document.querySelector('.loader-img');
const messageContent = document.querySelector('.message-content');
checkoutBtn.addEventListener('click', function (e) {
    cartArea.style.display = 'none';
    message.style.display = 'flex';
    preLoader.style.display = 'block';

    setTimeout(function () {
        const totalPrice = parseFloat(total.innerText);
        if (totalPrice > 0) {
            preLoader.style.display = 'none';
            messageContent.style.display = 'block';
            cartArea.style.display = 'none';
        } else {
            alert('Please Select atleast one product');
            message.style.display = 'none';
            preLoader.style.display = 'none';
            cartArea.style.display = 'block';
        }
    }, 2000);

    e.preventDefault();
})
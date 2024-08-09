const minusButton1 = document.getElementById("minusBtn1");
const plusButton1 = document.getElementById("plusBtn1");
const quantityInput1 = document.getElementById("qtyInput1");
const price1 = document.getElementById("price1");

const minusButton2 = document.getElementById("minusBtn2");
const plusButton2 = document.getElementById("plusBtn2");
const quantityInput2 = document.getElementById("qtyInput2");
const price2 = document.getElementById("price2");

const subTotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const total = document.getElementById("total");

const checkOutButton = document.getElementById("checkOut");

function changeProductQuantity1(isIncrease) {
  let quantity1 = parseInt(quantityInput1?.value) ?? 0;
  let quantityNewCount1 = quantity1;
  if (isIncrease == true) {
    quantityNewCount1 = quantity1 + 1;
  }
  if (isIncrease == false && quantity1 > 0) {
    quantityNewCount1 = quantity1 - 1;
  }
  quantityInput1.value = quantityNewCount1;
  const countPrice = quantityNewCount1 * 50;
  price1.innerText = countPrice;

  calculateTotal();
}

function changeProductQuantity2(isIncrease) {
  let quantity2 = parseInt(quantityInput2?.value) ?? 0;
  let quantityNewCount2 = quantity2;
  if (isIncrease == true) {
    quantityNewCount2 = quantity2 + 1;
  }
  if (isIncrease == false && quantity2 > 0) {
    quantityNewCount2 = quantity2 - 1;
  }
  quantityInput2.value = quantityNewCount2;
  const countPrice2 = quantityNewCount2 * 15;
  price2.innerText = countPrice2;

  calculateTotal();
}

function calculateTotal() {
  const vapeCount = parseInt(quantityInput1.value);
  const tankCount = parseInt(quantityInput2.value);

  const totalPrice = vapeCount * 50 + tankCount * 15;
  subTotal.innerText = "$ " + totalPrice;

  const taxAmount = totalPrice * 0.05;
  tax.innerText = "$ " + taxAmount;

  const grandTotal = totalPrice + taxAmount;
  total.innerText = "$ " + grandTotal;
}

checkOutButton?.addEventListener("click", function () {
  alert("Add to cart successfully");
});

let itemCounter = 1;
let totalPrice = 0;

const cards = document.getElementsByClassName("card");

for (const card of cards) {
  card.addEventListener("click", function () {
    // Add modal functionality attribute
    const button = document.getElementById("make-purchase");
    button.setAttribute("onclick", "my_modal_5.showModal()");

    const title = card.querySelector("h3").innerText;
    const productPrice = parseFloat(card.querySelector("span").innerText.split(" ")[1]);
    totalPrice += productPrice;
    const titleContainer = document.getElementById("title-container");
    const listItem = document.createElement("p");
    listItem.innerText = `${itemCounter}. ${title}`;
    itemCounter++;
    titleContainer.appendChild(listItem);
    const priceOnUi = document.getElementById("totalPrice");
    priceOnUi.innerText = totalPrice.toFixed(2);
  });
}

document.getElementById("apply-btn").addEventListener("click", function () {
  // Checking for discount
  const discountValue = document
    .getElementById("input-field")
    .value.split(" ")
    .join("")
    .toUpperCase();
  console.log(discountValue);
  if (totalPrice >= 200) {
    if (discountValue === "SELL200") {
      const discountedPrice = totalPrice * 0.2;
      const discountedPriceElement = document.getElementById("discountPrice");
      discountedPriceElement.innerText = discountedPrice.toFixed(2);

      // Remaining total
      const total = document.getElementById("total");
      const remainingTotal = totalPrice - discountedPrice;
      total.innerText = remainingTotal.toFixed(2);
    } else {
      alert("Wrong coupon code");
    }
  } else {
    alert("Spend more than 200$ to get the discount");
  }
  document.getElementById("input-field").value = "";
});

// Empty cart check
document.getElementById("make-purchase").addEventListener("click", function () {
  if (totalPrice) {
  } else {
    alert("Add items to cart first");
  }
});

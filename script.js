const cards = document.getElementsByClassName("card");

for (const card of cards) {
  card.addEventListener("click", function () {
    console.log(card);
    const title = card.querySelector("h3").innerText;
    console.log(title);
  });
}

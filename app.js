function addToCart(event) {
    const productCard = event.target.closest(".product_card");
    const price = productCard.querySelector(".price");
    console.log(price.textContent[0]);
}


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}




function search_games() {
    let input = document.getElementById('input').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('product_card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}


function ready() {
    var removeGameButtons = document.getElementsByClassName('remove')
    for (var i = 0; i < removeGameButtons.length; i++) {
        var button = removeGameButtons[i]
        button.addEventListener('click', removeGame)
    }

    var quantityInput = document.getElementsByClassName('quantity_input')
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener('change', quantityChanged)
    }

    var addGameButtons = document.getElementsByClassName('add_To_Cart')
    for (var i = 0; i < addGameButtons.length; i++) {
        var button = addGameButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('pay_now')[0].addEventListener('click', purchaseClicked)

}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var games = document.getElementsByClassName('games_container')[0]
    while (games.hasChildNodes()) {
        games.removeChild(games.firstChild)
    }
    updateCartTotal()
}
function removeGame(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateCartTotal()
}

var num = updateCartTotal()
function updateCartTotal() {
    var gamesContainer = document.getElementsByClassName('games_container')[0]
    var games = gamesContainer.getElementsByClassName('cart_item')
    var total = 0
    for (var i = 0; i < games.length; i++) {
        var game = games[i]
        var gamePrice = game.getElementsByClassName('cart_price')[0]
        var gameQuantity = game.getElementsByClassName('quantity_input')[0]
        var price = parseFloat(gamePrice.innerText.replace('$', ''))
        var quantity = gameQuantity.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total_cost')[0].innerText = "$" + total
    return total;
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
function addToCartClicked(event) {
    var button = event.target
    var game = button.parentElement
    var title = game.getElementsByClassName('games')[0].innerText
    var price = game.getElementsByClassName('price')[0].innerText
    var image = game.getElementsByClassName('image')[0].src
    addItemToCart(title, price, image)
    updateCartTotal()
    
}

function addItemToCart(title, price, image) {
    var cartItem = document.createElement('div')
    cartItem.classList.add('cart_item') 
    var games = document.getElementsByClassName('games_container')[0]
    console.log()
    if(games){
        var gameNames = games.getElementsByClassName('title')
        for (var i = 0; i < gameNames.length; i++) {
            if (gameNames[i].innerText == title) {
                alert('This game was already added')
                return
            }
        }
    }
    var gamesHtml = `
            <div class="game_image">
                <img src="${image}" alt="">
            </div>
            <h3 class = "title">${title}</h3>
            <input class="quantity_input" type="number" value="1">
            <h3 class = "cart_price">${price}</h3>
            <button class = "remove">Remove</button>
        `
    cartItem.innerHTML = gamesHtml
    games.append(cartItem)
    console.log(cartItem)
    cartItem.getElementsByClassName('remove')[0].addEventListener('click', removeGame)
    cartItem.getElementsByClassName('quantity_input')[0].addEventListener('change', quantityChanged)
}





$(document).ready(function () {

    var price = parseFloat(`${'.total_cost'}`.innerText.replace('$', ''))

    var points = localStorage.getItem("points")
    var xp = localStorage.getItem("xp")
    var level = localStorage.getItem("level")

    var newxp = Math.round(num)
    var newpoints = Math.round(num/10)
    console.log(newxp)
    console.log(newpoints)

    $("#calctotal").on("click",function(e){

        finalpoints = newpoints + points
        finalxp = newxp + xp
        console.log(finalpoints)
        console.log(finalxp)


        if(finalxp >= 100 && level == 1){
            level = level + 1
            finalxp = finalxp - 100
        }
        else if(finalxp >= 150 && level == 2){
            level = level + 1
            finalxp = finalxp - 150
        }
        else if(finalxp >= 200 && level == 3){
            level = level + 1
            finalxp = finalxp - 200
        }
        else if(finalxp >= 250 && level == 4){
            level = level + 1
            finalxp = finalxp - 250
        }
        else if(finalxp >= 300 && level == 5){
            level = level + 1
            finalxp = finalxp - 300
        }
        else if(finalxp >= 350 && level == 6){
            level = level + 1
            finalxp = finalxp - 350
        }
        else if(finalxp >= 400 && level == 7){
            level = level + 1
            finalxp = finalxp - 400
        }
        else if(finalxp >= 450 && level == 8){
            level = level + 1
            finalxp = finalxp - 450
        }
        else if(finalxp >= 500 && level == 9){
            level = level + 1
            finalxp = finalxp - 500
        }
    })

    const APIKEY = "63b7c054969f06502871ab6f";

    var id = localStorage.getItem("id");


    var jsondata = {"points": finalpoints, "xp": finalxp, "level": level };
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://interactivedev-2a8f.restdb.io/rest/account/${id}` ,
    "method": "PUT",
    "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
    },

    "processData": false,
    "data": JSON.stringify(jsondata)
    }

    $.ajax(settings).done(function (response) {
    console.log(response);
    });
    
})
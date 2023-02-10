if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
//Login Form pop up
function loginForm() {
    document.getElementById("loginForm").style.display = "block";
}
  
function closelogForm() {
    document.getElementById("loginForm").style.display = "none";
}

//Sign Up Form pop up
function signupForm() {
    document.getElementById("signupForm").style.display = "block";
}
  
function closesignForm() {
    document.getElementById("signupForm").style.display = "none";
}



//Log in API data get and log in








//Sign up validation
function validatesignup() {
    var username = document.getElementById("username-field").value;
    var password = document.getElementById("password-field").value;
    if (username == "" || password == "") {
      alert("No username or no password Detected!")
      return false

    } else {
      alert("You have successfully signed up! Now log in!")
      return true
    }
}

function validatelogin() {
    var username = document.getElementById("username-field").value;
    var password = document.getElementById("password-field").value;
    if (username == "" || password == "") {
      alert("No username or no password Detected!")
      return false

    } else {
      return true
    }
}



  //Sign up API data transfer
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63b7c054969f06502871ab6f";


    $('#submit-btn').on("click", function (e){
        //prevent default action of the button stops page from refreshing
        e.preventDefault();

        if(validatesignup() == true){
            var username =  $('#username-field').val()
            var password =  $('#password-field').val()
            var level = 1
            var points = 0
            var xp = 0
        
            var jsondata = {"username": username,
                            "password": password,
                            "level": level,
                            "points": points,
                            "xp": xp};
        
        
            var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedev-2a8f.restdb.io/rest/account",
            "method": "POST",
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
            })
        }
    })
    
})


$(document).ready(function () {
    const APIKEY = "63b7c054969f06502871ab6f";

    //Login button
    $('#login-btn').on("click", function (e){
        //prevent default action of the button stops page from refreshing
        e.preventDefault();

        if(validatelogin() == true)
        {

            var username =  $('#username-field').val()
            var password =  $('#password-field').val()

            }
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://interactivedev-2a8f.restdb.io/rest/account",
                "method": "GET",
                "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
                }
            }


            let limit = 10;
            $.ajax(settings).done(function (response) {
                for (var i = 0; i < response.length && i < limit; i++) {
                    if(response[i].username == username && response[i].password == password){
                        localStorage.setItem("username", response[i]._id)
                        localStorage.setItem("username", response[i].username)
                        localStorage.setItem("password", response[i].password)
                        localStorage.setItem("level", response[i].level)
                        localStorage.setItem("points", response[i].points)
                        localStorage.setItem("xp", response[i].xp)
                        
                        location.href="file:///C:/Users/ryanw/Downloads/ID/Assignment%202/Assignment%20Data/ID_Assignment2-/ZProf_products.html"
                        alert("You have logged in!")

                    }
                }
                console.log(response);
            });

            

        })
})




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


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
                        //localStorage.username = response[i].username
                        //localStorage.level = response[i].level
                        //localStorage.points = response[i].points
                        //localStorage.xp = response[i].xp
                        alert("You have logged in!")
                        
                        document.getElementById("loginnone").style.display = "none";
                        document.getElementById("signupnone").style.display = "none";
                        document.getElementById("profile").style.display = "block";
                        
                        
                        

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
var points = localStorage.getItem("points")

function spinthewheel(){
    if(points >= 30){
        points = points - 30
        $(document).ready(function () {
            const APIKEY = "63b7c054969f06502871ab6f";

            var id = localStorage.getItem("id");


            var jsondata = {"points": points};
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
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function selfselect(){
    if(points >= 40){
        points = points - 40
        $(document).ready(function () {
            const APIKEY = "63b7c054969f06502871ab6f";

            var id = localStorage.getItem("id");


            var jsondata = {"points": points};
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
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}


function GC50(){
    if(points >= 10){
        points = points - 10
        $(document).ready(function () {
            const APIKEY = "63b7c054969f06502871ab6f";

            var id = localStorage.getItem("id");


            var jsondata = {"points": points};
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
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function GC100(){
    if(points >= 20){
        points = points - 20
        $(document).ready(function () {
            const APIKEY = "63b7c054969f06502871ab6f";

            var id = localStorage.getItem("id");


            var jsondata = {"points": points};
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
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function GC200(){
    if(points >= 35){
        points = points - 35  
        $(document).ready(function () {
            const APIKEY = "63b7c054969f06502871ab6f";

            var id = localStorage.getItem("id");


            var jsondata = {"points": points};
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
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

showpoint();
function showpoint(){
    $('#pointscore').text(points);
}



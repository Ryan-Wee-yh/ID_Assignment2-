
function Amazon50GC(){
    if(points > 10){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function Amazon50GC(){
    if(points > 10){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function AppleGC(){
    if(points > 10){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function StarbucksGC(){
    if(points > 10){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function VSGC(){
    if(points > 10){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function McDonaldsGC(){
    if(points > 10){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function TidyGC(){
    if(points > 10){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function WalmartGC(){
    if(points > 10){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function TargetGC(){
    if(points > 10){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function SteamGC(){
    if(points > 20){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function HotelGC(){
    if(points > 20){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function IKEAGC(){
    if(points > 35){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function Amazon200GC(){
    if(points > 35){
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}









//API data transfer
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63b7c054969f06502871ab6f";

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
                sessionStorage.username = response[i].username
                sessionStorage.level = response[i].level
                sessionStorage.points = response[i].points
                sessionStorage.xp = response[i].xp
        }
        console.log(response);
    });
})
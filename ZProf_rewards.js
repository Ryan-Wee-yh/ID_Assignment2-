var points = localStorage.getItem("points")

function spinthewheel(){
    if(points > 30){
        points = points - 30
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function selfselect(){
    if(points > 40){
        points = points - 40
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}


function Amazon50GC(){
    if(points > 10){
        points = points - 10
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function AppleGC(){
    if(points > 10){
        points = points - 10
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function StarbucksGC(){
    if(points > 10){
        points = points - 10
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function VSGC(){
    if(points > 10){
        points = points - 10
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function McDonaldsGC(){
    if(points > 10){
        points = points - 10
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function TidyGC(){
    if(points > 10){
        points = points - 10
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function WalmartGC(){
    if(points > 10){
        points = points - 10
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function TargetGC(){
    if(points > 10){
        points = points - 10
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function SteamGC(){
    if(points > 20){
        points = points - 20
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function HotelGC(){
    if(points > 20){
        alert("Gift Card redeemed!")
        points = points - 20
    }
    else{
        alert("Not enough points!")
    }
}

function IKEAGC(){
    if(points > 35){
        points = points - 35
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function Amazon200GC(){
    if(points > 35){
        points = points - 35
        alert("Gift Card redeemed!")
    }
    else{
        alert("Not enough points!")
    }
}

function showpoint(){
    document.getElementById("pointscore");
}
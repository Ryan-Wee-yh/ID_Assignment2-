var xp = localStorage.getItem("xp")
var username = localStorage.getItem("username")
var level = localStorage.getItem("level")



showusername();
function showusername(){
    $('#username').text(username);
}
showlevel();
function showlevel(){
    $('#level').text(level);
}
showxp();
function showxp(){
    $('#xp').text(xp);
}
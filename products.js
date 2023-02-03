//let gamesList = ["Minecraft","Grand Theft Auto V","Valorant","Osu","Red Dead Redemption",
//"The Legend of Zelda","Super Smash Bros","The Last of Us","Watch Dogs","Elden Ring"];
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
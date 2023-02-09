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
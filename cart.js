let count = 0;
document.getElementById("decrease").onclick = function(){
    if(count > 0){
        count -= 1;
    }
    document.getElementById("quantity").innerHTML = count;
}
document.getElementById("increase").onclick = function(){
    count += 1;
    document.getElementById("quantity").innerHTML = count;
}
var addItemId = 0;
function addToCart(){
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItemlectedItem.add()
}
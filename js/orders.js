/*This function is meant to add a new element in the DOM but it only 
works for like half a second IDK what i'm doing wrong.*/
function updateMessage() {
  var yummy = document.createElement("P");
  yummy.innerText = "You just added an item";
  var element = document.getElementById("added");
  element.appendChild(yummy);

  var msg = "$100";
  var el = document.getElementById("cost");
  el.textContent = msg;
}
function updateMessage() {
  var yummy = document.createElement("P");
  yummy.innerText = "You just added an item";
  var element = document.getElementById("added");
  element.appendChild(yummy);

  var msg = "$100";
  var el = document.getElementById("cost");
  el.textContent = msg;
}
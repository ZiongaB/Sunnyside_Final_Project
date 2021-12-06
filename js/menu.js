/*This function is meant to update the contents of the 
menu section when the page is loaded*/

function updateMessage() {

  var item1 = {
    name: 'Chicken and Eggs ($13)',
    description: "Grilled cage-free, hormone-free, and antibiotic-free chicken breast with any two styles of egg.",
  }

  var item2 = {
    name: 'Deluxe Ham Omelette ($12)',
    description: "Omelette with ham, onions, mushroom, tomato and cheddar cheese.",
  }

  var item3 = {
    name: 'Savory Chickpea Pancakes ($12)',
    description: " Served with fresh baby arugula and Carribean salsa topped with fresh avocado.",
  }

  var item4 = {
    name: 'The Sunnyside Burger ($13)',
    description: "8 oz 100% Black Angus burger with arugula, homemade Dijon mustard, red onion, tomato and Gorgonzola cheese.",
  }

  var item5 = {
    name: 'Chick Pea Burger ($13)',
    description: "Open faced burger with spinach, onion and vegenaise served on pita bread.",
  }

  var item6 = {
    name: 'Scallops Risotto ($18)',
    description: "Porcini mushroom risotto with fresh seared scallops."
  }

  var egg = document.getElementById('break1');
  egg.textContent = item1.name;

  var om = document.getElementById('break2');
  om.textContent = item2.name;

  var pan = document.getElementById('break3');
  pan.textContent = item3.name;

  var burg = document.getElementById('lunch1');
  burg.textContent = item4.name;

  var chick = document.getElementById('lunch2');
  chick.textContent = item5.name;

  var scal = document.getElementById('lunch3');
  scal.textContent = item6.name;
}

updateMessage();


/*This section of code uses loops and conditionals in order to change what 
sections of the filtered menu are visible when the button is clicked*/

/*Code snippets taken from 
https://www.w3schools.com/howto/howto_js_filter_elements.asp*/

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


  
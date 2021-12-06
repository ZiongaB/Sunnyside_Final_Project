/*This function is meant to validate the name of the form so that it isn't empty*/

function validateForm() {
  let x = document.forms["reviews"]["name"].value;
  if (x == "") {
    alert("Anonymous reviews not allowed.");
    return false;
  }
}
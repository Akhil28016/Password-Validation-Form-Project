let passInput = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");


passInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

passInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}


passInput.onkeyup = function() {
  let lowerCaseLetters = /[a-z]/g;
  if(passInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  let upperCaseLetters = /[A-Z]/g;
  if(passInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  let numbers = /[0-9]/g;
  if(passInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if(passInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
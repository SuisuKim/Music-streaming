
//  use javascript listener event to show/hide the nav
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", _show)

function _show() {
  menu.classList.toggle("active");
}

// using javascript event listener on form submit, if required fields have values prevent default action (the submit) and show message
// using alert 
let btn = document.getElementById("submit");
let theName =document.getElementById("name");
let theMail = document.getElementById("email");

btn.addEventListener('click',_doStuff);

function _doStuff(e) {
  e.preventDefault();
  let nameValue = theName.value;
  let mailValue = theMail.value;
  if(nameValue =="" && mailValue =="") {
    alert("Oh! You forgot to fill your name and email in! ")
  } else if(mailValue ==""){
    alert("Oh! You forgot to fill your email in!")
  } else if(nameValue ==""){
    alert("Oh! You forgot to fill your name in!")
  } else {
    alert("Yayy! Your message has been sent! Thank you for sharing your experience!")
  }
}

// If statements:Order matters..
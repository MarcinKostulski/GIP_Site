// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//!!!!!!!!!!!!!
//EXPERIMENTAL
//!!!!!!!!!!!!!
//function scrollto(element) {
    // get the element on the page related to the button
//    var scrollToId = element.getAttribute("data-scroll");
//    var scrollToElement = document.getElementById(scrollToId);
    // make the page scroll down to where you want
    // ...
//}
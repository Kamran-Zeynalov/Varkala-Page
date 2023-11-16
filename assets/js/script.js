var myListElements = document.querySelectorAll(".myList");
var homeDrop = document.getElementById("homeDrop");
var homeDrop = document.getElementById("pagesDown");
var homeDrop = document.getElementById("dgdfg");
var homeDrop = document.getElementById("homeDrop");
var homeDrop = document.getElementById("homeDrop");

function handleClick(event) {
  if (window.getComputedStyle(homeDrop).display === "none") {
    homeDrop.classList.add("animate__fadeInUp");
    homeDrop.classList.remove("animate__fadeOutDown");
    homeDrop.style.display = "inline-block";
  } else {
    homeDrop.classList.add("animate__fadeOutDown");
    homeDrop.classList.remove("animate__fadeInUp");
    setTimeout(function () {
      homeDrop.style.display = "none";
    }, 400);
  }
}
myListElements[0].removeEventListener("click", handleClick);
myListElements[0].addEventListener("click", handleClick);

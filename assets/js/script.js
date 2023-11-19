$(document).ready(function () {
  $(".phoneList").click(function () {
    $("#responsiveList").slideToggle();
  });

  $(".myLi").click(function () {
    $(".myLi").not(this).find("li div").slideUp();
    $(this).find("li div").slideToggle();
  });

  $(".dropbtn").click(function () {
    var content = $(this).next(".dropdown-content");

    $(".dropdown-content").not(content).slideUp();
    content.slideToggle();
  });
});

$(".faqTitle").click(function () {
  let $icon = $(this).find("i");
  $icon.toggleClass("active");
  $(this).next().slideToggle();

  if ($icon.hasClass("active")) {
    $(".faqInfo").not($info).slideUp();
    $(".faqTitle i").not($icon).removeClass("active");
  }
});

var myListElements = document.querySelectorAll(".myList");
var dropElements = [
  document.getElementById("homeDrop"),
  document.getElementById("shopDown"),
  document.getElementById("iconsDown"),
  document.getElementById("pagesDown"),
  document.getElementById("docsDrop"),
];

function handleClick(index) {
  return function (event) {
    dropElements.forEach((drop, i) => {
      if (i === index) {
        const isOpen = window.getComputedStyle(drop).display !== "none";

        drop.style.display = isOpen ? "none" : "inline-block";
        drop.classList.toggle("animate__fadeInUp", !isOpen);
        drop.classList.toggle("animate__fadeOutDown", isOpen);
        drop.style.zIndex = "2";
        this.querySelector("i").style.transform = isOpen
          ? "rotateZ(0deg)"
          : "rotateZ(180deg)";
      } else {
        drop.style.zIndex = "0";
        drop.style.display = "none";
        drop.classList.remove("animate__fadeInUp");
        drop.classList.add("animate__fadeOutDown");
        myListElements[i].querySelector("i").style.transform = "rotateZ(0deg)";
      }
    });
  };
}

document.body.addEventListener("click", function (event) {
  const isDropdown = event.target.closest(
    ".homeDrop, .shopDown, .iconsDown, .pagesDown, .docsDrop"
  );
  const isListItem = event.target.closest(".myList");

  if (!isDropdown && !isListItem) {
    dropElements.forEach((drop, i) => {
      drop.style.display = "none";
      drop.classList.remove("animate__fadeInUp");
      drop.classList.add("animate__fadeOutDown");
      myListElements[i].querySelector("i").style.transform = "rotateZ(0deg)";
    });
  }
});

myListElements.forEach((element, index) => {
  element.removeEventListener("click", handleClick(index));
  element.addEventListener("click", handleClick(index));
});

var login = document.querySelector("#Login");
var register = document.querySelector("#Register");
var pageLogin = document.querySelector("#loginPage");
var pageRegister = document.querySelector("#registerPage");

login.addEventListener("click", function () {
  pageRegister.style.display = "none";
  pageLogin.style.display = "block";
});

register.addEventListener("click", function () {
  pageLogin.style.display = "none";
  pageRegister.style.display = "block";
});

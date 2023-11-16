var myListElements = document.querySelectorAll(".myList");
var dropElements = [
  document.getElementById("homeDrop"),
  document.getElementById("shopDown"),
  document.getElementById("iconsDown"),
  document.getElementById("pagesDown"),
  document.getElementById("docsDrop")
];

function handleClick(index) {
  return function () {
    dropElements.forEach((drop, i) => {
      if (i === index) {
        if (window.getComputedStyle(drop).display === "none") {
          drop.classList.add("animate__fadeInUp");
          drop.classList.remove("animate__fadeOutDown");
          drop.style.display = "inline-block";
        } else {
          drop.classList.add("animate__fadeOutDown");
          drop.classList.remove("animate__fadeInUp");
          setTimeout(() => {
            drop.style.display = "none";
          }, 400);
        }
      } else {
        drop.classList.add("animate__fadeOutDown");
        drop.classList.remove("animate__fadeInUp");
        setTimeout(() => {
          drop.style.display = "none";
        }, 400);
      }
    });
  };
}

myListElements.forEach((element, index) => {
  element.removeEventListener("click", handleClick(index));
  element.addEventListener("click", handleClick(index));
});


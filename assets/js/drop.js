document.addEventListener("DOMContentLoaded", function () {
    var dropdownLink = document.getElementById("dropdownLink");
    var dropdownList = document.getElementById("dropdownList");
    var dropdownIcon = document.querySelector("#dropdownLink i");
  
    dropdownLink.addEventListener("click", function () {
        if (dropdownList.style.display === "none" || dropdownList.style.display === "") {
            dropdownList.style.display = "block";
            dropdownList.style.opacity = "1";
            dropdownList.style.visibility = "visible";
            dropdownIcon.style.transform = "rotate(-180deg)";
        } else {
            dropdownList.style.display = "none";
            dropdownList.style.opacity = "0";
            dropdownList.style.visibility = "hidden";
            dropdownIcon.style.transform = "rotate(0deg)";
        }
    });
  });
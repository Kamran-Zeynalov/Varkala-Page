document.addEventListener("DOMContentLoaded", function () {
  let myitemstr = localStorage.getItem("myitem");
  let myitem = JSON.parse(myitemstr);

  if (!myitem || !myitem.length) {
    localStorage.setItem("myitem", JSON.stringify([]));
  } else {
    ShowProductCount(myitem);
    ShowTotalPrice(myitem);
    ShowCartItems(myitem)
  }
});

let buttons = document.querySelectorAll(".cart p");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let myitem = JSON.parse(localStorage.getItem("myitem"));
    if (!myitem) {
      localStorage.setItem("myitem", JSON.stringify([]));
      myitem = JSON.parse(localStorage.getItem("myitem"));
    }
    let product = GetProductsData(this);
    let sameid = myitem.find((pro) => {
      return pro.id == product.id;
    });
    if (!sameid) {
      myitem.push(product);
    } else {
      sameid.count++;
    }
    ShowTotalPrice(myitem);
    ShowProductCount(myitem);

    let myitemstr = JSON.stringify(myitem);
    localStorage.setItem("myitem", myitemstr);
  });
});

function GetProductsData(product) {
  let parent = product.parentElement.parentElement.parentElement.parentElement.parentElement;
  let title = parent.querySelector(".title h6").innerText;
  let src = parent.querySelector("img").src;
  let id = parent.getAttribute("data-id");
  let price = parent.querySelector(".info .price .pricee").innerText;
  result = { title, src, id, price, count: 1 };
  return result;
}

let cart = document.querySelectorAll(".cart");
let ul = document.querySelectorAll(".jsparent .modal-body");
cart.forEach((crt) => {
  crt.addEventListener("click", function () {
    let myitem = JSON.parse(localStorage.getItem("myitem"));
    ShowCartItems(myitem);
  });
});


function ShowCartItems(myitem) {
  let ul = document.querySelectorAll('.jsparent .modal-body'); 
  ul.forEach((ll) => {
    ll.innerHTML = "";
    myitem.forEach((item) => {
      let task = `
      <div class="products" id="${item.id}">
      <div class="image">
          <img src="${item.src}" alt="">
      </div>
      <div class="name-price">
          <p class="name">${item.title}</p>
          <p class="quantity">Quantity: <span class="baseCount">${item.count}</span></p>
          <p class="name" style="font-family: monospace;">$${item.price}</p>
      </div>
      <div class="xBtn btn-close del_btn"></div>
    </div>
      `;
      ll.innerHTML += task;
    });
  });
  let delbtn = document.querySelectorAll(".del_btn");

  delbtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let li = this.parentElement;
      let id = li.getAttribute("id");
      myitem = myitem.filter((dev) => dev.id != id);
      li.remove();
      ShowTotalPrice(myitem);
      ShowProductCount(myitem);
      localStorage.setItem("myitem", JSON.stringify(myitem));
    });
  });
}
function ShowTotalPrice(myitem) {
  let totals = document.querySelectorAll(".total_price");

  totals.forEach((tt) => {
    tt.innerText = myitem.reduce((total, product) => {
      return Math.trunc((total += parseInt(product.price) * parseInt(product.count)));
    }, 0);
  });
}

function ShowProductCount(myitem) {
  let myitemCount = document.querySelectorAll(".baskett");
  myitemCount.forEach((dvc) => {
    dvc.innerText = myitem.reduce((total, product) => {
      return Math.trunc((total += product.count));
    }, 0);
  });
}

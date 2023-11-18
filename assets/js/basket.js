document.addEventListener("DOMContentLoaded", function () {
  let basketStr = localStorage.getItem("basket");
  let basket = JSON.parse(basketStr);
  if (!basket || !basket.length) {
    localStorage.setItem("basket", JSON.stringify([]));
  } else {
    showProductCount(basket);
    showTotalPrice(basket);
    basket.forEach((product) => {
      AddToBasket(product);
    });
  }
});

let addToCart = document.querySelectorAll(".addToCart");
addToCart.forEach((button) => {
  button.addEventListener("click", function () {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket || !basket.length) {
      localStorage.setItem("basket", JSON.stringify([]));
      basket = JSON.parse(localStorage.getItem("basket"));
    }

    let product = getProductDatas(this);
    let existedProduct = basket.find((pro) => {
      return pro.id == product.id;
    });
    if (!existedProduct) {
      basket.push(product);
    } else {
      existedProduct.count++;
    }
    showTotalPrice(basket);
    showProductCount(basket);
    AddToBasket(product);
    let basketStr = JSON.stringify(basket);
    localStorage.setItem("basket", basketStr);
  });
});

function getProductDatas(product) {
  let parent = product.parentElement.parentElement;
  let id = parent.getAttribute("data-id");
  let price = parent.querySelector("span.price").innerText;
  let title = parent.querySelector(".productName h5").innerText;
  let src = parent.querySelector("img").src;
  let result = { id, price, title, src, count: 1 };
  return result;
}

function showProductCount(basket) {
  let basketCount = document.querySelectorAll(".wishlist");
  basketCount.forEach((bass) => {
    bass.innerText = basket.reduce((total, product) => {
      return (total += product.count);
    }, 0);
  });
}

function showTotalPrice(basket) {
  let total = document.querySelectorAll(".num .total");
  total.forEach((tt) => {
    tt.innerText = basket.reduce((total, product) => {
      return (total += parseInt(product.price) * product.count);
    }, 0);
  });
  return basket.reduce((total, product) => {
    return (total += parseInt(product.price * product.count));
  }, 0);
}

function AddToBasket(product) {
  let basketDrones = document.querySelector(".basketDrones");
  let count = document.createElement("span");
  count.classList.add("count");
  let existingItem = basketDrones.querySelector(`[data-id="${product.id}"]`);
  if (existingItem) {
    let count = existingItem.querySelector(".count");
    count.innerText = parseInt(count.innerText) + 1;
    return;
  }

  let shopping = document.querySelector(".noShopping");
  let proName = document.createElement("h5");
  let div = document.createElement("div");
  let imgDiv = document.createElement("div");
  let titleDiv = document.createElement("div");
  let buttonDiv = document.createElement("div");
  let image = document.createElement("img");
  let price = document.createElement("p");
  let closeBtn = document.createElement("button");

  proName.innerText = product.title;
  closeBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
  closeBtn.style.backgroundColor = "white";
  closeBtn.style.border = "none";
  closeBtn.style.position = "absolute";
  closeBtn.style.right = "16px";
  div.className = "basket-item col-lg-12";
  div.style.margin = "7px 6px";
  div.style.width = "100%";
  div.style.padding = "10px 0";
  div.style.display = "flex";
  div.style.position = "relative";
  div.style.borderBottom = "1px solid lightgray";

  div.style.top = "0";
  div.setAttribute("data-id", product.id);
  image.src = product.src;
  count.innerText = product.count;
  image.style.width = "100px";
  price.innerText = product.price;
  count.style.margin = "0 3px";
  proName.style.margin = "0 3px";
  proName.style.display = "inline-block";
  titleDiv.style.margin = "0 6px";

  imgDiv.append(image);
  titleDiv.append(count, "x", proName, price);
  buttonDiv.append(closeBtn);
  div.append(imgDiv, titleDiv, buttonDiv);
  basketDrones.append(div);

  closeBtn.addEventListener("click", function () {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      localStorage.setItem("basket", JSON.stringify([]));
      basket = JSON.parse(localStorage.getItem("basket"));
    }

    let id = this.parentElement.parentElement.getAttribute("data-id");
    let index = basket.findIndex((element) => {
      return element.id == id;
    });
    delete basket[index];
    basket = basket.filter(Object);
    showProductCount(basket);
    showTotalPrice(basket);
    let basketStr = JSON.stringify(basket);
    localStorage.setItem("basket", basketStr);
    this.parentElement.parentElement.remove();
  });
}

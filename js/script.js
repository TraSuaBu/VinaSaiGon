//////Menu cuộn//////
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
//////Menu cuộn//////

//////Order Now//////
// Lấy danh sách tất cả các nút "order now"
const orderButtons = document.querySelectorAll(".swiper-slide .btn");

// Lặp qua từng nút "order now" để thêm sự kiện 'click'
orderButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của link

    // Lấy thông tin về món đặc biệt từ phần tử cha của nút được nhấp vào
    const specialDish =
      this.closest(".swiper-slide").querySelector("h3").innerText;

    // Hiển thị thông báo với tên món đặc biệt
    alert(`You have ordered our special dish: "${specialDish}"`);
    // Nếu muốn chuyển hướng người dùng đến trang đặt hàng, thêm dòng sau:
    //window.location.href = "link_trang_dat_hang";
  });
});
//////Order Now end//////

///Stars///
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    const stars = box.querySelectorAll(".stars i");
    const ratingDisplay = box.querySelector(".rating");
    let currentRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener("mouseover", function () {
        highlightStars(stars, index);
      });

      star.addEventListener("mouseout", function () {
        highlightStars(stars, currentRating);
      });

      star.addEventListener("click", function () {
        currentRating = index + 1;
        ratingDisplay.textContent = `You rated it ${currentRating} stars!`;
        highlightStars(stars, index);
      });
    });
  });
});

function highlightStars(stars, index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("fas");
      star.classList.remove("far", "fa-star-half-alt");
    } else {
      star.classList.remove("fas");
      star.classList.add("far", "fa-star");
    }
  });
}
///Stars///

///Cuộn trang///
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
//Cuộn trang///

///Đóng mở search///
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};
///Đóng mở search///

///slide lướt///
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
///Slide lướt///

///loader///
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 3000);
}
window.onload = fadeOut;
///loader///

///Tìm kiếm sl từ xuất hiện///
const searchBox = document.getElementById("search-box");
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn form gửi đi
  const searchTerm = searchBox.value.toLowerCase(); // Lấy từ khóa tìm kiếm và chuyển thành chữ thường
  const allContent = document.body.innerText.toLowerCase(); // Lấy nội dung của trang và chuyển thành chữ thường
  const words = allContent.split(/\s+/); // Tách nội dung thành các từ dựa trên khoảng trắng
  let count = 0; // Biến để lưu số lần từ xuất hiện
  for (const word of words) {
    if (word === searchTerm) {
      count++; // Tăng số lần từ xuất hiện
    }
  }
  alert(
    `The number of occurrences of "${searchTerm}" on the page is: ${count}`
  );
});
///Tìm kiếm sl từ xuất hiện///

///////////////////////////////////////////////////////Cập nhật giá trị//////////////////////////////////
// Lấy tất cả các nút "add to cart"
const addToCartButtons = document.querySelectorAll(".addToCart");

// Lặp qua từng nút "add to cart"
// Lấy tất cả các nút "plus" và "minus"
const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");

// Lặp qua từng nút "plus"
plusButtons.forEach((plusBtn) => {
  plusBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const box = this.closest(".box"); // Lấy phần tử cha gần nhất có class 'box'
    const quantityInput = box.querySelector(".qty"); // Lấy input số lượng trong box

    let quantity = parseInt(quantityInput.value); // Lấy giá trị hiện tại của số lượng
    quantity += 1; // Tăng số lượng lên 1

    quantityInput.value = quantity; // Cập nhật giá trị số lượng mới vào input
  });
});

// Lặp qua từng nút "minus"
minusButtons.forEach((minusBtn) => {
  minusBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const box = this.closest(".box"); // Lấy phần tử cha gần nhất có class 'box'
    const quantityInput = box.querySelector(".qty"); // Lấy input số lượng trong box

    let quantity = parseInt(quantityInput.value); // Lấy giá trị hiện tại của số lượng
    quantity = quantity > 1 ? quantity - 1 : 1; // Giảm số lượng đi 1, nhưng không được nhỏ hơn 1

    quantityInput.value = quantity; // Cập nhật giá trị số lượng mới vào input
  });
});
/////////////////////////////////////////////////////////////Cập nhật giá trị/////////////////////

////Thả Tym////
// Lấy danh sách các icon heart
const heartIcons = document.querySelectorAll(".heartIcon");

// Đặt sự kiện click cho mỗi icon heart
heartIcons.forEach((icon) => {
  icon.addEventListener("click", function (event) {
    event.preventDefault();
    this.classList.toggle("liked"); // Thêm hoặc xoá class 'liked' khi icon được click
  });
});
////Thả Tym////

////////////////////////////////////////////////Hàm phóng to hình ảnh dish///////////////////////
// Lấy đối tượng icon mắt và hình ảnh
const eyeIcon = document.querySelector(".eyeIcon");
const dishImage = document.querySelector(".dish-image");

// Thêm sự kiện click
eyeIcon.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
  // Thực hiện hành động phóng to hình ảnh
  enlargeImage();
});

// Hàm phóng to hình ảnh
function enlargeImage() {
  dishImage.style.transform = "scale(1.5)"; // Phóng to hình ảnh lên 1.5 lần
  dishImage.style.transition = "transform 0.3s ease"; // Thêm hiệu ứng chuyển động
}

// Bắt sự kiện khi kết thúc transition để loại bỏ transform và transition
dishImage.addEventListener("transitionend", function () {
  dishImage.style.transform = "none";
  dishImage.style.transition = "none";
});

// Lấy tất cả các phần tử có class là 'box'
const boxes = document.querySelectorAll(".box");

// Duyệt qua từng phần tử 'box' và thêm sự kiện cho icon mắt
boxes.forEach(function (box) {
  const eyeIcon = box.querySelector(".eyeIcon");

  eyeIcon.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    enlargeImage(box);
  });
});

function enlargeImage(box) {
  const dishImage = box.querySelector(".dish-image");
  dishImage.style.transform = "scale(1.5)"; // Phóng to hình ảnh lên 1.5 lần
  dishImage.style.transition = "transform 0.3s ease"; // Thêm hiệu ứng chuyển động

  // Bắt sự kiện khi kết thúc transition để loại bỏ transform và transition
  dishImage.addEventListener("transitionend", function () {
    dishImage.style.transform = "none";
    dishImage.style.transition = "none";
  });
}
///////////////////////////////////////////////////////Hàm phóng to hình ảnh dish///////////////////////////

/**
// Khai báo biến lưu trữ thông tin giỏ hàng
let cartItems = [];

// Lấy tất cả các nút "add to cart" của các sản phẩm
const addToCartBtns = document.querySelectorAll(".addToCart");

// Lặp qua từng nút "add to cart" và thêm sự kiện click
addToCartBtns.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của nút (tránh chuyển hướng trang)

    // Tìm phần tử cha chứa thông tin sản phẩm
    const productContainer = button.closest(".box");

    // Lấy thông tin sản phẩm
    const productId = productContainer.getAttribute("data-product-id");
    const productName = productContainer.querySelector("h3").innerText;
    const productPrice = parseFloat(
      productContainer.querySelector("span").innerText.replace("$", "")
    );
    const quantity = parseInt(
      productContainer.querySelector(".quantity-input").value
    );

    // Thêm thông tin sản phẩm vào giỏ hàng
    cartItems.push({ productId, productName, productPrice, quantity });

    // Cập nhật số lượng sản phẩm trong giỏ hàng trên thanh menu (ví dụ: tổng số lượng)
    const cartCount = document.querySelector(".cart-count");
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    cartCount.textContent = totalItems;

    // Đặt giá trị số lượng về mặc định sau khi thêm vào đơn hàng (nếu cần)
    productContainer.querySelector(".quantity-input").value = "1";
  });
});
// Hiển thị thông tin sản phẩm trong giỏ hàng sau khi thêm vào
displayCartItems();
// Lấy tất cả các nút tăng/giảm số lượng
const quantityIncreaseBtns = document.querySelectorAll(".quantity-increase");
const quantityDecreaseBtns = document.querySelectorAll(".quantity-decrease");

// Lặp qua các nút tăng/giảm số lượng và thêm sự kiện click
quantityIncreaseBtns.forEach((increaseBtn) => {
  increaseBtn.addEventListener("click", function () {
    const quantityInput =
      increaseBtn.parentElement.querySelector(".quantity-input");
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  });
});

quantityDecreaseBtns.forEach((decreaseBtn) => {
  decreaseBtn.addEventListener("click", function () {
    const quantityInput =
      decreaseBtn.parentElement.querySelector(".quantity-input");
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });
});
/// Lấy biểu tượng giỏ hàng
const cartIcon = document.querySelector(".fa-shopping-cart");

// Thêm sự kiện click để hiển thị giỏ hàng khi bấm vào biểu tượng giỏ hàng
cartIcon.addEventListener("click", function () {
  displayCartItems(); // Hiển thị thông tin sản phẩm trong giỏ hàng
});

// Hàm hiển thị thông tin chi tiết sản phẩm trong giỏ hàng
function displayCartItems() {
  const cartContainer = document.querySelector(".cart-items");
  cartContainer.innerHTML = ""; // Xóa nội dung hiện tại trong giỏ hàng trước khi cập nhật

  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <div class="cart-item-details">
        <p><strong>Name:</strong> ${item.productName}</p>
        <p><strong>Price:</strong> $${item.productPrice.toFixed(2)}</p>
        <p><strong>Quantity:</strong> ${item.quantity}</p>
      </div>
    `;

    cartContainer.appendChild(cartItem);
  });
}

// Làm sạch giỏ hàng
function clearCart() {
  cartItems = []; // Xóa dữ liệu trong giỏ hàng
  const cartContainer = document.querySelector(".cart-items");
  cartContainer.innerHTML = ""; // Xóa HTML hiển thị các sản phẩm trong giỏ hàng

  const cartCount = document.querySelector(".cart-count");
  cartCount.textContent = "0"; // Đặt số lượng sản phẩm trong giỏ hàng về 0
}

// Lấy nút làm sạch giỏ hàng (clear-cart)
const clearCartBtn = document.querySelector(".clear-cart");

// Thêm sự kiện click để làm sạch giỏ hàng
clearCartBtn.addEventListener("click", clearCart);

function displayCartItems() {
  const cartContainer = document.querySelector(".cart-items");
  cartContainer.innerHTML = ""; // Xóa nội dung hiện tại trong giỏ hàng trước khi cập nhật

  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <div class="cart-item-details">
        <p><strong>Name:</strong> ${item.productName}</p>
        <p><strong>Price:</strong> $${item.productPrice.toFixed(2)}</p>
        <p><strong>Quantity:</strong> ${item.quantity}</p>
      </div>
    `;

    cartContainer.appendChild(cartItem);
  });
} **/

////////////////check order now////////////////////////
function saveData() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const foodName = document.getElementById("foodName").value;
  const extraFood = document.getElementById("extraFood").value;
  const orderQuantity = document.getElementById("orderQuantity").value;
  const orderDateTime = document.getElementById("orderDateTime").value;
  const address = document.getElementById("address").value;
  const message = document.getElementById("message").value;

  if (
    name.trim() === "" ||
    phone.trim() === "" ||
    foodName.trim() === "" ||
    orderQuantity.trim() === "" ||
    orderDateTime.trim() === "" ||
    address.trim() === "" ||
    message.trim() === ""
  ) {
    alert("Please enter all the required information");
    return;
  }

  const userId = "0gZi319w74-ZZccoE";
  const templateId = "template_ez4ntqq";

  emailjs.init(userId);

  emailjs
    .send("default_service", templateId, {
      name: name,
      phone: phone,
      foodName: foodName,
      extraFood: extraFood,
      orderQuantity: orderQuantity,
      orderDateTime: orderDateTime,
      address: address,
      message: message,
    })
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
        alert("Order has been placed successfully! VinaSaiGon. Thank you~");
      },
      function (error) {
        console.log("Email failed to send:", error);
        alert("An error occurred while placing your order. Please try again!");
      }
    );
}
//////////////////check order now//////////////////////////

let iconCart = document.querySelector(".iconCart");
let cart = document.querySelector(".cart");
let container = document.querySelector(".container");
let close = document.querySelector(".close");

iconCart.addEventListener("click", function () {
  if (cart.style.right == "-100%") {
    cart.style.right = "0";
    container.style.transform = "translateX(-400px)";
  } else {
    cart.style.right = "-100%";
    container.style.transform = "translateX(0)";
  }
});
close.addEventListener("click", function () {
  cart.style.right = "-100%";
  container.style.transform = "translateX(0)";
});

let products = null;
// get data from file json
fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    addDataToHTML();
  });

//show datas product in list
function addDataToHTML() {
  // remove datas default from HTML
  let listProductHTML = document.querySelector(".listProduct");
  listProductHTML.innerHTML = "";

  // add new datas
  if (products != null) {
    // if has data
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.innerHTML = `<img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button onclick="addCart(${product.id})">Add To Cart</button>`;

      listProductHTML.appendChild(newProduct);
    });
  }
}
//use cookie so the cart doesn't get lost on refresh page

let listCart = [];
function checkCart() {
  var cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("listCart="));
  if (cookieValue) {
    listCart = JSON.parse(cookieValue.split("=")[1]);
  } else {
    listCart = [];
  }
}
checkCart();
function addCart($idProduct) {
  let productsCopy = JSON.parse(JSON.stringify(products));
  //// If this product is not in the cart
  if (!listCart[$idProduct]) {
    listCart[$idProduct] = productsCopy.filter(
      (product) => product.id == $idProduct
    )[0];
    listCart[$idProduct].quantity = 1;
  } else {
    //If this product is already in the cart.
    //I just increased the quantity
    listCart[$idProduct].quantity++;
  }
  document.cookie =
    "listCart=" +
    JSON.stringify(listCart) +
    "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

  addCartToHTML();
}
addCartToHTML();
function addCartToHTML() {
  // clear data default
  let listCartHTML = document.querySelector(".listCart");
  listCartHTML.innerHTML = "";

  let totalHTML = document.querySelector(".totalQuantity");
  let totalQuantity = 0;
  // if has product in Cart
  if (listCart) {
    listCart.forEach((product) => {
      if (product) {
        let newCart = document.createElement("div");
        newCart.classList.add("item");
        newCart.innerHTML = `<img src="${product.image}">
                    <div class="content">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price} / 1 product</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value">${product.quantity}</span>
                        <button onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
        listCartHTML.appendChild(newCart);
        totalQuantity = totalQuantity + product.quantity;
      }
    });
  }
  totalHTML.innerText = totalQuantity;
}
function changeQuantity($idProduct, $type) {
  switch ($type) {
    case "+":
      listCart[$idProduct].quantity++;
      break;
    case "-":
      listCart[$idProduct].quantity--;

      // if quantity <= 0 then remove product in cart
      if (listCart[$idProduct].quantity <= 0) {
        delete listCart[$idProduct];
      }
      break;

    default:
      break;
  }
  // save new data in cookie
  document.cookie =
    "listCart=" +
    JSON.stringify(listCart) +
    "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
  // reload html view cart
  addCartToHTML();
}

/*Hàm Mở Form*/
function moForm() {
  document.getElementById("myForm").style.display = "block";
}
/*Hàm Đóng Form*/
function dongForm() {
  document.getElementById("myForm").style.display = "none";
}

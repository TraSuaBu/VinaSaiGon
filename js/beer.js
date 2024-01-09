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
    alert(`You have ordered our special dish: ${specialDish}`);
    // Nếu muốn chuyển hướng người dùng đến trang đặt hàng, thêm dòng sau:
    // window.location.href = 'link_trang_dat_hang';
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
////Starss///

///Light///
document.addEventListener("DOMContentLoaded", function () {
  const lightIcon = document.getElementById("light-icon");

  lightIcon.addEventListener("click", function (event) {
    // Thực hiện hành động khi click vào nút đèn
    toggleDarkMode(); // Gọi hàm toggleDarkMode() để thay đổi chế độ giao diện
  });
});

function toggleDarkMode() {
  const body = document.body;

  // Kiểm tra xem có class 'dark-mode' hay không để thay đổi chế độ giao diện
  if (body.classList.contains("dark-mode")) {
    // Nếu có class 'dark-mode', loại bỏ class 'dark-mode' và thực hiện hành động khi chuyển về chế độ sáng
    body.classList.remove("dark-mode");
  } else {
    // Nếu không có class 'dark-mode', thêm class 'dark-mode' và thực hiện hành động khi chuyển sang chế độ tối
    body.classList.add("dark-mode");
  }
}

///Light///

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

/////Thông báo đã thêm vào giỏ hàng/////
$(document).ready(function () {
  $(".addToCart").on("click", function (e) {
    e.preventDefault();

    // Đoạn mã xử lý khi nhấp vào nút "add to cart" ở đây
    // Ví dụ: Thêm sản phẩm vào giỏ hàng
    var productName = $(this).siblings("h3").text();
    alert('Product "' + productName + '" has been added to the cart!');
  });
});
///////Thông báo đã thêm vào giỏ hàng///////

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

///Light chữ sáng///
// Lắng nghe sự kiện click vào biểu tượng đèn
document.getElementById("light-icon").addEventListener("click", function () {
  // Thêm hoặc xóa lớp 'light-mode' từ phần tử <body> khi người dùng bấm vào biểu tượng đèn
  document.body.classList.toggle("light-mode");
});
///Light chữ sáng///

///phóng to drinks///
// Lấy tất cả các phần tử có class là 'box'
const boxes = document.querySelectorAll(".box");

// Duyệt qua từng phần tử 'box' và thêm sự kiện cho icon mắt
boxes.forEach(function (box) {
  const eyeIcon = box.querySelector(".eyeIcon");
  const drinkImage = box.querySelector(".drink-image");

  eyeIcon.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    drinkImage.classList.toggle("enlarged");
  });
});
///phóng to drinks///

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

/*Hàm Mở Form*/
function moForm() {
  document.getElementById("myForm").style.display = "block";
}
/*Hàm Đóng Form*/
function dongForm() {
  document.getElementById("myForm").style.display = "none";
}

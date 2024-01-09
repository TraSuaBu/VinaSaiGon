document.querySelector(".signInBtn").addEventListener("click", function () {
  window.location.href = "beer.html";
});

document
  .querySelector(".forgetPassword")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("Forgot Password functionality is not implemented yet.");
  });

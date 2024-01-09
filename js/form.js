function saveData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const role = document.getElementById("role").value;
  const recommend =
    document.querySelector('input[name="recommed"]:checked')?.value || "";
  const comments = document.getElementById("comment").value;

  if (
    name.trim() === "" ||
    email.trim() === "" ||
    age.trim() === "" ||
    role.trim() === "" ||
    recommend.trim() === "" ||
    comments.trim() === ""
  ) {
    alert("Please enter all the required information");
    return;
  }

  const userId = "0gZi319w74-ZZccoE";
  const templateId = "template_qc3590l";

  emailjs.init(userId);

  emailjs
    .send("default_service", templateId, {
      name: name,
      email: email,
      age: age,
      role: role,
      recommend: recommend,
      comments: comments,
    })
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
        alert("Thank you for your feedback!");
      },
      function (error) {
        console.log("Email failed to send:", error);
        alert(
          "An error occurred while submitting your feedback. Please try again!"
        );
      }
    );
}

const theForm = document.getElementById("loginForm");

theForm.addEventListener("submit", function (x) {
  x.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message").value;
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Message:", message);
});

function login() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  error.textContent = "";

  if (!username || !email || !password) {
    error.textContent = "All fields are required!";
    return;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters!";
    return;
  }

  window.location.href = "../resume/index.html";
}

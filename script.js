// SIGN UP LOGIC
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMsg = document.getElementById("errorMsg");

    if (password !== confirmPassword) {
      errorMsg.textContent = "Passwords do not match";
      return;
    }

    if (password.length < 6) {
      errorMsg.textContent = "Password must be at least 6 characters";
      return;
    }

    // Save user (frontend only)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // Redirect to login
    window.location.href = "login.html";
  });
}

// LOGIN LOGIC
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const loginError = document.getElementById("loginError");

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      loginError.textContent = "Invalid email or password";
    }
  });
}

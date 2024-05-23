document.addEventListener("DOMContentLoaded", () => {
  const inputPassword = document.getElementById("password-input");
  inputPassword.addEventListener("input", () => {
    const password = inputPassword.value;
    const strength = evaluatePasswordStrength(password);

    updateIndicator(strength);
    updatePasswordBar(strength);

    console.log(`Password: ${password}`);
  });
});

function evaluatePasswordStrength(password) {
  if (password.length < 6) {
    return "Weak";
  } else if (password.length < 10) {
    return "Medium";
  } else {
    return "Strong";
  }
}

function updateIndicator(strength) {
  const indicator = document.getElementById("indicator-password");
  indicator.textContent = "Weak";

  switch (strength) {
    case "Weak":
      indicator.textContent = "Weak";
      indicator.classList.remove("text-orange-500", "text-green-500");
      indicator.classList.add("text-red-500");
      break;
    case "Medium":
      indicator.textContent = "Medium";
      indicator.classList.remove("text-red-500", "text-green-500");
      indicator.classList.add("text-orange-500");
      break;
    case "Strong":
      indicator.textContent = "Strong";
      indicator.classList.remove("text-red-500", "text-orange-500");
      indicator.classList.add("text-green-500");
      break;
    default:
      indicator.textContent = "";
      break;
  }
}

function updatePasswordBar(strength) {
  const passwordBar = document.getElementById("password-bar");

  switch (strength) {
    case "Weak":
      passwordBar.style.width = "25%";
      passwordBar.style.backgroundColor = "red";
      break;
    case "Medium":
      passwordBar.style.width = "50%";
      passwordBar.style.backgroundColor = "orange";
      break;
    case "Strong":
      passwordBar.style.width = "100%";
      passwordBar.style.backgroundColor = "green";
      break;
    default:
      passwordBar.style.width = "0%";
      passwordBar.style.backgroundColor = "#221c27";
      break;
  }
}

function togglePasswordVisibility() {
  const inputPassword = document.getElementById("password-input");
  const toggleIcon =
    document.getElementById("toggle-password").firstElementChild;

  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    inputPassword.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

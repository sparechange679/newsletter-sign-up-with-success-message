document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const signupForm = document.getElementById("signup-form");
  const successMessage = document.getElementById("success-message");
  const successEmail = document.getElementById("success-email");
  const dismissBtn = document.getElementById("dismiss-btn");

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Form submission handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Reset error state
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";

    // Validate email
    if (!email) {
      emailInput.classList.add("error");
      errorMessage.textContent = "Email is required";
      errorMessage.style.display = "block";
      return;
    }

    if (!isValidEmail(email)) {
      emailInput.classList.add("error");
      errorMessage.textContent = "Valid email required";
      errorMessage.style.display = "block";
      return;
    }

    // Show success message
    successEmail.textContent = email;
    signupForm.style.display = "none";
    successMessage.style.display = "block";
  });

  // Dismiss success message
  dismissBtn.addEventListener("click", function () {
    successMessage.style.display = "none";
    signupForm.style.display = "flex";
    emailInput.value = "";
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
  });

  // Real-time validation on input change
  emailInput.addEventListener("input", function () {
    if (emailInput.classList.contains("error")) {
      const email = emailInput.value.trim();

      if (email && isValidEmail(email)) {
        emailInput.classList.remove("error");
        errorMessage.style.display = "none";
      }
    }
  });
});

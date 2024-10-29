// formValidation.js

// Form validation function
function validateForm() {
    let isValid = true;
  
    // Clear any previous error messages
    document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""));
  
    if (!document.getElementById("email").value) {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    }
  
    if (!document.getElementById("password").value) {
      document.getElementById("passwordError").textContent = "Password is required.";
      isValid = false;
    }
  
    // If form is valid, submit data (here, just logging for demonstration)
    if (isValid) {
      alert("Form submitted successfully!");
      // Here, you would submit the form or send the data to your server
      document.getElementById("loginForm").reset(); // Reset form after submission
    }
  }
  
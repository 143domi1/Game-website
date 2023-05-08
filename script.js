// script.js

// Example JavaScript code
// You can add your own functionality and interactivity here

// Example code to handle form submission
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form input values
  var name = document.querySelector('input[type="text"]').value;
  var email = document.querySelector('input[type="email"]').value;
  var message = document.querySelector("textarea").value;

  // Perform validation and submission logic
  if (name && email && message) {
    // Perform form submission or AJAX request
    console.log("Form submitted successfully");

    // Clear form inputs
    document.querySelector('input[type="text"]').value = "";
    document.querySelector('input[type="email"]').value = "";
    document.querySelector("textarea").value = "";
  } else {
    console.log("Please fill in all fields");
  }
});

 

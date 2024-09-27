// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("formResponse");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple form validation
        if (name === "" || email === "" || message === "") {
            responseMessage.textContent = "Please fill in all fields.";
            responseMessage.style.color = "red";
        } else {
            responseMessage.textContent = `Thank you, ${name}! Your message has been received.`;
            responseMessage.style.color = "green";

            // Clear form inputs
            form.reset();
        }
    });
});

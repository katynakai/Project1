
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values from the form fields
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;

    // Create the message using the inputted names
    const message = `Thanks, ${firstName} ${lastName}! I'll be in touch!`;

    // Display the message in the <p> tag with id "message"
    document.getElementById('message').textContent = message;

    return false; // Return false to explicitly prevent form submission
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const resetButton = document.getElementById("clearForm");
    const messageDisplay = document.getElementById("feedbackMessage");
    const scoresArray = [5, 4, 3, 5, 2]; // Sample feedback scores

    // Validate fields
    function checkFields() {
        const userName = document.getElementById("fullName").value.trim();
        const userEmail = document.getElementById("userEmail").value.trim();
        const selectedRating = document.querySelector('input[name="userRating"]:checked');

        if (!userName) {
            alert("Name is required.");
            return false;
        }
        if (!userEmail.includes("@")) {
            alert("Please enter a valid email.");
            return false;
        }
        if (!selectedRating) {
            alert("Please select a rating between 1 and 5.");
            return false;
        }
        return true;
    }

    // Submit feedback
    function handleSubmit(event) {
        event.preventDefault();

        if (checkFields()) {
            // Log feedback scores using a loop
            for (const score of scoresArray) {
                console.log("Feedback Score:", score);
            }

            // Log the name and email to the console
            const userName = document.getElementById("fullName").value.trim();
            const userEmail = document.getElementById("userEmail").value.trim();
            console.log("Name:", userName);
            console.log("Email:", userEmail);

            alert("Thank you for your feedback!");
            form.reset();
            messageDisplay.textContent = ""; // Clear feedback message
        }
    }

    // Handle rating change
    function handleRatingChange() {
        const chosenRating = document.querySelector('input[name="userRating"]:checked').value;
        messageDisplay.textContent = `Thank you for rating us: ${chosenRating}`;
    }

    // Add event listeners
    form.addEventListener("submit", handleSubmit);
    resetButton.addEventListener("click", () => form.reset());
    const ratingChoices = document.querySelectorAll('input[name="userRating"]');
    for (let i = 0; i < ratingChoices.length; i++) {
        ratingChoices[i].addEventListener("change", handleRatingChange);
    }
});
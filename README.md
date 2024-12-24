# LaunchDarkly Feedback Form  

## Overview  
This project is part of the development of the LaunchDarkly employee portal, designed to add interactivity to the feedback form. It leverages JavaScript conditionals, loops, and DOM events to validate input, handle user interactions, and create a dynamic user experience.  

---

## Features  

### 1. **Form Validation**  
- **Name Field**: Ensures the field is not empty. Alerts the user if left blank.  
- **Email Field**: Checks if the input contains an "@" symbol, displaying an alert for invalid entries.  
- **Feedback Rating**: Verifies that the selected rating is within the range of 1-5.  

### 2. **Dynamic Rating System**  
- Users can select a rating (1-5) using radio buttons.  
- Displays a message like: _"Thank you for rating us: [selected rating]"_ upon selection.  

### 3. **Feedback Score Logging**  
- Uses a loop to process and display an array of feedback scores in the console.  

### 4. **Event Handling**  
- **Submit Button**: Triggers form validation and displays error messages if inputs are invalid.  
- **Reset Button**: Clears the form when clicked.  
- **Rating Selection**: Listens for changes and dynamically updates the feedback message.  

---

## File Descriptions  

### 1. `feedback_form.html`  
This file contains the structure of the feedback form:  
- Input fields for name, email, and additional comments.  
- Radio buttons for feedback rating.  
- Buttons for submitting and resetting the form.  
- Includes references to the `feedback.js` file.  

### 2. `feedback.js`  
This file contains the JavaScript code to handle form validation, dynamic updates, and event handling:  
- **`submitFeedback()`**: Validates the form inputs and logs feedback scores using a loop.  
- **`validateFields()`**: Loops through form fields to ensure required inputs are filled.  
- **`handleRatingChange()`**: Updates the feedback message when a rating is selected.  
- Event listeners for form submission and reset functionality.  

---

## How It Works  

### Validation with Conditionals  
- Conditional statements are used to check the validity of form inputs and display appropriate messages.  

### Repetition with Loops  
- Loops are used to:  
  1. Validate multiple form fields.  
  2. Process and display arrays of feedback scores.  

### Dynamic Event Handling  
- Event listeners dynamically manage form submissions, resets, and rating changes to enhance interactivity.  

---

## Challenges and Solutions  

### Challenge 1: Form Field Validation  
- **Issue**: Validating multiple fields dynamically.  
- **Solution**: Implemented a loop in `validateFields()` to iterate through required fields and check their values.  

### Challenge 2: Dynamic Rating Messages  
- **Issue**: Updating the feedback message when a rating is selected.  
- **Solution**: Used the `handleRatingChange()` function to listen for changes and update the DOM.  

### Challenge 3: Repetitive Code  
- **Issue**: Avoiding repetitive validation logic.  
- **Solution**: Centralized validation logic into reusable functions for maintainability.  

---

## Usage Instructions  

1. Open `feedback_form.html` in a web browser.  
2. Fill in the form fields: name, email, feedback rating, and comments (optional).  
3. Submit the form to validate inputs and log feedback scores in the console.  
4. Select a rating to see a dynamic feedback message.  
5. Use the reset button to clear all inputs.  

---

## Future Enhancements  
- Add backend integration for storing feedback in a database.  
- Implement advanced email validation using regular expressions.  
- Enhance the UI with improved styling and animations.  

---

© 2024 LaunchDarkly. All rights reserved.  

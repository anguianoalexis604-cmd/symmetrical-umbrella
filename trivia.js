
// Date and Time Display Function

function displayFriendlyDate() {
    const now = new Date();

    // Using 2 date methods: toLocaleDateString and toLocaleTimeString
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const friendlyDate = now.toLocaleDateString('en-US', options);
    const friendlyTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    const fullDateTime = `Today is ${friendlyDate}. It is ${friendlyTime}`;

    // Assuming you have an HTML element with the ID 'date-display' to show the date and time
    document.getElementById('date-display').innerText = fullDateTime;
}

// Function to capitalize the first letter of the user's name

function capitalizeFirstLetter(name) {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function createGreeting() {
    const nameInput = prompt("Please enter your name:");
    const capitalizedName = capitalizeFirstLetter(nameInput);

    const currentHour = new Date().getHours();
    let greetingMessage = "";

    // Switch statement based on the hour of the day
    switch (true) {
        case (currentHour >= 5 && currentHour < 12):
            greetingMessage = "Good Morning";
            break;
        case (currentHour >= 12 && currentHour < 17):
            greetingMessage = "Good Afternoon";
            break;
        default:
            greetingMessage = "Good Evening";
            break;
    }

    const finalGreeting = `${greetingMessage}, ${capitalizedName}!`;
    document.getElementById('greeting-display').innerText = finalGreeting;
}

// Function to validate email format using a regular expression

function getUserEmail() {
    // Standard regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = "";

    while (true) {
        // Prompt the user (works in browser environments)
        email = prompt("Please enter your email address:");

        // Handle if user cancels the prompt
        if (email === null) {
            alert("Email registration cancelled.");
            return;
        }

        email = email.trim();

        // Validate using regular expression
        if (emailRegex.test(email)) {
            // Split the address based on the '@' symbol
            const parts = email.split('@');
            const username = parts[0];
            const domain = parts[1];

            // Convert username to uppercase
            const usernameUpper = username.toUpperCase();

            // Display username and domain separately
            console.log("Username: ", usernameUpper);
            console.log("Domain: ", domain);
            alert(`Registration Successful!\nUsername: ${usernameUpper}\nDomain: ${domain}`);

            break; // Exit loop

        } else {
            alert("Error: Invalid email address. Please try again.");
        }
    }
}

// Call this function before starting the trivia quiz
getUserEmail();

// Function to display a random quote from an array of quotes

// Create an array with 5 quotes (indices 0 and 4)
const quotes = [
    "The journey of a thousand miles begins with one step.",
    "Believe you can and you're halfway there.",
    "An unexamined life is not worth living.",
    "In the middle of difficulty lies opportunity.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts."
];

// 2. Prompt the user to enter a number
let userNumberInput = prompt("Enter a number to get your Quote of the Day:");
let userNumber = parseInt(userNumberInput);

// Fallback calculation in case the user cancels or submits non-numeric values
if (isNaN(userNumber)) {
    userNumber = 0; 
}

// 3. Take the provided number, divide by 5 and get the remainder (modulus)
let quoteIndex = userNumber % 5;

// Display the selected quote on the page
const quoteContainer = document.getElementById("quote-display");
quoteContainer.innerHTML = `<blockquote>"${quotes[quoteIndex]}" (Index calculated: ${quoteIndex})</blockquote>`;

// Call functions sequentially as outlined in the requirements
window.onload = function() {
    displayFriendlyDate();
    createGreeting();
    getUserEmail();
    displayQuote();

    // Trivia quiz is called at the end
    runTriviaQuiz();
};

// Function to run a trivia quiz with questions and answers

function startQuiz(){
    // Clear any previous score display
    document.getElementById('score-display').innerHTML = "";

    // Run your quiz logic function
    let totalScore = quizFunction();
    let percentage = ((totalScore / 9) * 100).toFixed(2);

    // Targets the container in the HTML to write out the score cleanly
    document.getElementById('score-display').innerHTML = `Quiz Complete. Your Score: ${totalScore} points (${percentage}%)`;
}

// Mock arrays for questions and answers
const questions = [
    "What planet is known for having the Great Red Spot?",
    "What is the opposite of the word 'left'?",
    "What is another word for fall?"
];
const answers = ["jupiter", "right", "autumn"];

function quizFunction() {
    // 1. Set points value to 0 to collect points earned by the user
    let pointsEarned = 0;

    // 2. Create for a loop to track the questions and answers (up to 3 questions)
    for (let i = 0; i < 3; i++) {
        // 3. Initialize the guesses counter to 3 for each question
        let guesses = 3;
        let questionCorrect = false;

        // 4. Create a while loop nested in the for loop to prompr the user
        while (guesses > 0 && !questionCorrect) {
            // Prompt the user using the for loop counter (i) as the array index
            let userInput = prompt(questions[i]);

            // 5. Usa a conditional statement nested in the while loop to check input
            if (userInput.toLowerCase() === answers[i].toLowerCase()) {
                // If they answer correctly, collect points based on remaining guesses
                if (guesses === 3) {
                    pointsEarned += 3; // First try
                } else if (guesses === 2) {
                    pointsEarned += 2; // Second try
                } else if (guesses === 1) {
                    pointsEarned += 1; // Third try
                }

                // Set guesses to 0 and break/move to the next question
                questionCorrect = true;
                guesses = 0;
            } else {
                // If the fail to guess correctly, subtract 1 from guesses
                guesses--;
                if (guesses > 0) {
                    alert(`Incorrect. You have ${guesses} attempts remaining.`);
                }
            }
        }

        // If the loop finished and they never got it right, pointEarned for this question is 0
    }

    // 6. Return the accumulated points as a score
    return pointsEarned;
}

// Executing the accumulated points as a score
globalScore += quizFunction();

// Target the score-display element directly
const displayElement = document.getElementById('score-display');

// Write out the score inside the container using backticks
displayElement.innerHTML += `<h2>Quiz Complete. Your Score: ${globalScore} points</h2>`;
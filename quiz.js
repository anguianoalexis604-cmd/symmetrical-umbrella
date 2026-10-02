function startQuiz(){
    // Clear any previous score display
    document.getElementById('score-display').innerHTML = "";

    // Run your quiz logic function
    let totalScore = quizFunction();

    // Targets the container in the HTML to write out the score cleanly
    document.getElementById('score-display').innerHTML = `Quiz Complete. Your Score: ${totalScore} points`;
}

// Mock arrays for questions and answers
const questions = [
    "What planet is known as the Red Planet?",
    "What is the opposite of the word 'dark'?",
    "What season comes after winter?"
];
const answers = ["mars", "light", "spring"];

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
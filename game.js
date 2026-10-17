// --- GAME SETUP ---

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const promptElement = document.getElementById('prompt');
const playButton = document.getElementById('play-button');

let questionCounter = 0;
let score = 0;

const triviaQuestions = [
    [
        'Which is the tallest animal?',
        ['elephant', 'giraffe', 'chimpanzee'],
        1
    ],
    [
        'Which gas giant has vertical rings?',
        ['saturn', 'neptune', 'uranus'],
        2
    ],
    [
        'What name of the color is pale purple?',
        ['lavender', 'magenta', 'pink'],
        0
    ]
];

// --- PLAYING THE GAME ---

function playGame() {
    questionCounter = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    if (!questionElement || !answersElement || !promptElement) {
        return;
    }

    const currentQuestion = triviaQuestions[questionCounter];
    const questionText = currentQuestion[0];
    const answerChoices = currentQuestion[1];

    questionElement.textContent = `Question ${questionCounter + 1}: ${questionText}`;
    answersElement.innerHTML = '';
    promptElement.className = '';
    promptElement.textContent = 'Select the best answer.';

    answerChoices.forEach((choice, index) => {
        const listItem = document.createElement('li');
        const answerButton = document.createElement('button');
        answerButton.type = 'button';
        answerButton.textContent = choice;
        answerButton.addEventListener('click', () => checkAnswer(index));

        listItem.appendChild(answerButton);
        answersElement.appendChild(listItem);
    });
}

// --- CHECK ANSWERS ---

function checkAnswer(userChoice) {
    const currentQuestion = triviaQuestions[questionCounter];
    const correctIndex = currentQuestion[2];
    const correctAnswer = currentQuestion[1][correctIndex];

    if (userChoice === correctIndex) {
        score++;
        promptElement.className = 'success';
        promptElement.textContent = 'Correct!';
    } else {
        promptElement.className = 'error';
        promptElement.textContent = `Incorrect! The correct answer was: ${correctAnswer}`;
    }

    questionCounter++;

    if (questionCounter < triviaQuestions.length) {
        setTimeout(showQuestion, 600);
    } else {
        setTimeout(terminateGame, 600);
    }
}

function terminateGame() {
    if (!questionElement || !answersElement || !promptElement) {
        return;
    }

    questionElement.textContent = `Game Over! Your score: ${score} / ${triviaQuestions.length}`;
    answersElement.innerHTML = '';
    promptElement.className = '';
    promptElement.innerHTML = '';

    const restartButton = document.createElement('button');
    restartButton.type = 'button';
    restartButton.textContent = 'Restart Game';
    restartButton.addEventListener('click', playGame);
    promptElement.appendChild(restartButton);
}

if (playButton) {
    playButton.addEventListener('click', playGame);
}
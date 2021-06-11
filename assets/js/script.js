let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answers-container');
let nextButton = document.getElementById('next-button');
let finishButton = document.getElementById('finish-button');
let fullGame = document.getElementById('game');
let gameContainer = document.getElementById('container')

let shuffledQuestions, currentQuestionIndex

let questionsAsked = 0;
nextButton.addEventListener('click', () => {
    questionsAsked++;
    checkAnswer();
    if (questionsAsked === 9){
        nextButton.innerText = 'Finish';
    }
    if (questionsAsked === 10){
        fullGame.style.display = 'none';
        nextButton.classList.add('hide')
        gameEnd();
    } else {
        currentQuestionIndex++;
        resetState();
        nextQuestion();
        nextButton.classList.add('hide')
    };
})

function checkAnswer(){
    if (selectedButton.innerText === shuffledQuestions[currentQuestionIndex].correct.text){
        incrementScore();
        console.log('correct answer')
    } else {
        
    }
}


function startGame(){
    console.log('Game started...');
    shuffledQuestions = questions.sort(() => Math.random () - .5)
    currentQuestionIndex = 0
    nextQuestion();
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        answerButtonsElement.appendChild(button)
        button.addEventListener('click', selectedAnswer)
    })
}

function nextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}



function selectedAnswer(event){
    nextButton.classList.remove('hide')
    selectedButton = event.target;
    incrementScore();
}

let score = 0;
function incrementScore(){
    score++;
    console.log('Your current score is ' + score);
}

function gameEnd(event){
    let endScreen = document.createElement('h2');
    endScreen.classList.add('end-screen')
    endScreen.innerText = 'You score is ' + score;
    gameContainer.appendChild(endScreen);
}

function resetState(){while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
}
}

let MAX_QUESTIONS = 10;

let questions = [
    {
        question: 'Who is the Yankees current general manager?',
        answers: [
            {text: 'Thad Levine'},
            {text: 'Scott Harris'},
            {text: 'Brian Cashman'},
            {text: 'Alex Anthopoulos'},
        ],
        correct: 'Brian Cashman'
    },
    {
        question: 'Which of these teams does not play in the AL West division?',
        answers: [
            {text: 'Houston Astros'},
            {text: 'Seattle Mariners'},
            {text: 'Texas Rangers'},
            {text: 'Minnesota Twins'},
        ],
        correct: 'Minnesota Twins'
    },
    {
        question: 'What team did Babe Ruth play for first?',
        answers: [
            {text: 'Boston Red Sox'},
            {text: 'Chicago White Sox'},
            {text: 'Baltimore Orioles'},
            {text: 'New York Yankees'},
        ],
        correct: 'Baltimore Orioles'
    },
    {
        question: 'What team did Babe Ruth play for first?',
        answers: [
            {text: 'Boston Red Sox'},
            {text: 'Chicago White Sox'},
            {text: 'Baltimore Orioles'},
            {text: 'New York Yankees'},
        ],
        correct: 'Boston Red Sox'
    },
    {
        question: 'What team did Shohei Ohtani play for in the Japanese league?',
        answers: [
            {text: 'Hokkaido Nippon-Ham Fighters'},
            {text: 'Hanshin Tigers'},
            {text: 'Yomiuri Giants'},
            {text: 'Orix Buffaloes'},
        ],
        correct: 'Hokkaido Nippon-Ham Fighters'
    },
    {
        question: 'Which pitcher holds the world record for fastest ball thrown?',
        answers: [
            {text: 'Jordan Hicks'},
            {text: 'Aroldis Chapman'},
            {text: 'Randy Johnson'},
            {text: 'Justin Verlander'},
        ],
        correct: 'Aroldis Chapman'
    },
    {
        question: 'Who did Boston play against in the first World Series?',
        answers: [
            {text: 'Arizona'},
            {text: 'Miami'},
            {text: 'Houston'},
            {text: 'Pittsburgh'},
        ],
        correct: 'Pittsburgh'
    },
    {
        question: 'How long was the shortest game in baseball history?',
        answers: [
            {text: '1 hour'},
            {text: '2 hours'},
            {text: '51 minutes'},
            {text: '22 minutes'},
        ],
        correct: '51 minutes'
    },
    {
        question: 'What year was the MLB founded?',
        answers: [
            {text: '1876'},
            {text: '1932'},
            {text: '1903'},
            {text: '1901'},
        ],
        correct: '1903'
    },
    {
        question: 'How long was the longest game in baseball history?',
        answers: [
            {text: '8 hours 6 minutes'},
            {text: '4 hours 3 minutes'},
            {text: '9 days'},
            {text: '13 hours 20 minutes'},
        ],
        correct: '8 hours 6 minutes'
    },
    {
        question: 'What player is credited with the most home runs in their career?',
        answers: [
            {text: 'Albert Pujols'},
            {text: 'Willie Mays'},
            {text: 'Barry Bonds'},
            {text: 'Ken Griffey Jr.'},
        ],
        correct: 'Barry Bonds'
    },
    {
        question: 'Which player has played for the most franchises in MLB history?',
        answers: [
            {text: 'Ron Villione'},
            {text: 'Edwin Jackson'},
            {text: 'Deacon McGuire'},
            {text: 'Henry Blanco'},
        ],
        correct: 'Edwin Jackson'
    },
    {
        question: 'What team was caught cheating by stealing signs in 2017 and 2018?',
        answers: [
            {text: 'Baltimore Orioles'},
            {text: 'Oakland Athletics'},
            {text: 'Philadelphia Phillies'},
            {text: 'Houston Astros'},
        ],
        correct: 'Houston Astros'
    },
    {
        question: 'Where is the baseball Hall Of Fame?',
        answers: [
            {text: 'Cooperstown, New York'},
            {text: 'Dublin, Georgia'},
            {text: 'Los Angeles, California'},
            {text: 'Seattle, Washington'},
        ],
        correct: 'Cooperstown, New York'
    },
    {
        question: 'Who is the oldest recorded player in the MLB?',
        answers: [
            {text: "Charley O'Leary"},
            {text: 'Leroy Paige'},
            {text: "Jim O'Rourke"},
            {text: 'Hoyt Wilhelm'},
        ],
        correct: 'Leroy Paige'
    },
    {
        question: 'What famous slugger retired after suffering from ALS?',
        answers: [
            {text: 'Red Ruffing'},
            {text: 'Johnny Murphy'},
            {text: 'Lou Gehrig'},
            {text: 'Joe DiMaggio'},
        ],
        correct: 'Lou Gehrig'
    },
    {
        question: 'How many players are in a teams batting order?',
        answers: [
            {text: '12'},
            {text: '9'},
            {text: '8'},
            {text: '6'},
        ],
        correct: '9'
    },
    {
        question: 'Which of these is not a type of pitch?',
        answers: [
            {text: 'Shoulder Curveball'},
            {text: 'Slider'},
            {text: 'Eephus'},
            {text: 'Four-Seam Fastball'},
        ],
        correct: 'Shoulder Curveball'
    },
    {
        question: 'How many balls does a pitcher need to throw to walk a batter?',
        answers: [
            {text: '3'},
            {text: '5'},
            {text: '2'},
            {text: '4'},
        ],
        correct: '4'
    },
    {
        question: 'What is another name for baseball stadium?',
        answers: [
            {text: 'A Ring'},
            {text: 'An Octagon'},
            {text: 'A Diamond'},
            {text: 'An Alley'},
        ],
        correct: 'A Diamond',
    }
]

document.onload = startGame();
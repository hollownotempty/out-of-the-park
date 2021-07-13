const QUESTION_BANK = [
    {
        question: 'Who is the Yankees current general manager?',
        answers: [
            {text: 'Thad Levine', correct: false},
            {text: 'Scott Harris', correct: false},
            {text: 'Brian Cashman', correct: true},
            {text: 'Alex Anthopoulos', correct:false},
        ]
    },
    {
        question: 'Which of these teams does not play in the AL West division?',
        answers: [
            {text: 'Houston Astros', correct: false},
            {text: 'Seattle Mariners', correct: false},
            {text: 'Texas Rangers', correct: false},
            {text: 'Minnesota Twins', correct: true},
        ]
    },
    {
        question: 'What team did Babe Ruth play for first?',
        answers: [
            {text: 'Boston Red Sox', correct: true},
            {text: 'Chicago White Sox', correct: false},
            {text: 'Baltimore Orioles', correct: false},
            {text: 'New York Yankees', correct: false},
        ]
    },
    {
        question: 'What team did Babe Ruth play for first?',
        answers: [
            {text: 'Boston Red Sox', correct: true},
            {text: 'Chicago White Sox', correct: false},
            {text: 'Baltimore Orioles', correct: false},
            {text: 'New York Yankees', correct: false},
        ]
    },
    {
        question: 'What team did Shohei Ohtani play for in the Japanese league?',
        answers: [
            {text: 'Hokkaido Nippon-Ham Fighters', correct: true},
            {text: 'Hanshin Tigers', correct: false},
            {text: 'Yomiuri Giants', correct: false},
            {text: 'Orix Buffaloes', correct: false},
        ]
    },
    {
        question: 'Which pitcher holds the world record for fastest ball thrown?',
        answers: [
            {text: 'Jordan Hicks', correct: false},
            {text: 'Aroldis Chapman', correct: true},
            {text: 'Randy Johnson', correct: false},
            {text: 'Justin Verlander', correct: false},
        ]
    },
    {
        question: 'Who did Boston play against in the first World Series?',
        answers: [
            {text: 'Arizona', correct: false},
            {text: 'Miami', correct: false},
            {text: 'Houston', correct: false},
            {text: 'Pittsburgh', correct: true},
        ]
    },
    {
        question: 'How long was the shortest game in baseball history?',
        answers: [
            {text: '1 hour', correct: false},
            {text: '2 hours', correct: false},
            {text: '51 minutes', correct: true},
            {text: '22 minutes', correct: false},
        ]
    },
    {
        question: 'What year was the MLB founded?',
        imgSrc: 'assets/images/mlb.jpg',
        answers: [
            {text: '1876', correct: false},
            {text: '1932', correct: false},
            {text: '1903', correct: true},
            {text: '1901', correct: false},
        ]
    },
    {
        question: 'How long was the longest game in baseball history?',
        answers: [
            {text: '8 hours 6 minutes', correct: true},
            {text: '4 hours 3 minutes', correct: false},
            {text: '9 days', correct: false},
            {text: '13 hours 20 minutes', correct: false},
        ]
    },
    {
        question: 'What player is credited with the most home runs in their career?',
        answers: [
            {text: 'Albert Pujols', correct: false},
            {text: 'Willie Mays', correct: false},
            {text: 'Barry Bonds', correct: true},
            {text: 'Ken Griffey Jr.', correct: false},
        ]
    },
    {
        question: 'Which player has played for the most franchises in MLB history?',
        answers: [
            {text: 'Ron Villione', correct: false},
            {text: 'Edwin Jackson', correct: true},
            {text: 'Deacon McGuire', correct: false},
            {text: 'Henry Blanco', correct: false},
        ]
    },
    {
        question: 'What team was caught cheating by stealing signs in 2017 and 2018?',
        answers: [
            {text: 'Baltimore Orioles', correct: false},
            {text: 'Oakland Athletics', correct: false},
            {text: 'Philadelphia Phillies', correct: false},
            {text: 'Houston Astros', correct: true},
        ]
    },
    {
        question: 'Where is the baseball Hall Of Fame?',
        answers: [
            {text: 'Cooperstown, New York', correct: true},
            {text: 'Dublin, Georgia', correct: false},
            {text: 'Los Angeles, California', correct: false},
            {text: 'Seattle, Washington', correct: false},
        ]
    },
    {
        question: 'Who is the oldest recorded player in the MLB?',
        answers: [
            {text: "Charley O'Leary", correct: false},
            {text: 'Leroy Paige', correct: true},
            {text: "Jim O'Rourke", correct: false},
            {text: 'Hoyt Wilhelm', correct: false},
        ]
    },
    {
        question: 'Who is this famous slugger who retired after suffering from ALS?',
        imgSrc: 'assets/images/lou_gehrig.jpg',
        answers: [
            {text: 'Red Ruffing', correct: false},
            {text: 'Johnny Murphy', correct: false},
            {text: 'Lou Gehrig', correct: true},
            {text: 'Joe DiMaggio', correct: false},
        ]
    },
    {
        question: 'How many players are in a teams batting order?',
        answers: [
            {text: '12', correct: false},
            {text: '9', correct: true},
            {text: '8', correct: false},
            {text: '6', correct: false},
        ]
    },
    {
        question: 'Which of these is not a type of pitch?',
        answers: [
            {text: 'Shoulder Curveball', correct: true},
            {text: 'Slider', correct: false},
            {text: 'Eephus', correct: false},
            {text: 'Four-Seam Fastball', correct: false},
        ]
    },
    {
        question: 'How many balls does a pitcher need to throw to walk a batter?',
        answers: [
            {text: '3', correct: false},
            {text: '5', correct: false},
            {text: '2', correct: false},
            {text: '4', correct: true},
        ]
    },
    {
        question: 'What is another name for baseball stadium?',
        imgSrc: 'assets/images/yankee_stadium.jpg',
        answers: [
            {text: 'A Ring', correct: false},
            {text: 'An Octagon', correct: false},
            {text: 'A Diamond', correct: true},
            {text: 'An Alley', correct: false},
        ]
    },
    {
        question: "What is this hall of fame player's name?",
        imgSrc: 'assets/images/joe_dimaggio.jpg',
        answers: [
            {text: 'Ken Griffey', correct: false},
            {text: 'Babe Ruth', correct: false},
            {text: 'Joe DiMaggio', correct: true},
            {text: 'Derek Jeter', correct: false},
        ]
    },
    {
        question: "What team plays here in Fenway Park?",
        imgSrc: 'assets/images/fenway_park.jpg',
        answers: [
            {text: 'Miami Marlins', correct: false},
            {text: 'Boston Red Sox', correct: true},
            {text: 'St Louis Cardinals', correct: false},
            {text: 'New York Mets', correct: false},
        ]
    },
];

let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answers-container');
let fullGame = document.getElementById('game');
let endScreenContainer = document.getElementById('end-screen');
let questionImg = document.getElementById('question-img');
let questionCounter = document.getElementById('questions-asked');

let shuffledQuestions, currentQuestionIndex;

let currentQuestion = 1;

questionCounter.innerText = currentQuestion;

let questionsAsked = 0;

let score = 0;

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

/**Shuffles questions and displays the first one. */
function startGame(){
    console.log('Game started...');
    shuffledQuestions = QUESTION_BANK.sort(() => Math.random () - .5);
    currentQuestionIndex = 0;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**Shows question text, 
populates answer fields and 
loads image if necessary*/
function showQuestion(question){
    questionElement.innerText = question.question;
    const optionImgSrc = question.imgSrc;
        if(optionImgSrc) {
            questionImg.classList.remove('hide');
            questionImg.src = question.imgSrc;
        } else {
            questionImg.classList.add('hide');
        }
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        answerButtonsElement.appendChild(button);
        button.addEventListener('click', selectedAnswer);
    });
}

/**Checks if selected answer is correct and increments the score if so,
 * resets the state of the page and 
 * moves on to next question after a timeout.
 */
function selectedAnswer(e){
    let selectedButton = e.target;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (selectedButton.dataset.correct){
        score++;
    }

    // const timeoutRef = setTimeout(nextQuestion, 2000);
    setTimeout(nextQuestion, 2000);
}

/** Waits after answer is selected to display the next question */ 
function nextQuestion(){
    questionsAsked++;
    questionImg.classList.add('hide');
    if (questionsAsked === 10){
        fullGame.style.display = 'none';
        gameEnd();
    } else {
        currentQuestionIndex++;
        while (answerButtonsElement.firstChild){
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
    currentQuestion++;
    questionCounter.innerText = currentQuestion;
}

/**Adds the correct and wrong classes to the answer buttons. */
function setStatusClass(element, correct){
    if(correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**Ends the game, displays final score and restart button. */
function gameEnd(event){
    endScreenContainer.classList.remove('hide');
    endScreenContainer.style.display = 'flex';
    let scoreText = document.createElement('h2');
    if (score <= 5){
        scoreText.innerText = 'You score is ' + score + ' out of 10.';
    } else if (score <= 8 && score > 5){
        scoreText.innerText = "You hit a home run, you scored " + score + ' out of 10!';
    } else if (score <= 10 && score > 8){
        scoreText.innerText = "You hit a grand slam, you scored " + score + ' out of 10!';
    }
    endScreenContainer.appendChild(scoreText);
    let restartButton = document.createElement('button');
    restartButton.innerText = 'Retry Quiz';
    restartButton.classList.add('restart-btn');
    restartButton.onclick = () => {
        location.reload(true);
    };
    endScreenContainer.appendChild(restartButton);
}

/** Starts timer */
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

document.onload = startGame();
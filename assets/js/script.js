let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answers-container');
let nextButton = document.getElementById('next-button');

let shuffledQuestions, currentQuestionIndex

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
    resetState();
    nextButton.classList.add('hide');
})

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
            {text: 'Thad Levine', correct: false},
            {text: 'Scott Harris', correct: false},
            {text: 'Brian Cashman', correct: true},
            {text: 'Alex Anthopoulos', correct: false},
        ] 
    },
    {
        question: 'Which of these teams does not play in the AL West division?',
        answers: [
            {text: 'Houston Astros', correct: false},
            {text: 'Seattle Mariners', correct: false},
            {text: 'Texas Rangers', correct: true},
            {text: 'Minnesota Twins', correct: false},
        ] 
    },
    {
        question: 'What team did Babe Ruth play for first?',
        answers: [
            {text: 'Boston Red Sox', correct: false},
            {text: 'Chicago White Sox', correct: false},
            {text: 'Baltimore Orioles', correct: true},
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
            {text: 'Hokkaido Nippon-Ham Fighters', correct: false},
            {text: 'Hanshin Tigers', correct: false},
            {text: 'Yomiuri Giants', correct: true},
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
            {text: 'Miami', correct: true},
            {text: 'Houston', correct: false},
            {text: 'Pittsburgh', correct: true},
        ] 
    },
    
]

document.onload = startGame();
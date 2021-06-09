let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answers-container');

let shuffledQuestions, currentQuestionIndex

function startGame(){
    console.log('Game started...');
    shuffledQuestions = questions.sort(() => Math.random () - .5)
    currentQuestionIndex = 0
    nextQuestion();
}

function nextQuestion(){
    resetQuestion();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        answerButtonsElement.appendChild(button)
    })
    
}



function resetQuestion(){
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    };
}

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
            {text: 'Boston Red Sox', correct: false},
            {text: 'Chicago White Sox', correct: false},
            {text: 'Baltimore Orioles', correct: true},
            {text: 'New York Yankees', correct: false},
        ] 
    },
]

document.onload = startGame();
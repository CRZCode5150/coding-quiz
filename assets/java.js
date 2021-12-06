//Questions for quiz

const quizData = [
    {
        question: "Commonly used data types DO not include...",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        correct: "c",
    },
    {
        question: "The condition in an if/else statement is enclosed with _______",
        a: "Quotes",
        b: "Curly brackets",
        c: "Parenthesis",
        d: "Square brackets",
        correct: "b",
    },
    {
        question: "Arrays in javascript can be used to store ______",
        a: "NUmbers & Strings",
        b: "Other arrays",
        c: "Booleans",
        d: "all of the above",
        correct: "d",
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        a: "Commas",
        b: "Curly brackets",
        c: "Quotes",
        d: "Parenthesis",
        correct: "c",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "Javascript",
        b: "Terminal/Bash",
        c: "For Loops",
        d: "Console.log",
        correct: "d",
    },
];

//creating variables and grabbing elements from html to work/edit in Javascript
//quiz ID in Section
const quiz = document.getElementById('quiz')
//all .answer classes
const answerElement = document.querySelectorAll('.answer')
//question ID from h2 tag
const questionElement = document.getElementById('question')
//each answer element in the label tags
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
//submit button
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()
//function to get quiz going
function loadQuiz() {

    const currentQuizData = quizData[currentQuiz]

    //transfring data from javascript to html 
    questionElement.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


//function to return the answer and loop through them 
function selection(){
    let answer
    answerElement.forEach(answerElement => {
        if(answerElement.checked){
            answer = answerElement.id
        }
    })
    return answer
}


//checking to see if answer is correct or not, then we return the score to the user at the end of the game
submitBtn.addEventListener('click', () => {
    const answer = selection()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
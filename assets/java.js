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


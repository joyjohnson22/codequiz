var quizquestion = 0
var start = document.getElementById("startQuiz")
var quizcont = document.getElementById("quizContainer")
var quizresults = document.getElementById("results")
var quest = document.getElementById("question")
var tru = document.getElementById("true")
var fal = document.getElementById("false")
quizcont.style.display = "none"
quizresults.style.display = "none"
start.addEventListener("click", startquiz)
tru.addEventListener("click", checkanswer)
fal.addEventListener("click", checkanswer)

var question = [
    {
        "question": "css is for cascading style sheets",
        "answer": "true"
    },
    {
        "question": "HTML stands for HyperTextMarkupLanguage",
        "answer": "true"
    },
    {
        "question": "css is for cascading style sheets",
        "answer": "true"
    },
    {
        "question": "css is for cascading style sheets",
        "answer": "true"
    },
    {
        "question": "css is for cascading style sheets",
        "answer": "true"
    },
    {
        "question": "css is for cascading style sheets",
        "answer": "true"
    },
    {
        "question": "css is for cascading style sheets",
        "answer": "true"
    },
    {
        "question": "css is for cascading style sheets",
        "answer": "true"
    }
]
function startquiz() {
    start.style.display = "none"
    quizcont.style.display = "block"
    quest.innerHTML = question[quizquestion].question
}
function checkanswer() {
    console.log("true")
    var useranswer = this
}
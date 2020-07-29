var quizquestion = 0
var start = document.getElementById("startQuiz")
var quizcont = document.getElementById("quizContainer")
var quizresults = document.getElementById("results")
var quest = document.getElementById("question")
quizcont.style.display = "none"
quizresults.style.display = "none"
start.addEventListener("click", startquiz)

var question = [
    {
        "question": "css is for cascading style sheets",
        "answer": "true"
    },
    {
        "question": "css is for cascading style sheets",
        "answer": "true"
    },
]
function startquiz() {
    start.style.display = "none"
    quizcont.style.display = "block"
    quest.innerHTML = question[quizquestion].question
}

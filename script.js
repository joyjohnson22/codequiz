var quizquestion = 0
var start = document.getElementById("startQuiz")
var quizcont = document.getElementById("quizContainer")
var quizresults = document.getElementById("results")
var quest = document.getElementById("question")
var tru = document.getElementById("true")
var fal = document.getElementById("false")
var score = document.getElementById("score")
var input = document.getElementById("unsername")
var button = document.getElementById("savebtn")
var right = 0
var wrong = 0
quizcont.style.display = "none"
quizresults.style.display = "none"
start.addEventListener("click", startquiz)
tru.addEventListener("click", checkanswer)
fal.addEventListener("click", checkanswer)
button.addEventListener("click", saveuser)
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
    displayQuestion()
}
function displayQuestion() {
    quest.innerHTML = question[quizquestion].question
}

function checkanswer() {
    console.log("true")
    var useranswer = this.getAttribute("id")
    if (useranswer == question[quizquestion]) {
        right++
    }
    else {
        wrong++
    }
    if (quizquestion < question.length - 1) {
        quizquestion++
        displayQuestion()
    }
    else {
        console.log(right, wrong)
        displayAnswer()
    }
}
function displayAnswer() {
    quizcont.style.display = "none"
    quizresults.style.display = "block"

}
function saveuser() {
    console.log("saveuser")
}
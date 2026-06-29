const questions = [
    {
    type: "choice",
    question: "Какой HTML-тег используется для самого важного заголовка?",
    options: ["<title>", "<h1>", "<header>", "<main>"],
    answer: "<h1>",
    },
    {
    type: "text",
    question: "Как называется язык, который отвечает за стили на веб-странице?",
    answer: "css",
    },
    {
    type: "choice",
    question: "Какой метод используется, чтобы найти элемент по id?",
    options: ["queryId()", "getElementById()", "findById()", "selectId()"],
    answer: "getElementById()",
    },
    {
    type: "text",
    question:
        "Какое ключевое слово объявляет переменную, значение которой можно менять?",
    answer: "let",
    },
    {
    type: "choice",
    question: "Где хранится значение localStorage?",
    options: [
        "Только в оперативной памяти",
        "В браузере пользователя",
        "На сервере Node.js",
        "В HTML-файле",
    ],
    answer: "В браузере пользователя",
    },
];

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const questionArea = document.getElementById("questionArea");
const resultArea = document.getElementById("resultArea");
const questionText = document.getElementById("questionText");
const answersArea = document.getElementById("answersArea");
const feedback = document.getElementById("feedback");
const resultText = document.getElementById("resultText");
const progress = document.getElementById("progress");
const timerElement = document.getElementById("timer");
const bestResultElement = document.getElementById("bestResult");

const secondsPerQuestion = 15;

let currentQuestionIndex = 0;
let score = 0;
let secondsLeft = secondsPerQuestion;
let timerId = null;
let isAnswered = false;

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);

showBestResult();
resetStats();

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  startBtn.classList.add("hidden");
  restartBtn.classList.add("hidden");
  resultArea.classList.add("hidden");
  questionArea.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  isAnswered = false;
  feedback.textContent = "";
  feedback.className = "feedback";
  answersArea.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];

  progress.textContent =
    "Вопрос " + (currentQuestionIndex + 1) + " из " + questions.length;
  questionText.textContent = currentQuestion.question;

  if (currentQuestion.type === "choice") {
    renderChoiceQuestion(currentQuestion);
  } else {
    renderTextQuestion();
  }

  startTimer();
}

function renderChoiceQuestion(question) {
  question.options.forEach(function (option) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = option;

    button.addEventListener("click", function () {
      checkAnswer(option, button);
    });

    answersArea.appendChild(button);
  });
}

function renderTextQuestion() {
  const wrapper = document.createElement("div");
  wrapper.className = "text-answer";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Введите ответ";
  input.autocomplete = "off";

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.className = "submit-btn";
  submitButton.textContent = "Ответить";

  submitButton.addEventListener("click", function () {
    checkAnswer(input.value.trim(), submitButton);
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkAnswer(input.value.trim(), submitButton);
    }
  });

  wrapper.appendChild(input);
  wrapper.appendChild(submitButton);
  answersArea.appendChild(wrapper);

  input.focus();
}

function startTimer() {
  clearInterval(timerId);
  secondsLeft = secondsPerQuestion;
  updateTimer();

  timerId = setInterval(function () {
    secondsLeft = secondsLeft - 1;
    updateTimer();

    if (secondsLeft <= 0) {
      handleTimeout();
    }
  }, 1000);
}

function updateTimer() {
  timerElement.textContent = secondsLeft + " сек.";
}

function checkAnswer(userAnswer, selectedElement) {
  if (isAnswered) {
    return;
  }

  isAnswered = true;
  clearInterval(timerId);

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = normalizeAnswer(currentQuestion.answer);
  const givenAnswer = normalizeAnswer(userAnswer);
  const isCorrect = givenAnswer === correctAnswer;

  disableAnswers();

  if (isCorrect) {
    score = score + 1;
    feedback.textContent = "Верно!";
    feedback.classList.add("correct");

    if (selectedElement.classList.contains("answer-btn")) {
      selectedElement.classList.add("correct");
    }
  } else {
    feedback.textContent =
      "Неверно. Правильный ответ: " + currentQuestion.answer;
    feedback.classList.add("incorrect");

    if (selectedElement.classList.contains("answer-btn")) {
      selectedElement.classList.add("incorrect");
    }

    highlightCorrectAnswer(currentQuestion.answer);
  }

  setTimeout(goToNextQuestion, 1200);
}

function handleTimeout() {
  if (isAnswered) {
    return;
  }

  isAnswered = true;
  clearInterval(timerId);
  disableAnswers();

  const currentQuestion = questions[currentQuestionIndex];

  feedback.textContent =
    "Время вышло. Правильный ответ: " + currentQuestion.answer;
  feedback.classList.add("incorrect");

  highlightCorrectAnswer(currentQuestion.answer);

  setTimeout(goToNextQuestion, 1400);
}

function goToNextQuestion() {
  currentQuestionIndex = currentQuestionIndex + 1;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  clearInterval(timerId);

  questionArea.classList.add("hidden");
  resultArea.classList.remove("hidden");
  restartBtn.classList.remove("hidden");

  const percent = Math.round((score / questions.length) * 100);

  resultText.textContent =
    "Вы ответили правильно на " +
    score +
    " из " +
    questions.length +
    " вопросов. Результат: " +
    percent +
    "%.";

  saveBestResult(score, percent);
  showBestResult();
  resetStats();
}

function disableAnswers() {
  const controls = answersArea.querySelectorAll("button, input");

  controls.forEach(function (control) {
    control.disabled = true;
  });
}

function highlightCorrectAnswer(correctAnswer) {
  const buttons = answersArea.querySelectorAll(".answer-btn");

  buttons.forEach(function (button) {
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    }
  });
}

function normalizeAnswer(answer) {
  return String(answer).trim().toLowerCase();
}

function saveBestResult(currentScore, currentPercent) {
  const savedBestScore = localStorage.getItem("bestQuizScore");

  if (savedBestScore === null || currentScore > Number(savedBestScore)) {
    localStorage.setItem("bestQuizScore", currentScore);
    localStorage.setItem("bestQuizPercent", currentPercent);
    localStorage.setItem("bestQuizTotal", questions.length);
  }
}

function showBestResult() {
  const bestScore = localStorage.getItem("bestQuizScore");
  const bestPercent = localStorage.getItem("bestQuizPercent");
  const bestTotal = localStorage.getItem("bestQuizTotal");

  if (bestScore === null) {
    bestResultElement.textContent = "Лучший результат: пока нет";
  } else {
    bestResultElement.textContent =
      "Лучший результат: " +
      bestScore +
      " из " +
      bestTotal +
      " (" +
      bestPercent +
      "%)";
  }
}

function resetStats() {
  progress.textContent = "Вопрос 0 из " + questions.length;
  timerElement.textContent = secondsPerQuestion + " сек.";
}

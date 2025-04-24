let formSteps = [
    {
        text: 'Вопрос 1: Какая планета Солнечной системы самая большая?',
        answers: ['Земля', 'Юпитер', 'Сатурн', 'Нептун'],
        correctAnswer: 'Юпитер'
    },
    {
        text: 'Вопрос 2: Как называется ближайшая к Земле звезда?',
        answers: ['Сириус', 'Альфа Центавра', 'Солнце', 'Бетельгейзе'],
        correctAnswer: 'Солнце'
    },
    {
        text: 'Вопрос 3: Как называется галактика, в которой находится наша Солнечная система?',
        answers: ['Андромеда', 'Млечный Путь', 'Туманность Ориона', 'Большое Магелланово Облако'],
        correctAnswer: 'Млечный Путь'
    },
    {
        text: 'Вопрос 4: Сколько планет в Солнечной системе?',
        answers: [7, 8, 9, 10],
        correctAnswer: 8
    },
    {
        text: 'Вопрос 5: Как называется первый искусственный спутник Земли?',
        answers: ["Восток-1", "Союз-1", "Спутник-1", "Аполлон-11"],
        correctAnswer: "Спутник-1"
    },
    {
        text: 'Вопрос 6: Как называется самый большой спутник Солнечной системы?',
        answers: ['Луна', 'Европа', 'Ганимед', 'Титан'],
        correctAnswer: 'Ганимед'
    },
    {
        text: 'Вопрос 7: Как называется явление, при котором Луна полностью закрывает Солнце?',
        answers: ['Лунное затмение', 'Солнечное затмение', 'Полярное сияние', 'Парад планет'],
        correctAnswer: 'Солнечное затмение'
    },
    {
        text: 'Вопрос 8: Как называется самая яркая звезда ночного неба?',
        answers: ['Полярная звезда', 'Сириус', 'Вега', 'Альдебаран'],
        correctAnswer: 'Сириус'
    },
    {
        text: 'Вопрос 9: Как называется планета, которая вращается "на боку" (с осью наклона почти 90 градусов)?',
        answers: ['Уран', 'Нептун', 'Венера', 'Марс'],
        correctAnswer: 'Уран'
    },
    {
        text: 'Вопрос 10: Как называется пояс астероидов между Марсом и Юпитером?',
        answers: ['Кольцо астероидов', 'Главный пояс астероидов', 'Пояс Койпера', 'Оортово облако'],
        correctAnswer: 'Главный пояс астероидов'
    },
    {
        text: 'Вопрос 11: Напишите фамилию первого человека, который полетел в космос.',
        answers: null,
        correctAnswer: 'Гагарин'
    },
    {
        text: 'Вопрос 12: Как называется телескоп, который был запущен в 1990 году и находится на орбите Земли?',
        answers: null,
        correctAnswer: 'Хаббл'
    },
    {
        text: 'Вопрос 13: Напишите название планеты, которая известна своими кольцами.',
        answers: null,
        correctAnswer: 'Сатурн'
    },
    {
        text: 'Вопрос 14: Как называется ближайшая к Земле галактика?',
        answers: null,
        correctAnswer: 'Андромеда'
    }
];

let currentStep = 0;
let selectedAnswers = [];

function startQuiz() {
    currentStep = 0;
    selectedAnswers = [];
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    renderStep();
}

function renderStep() {
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");

    questionText.textContent = formSteps[currentStep].text;
    answersContainer.innerHTML = "";

    if (formSteps[currentStep].answers) {
        formSteps[currentStep].answers.forEach((answer, index) => {
            const label = document.createElement("label");
            label.classList.add("quiz__answer-item");
            label.setAttribute("for", `answer-${index}`);

            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", `text-${currentStep}`);
            input.setAttribute("id", `answer-${index}`);
            input.value = answer;

            const circle = document.createElement("div");
            circle.classList.add("quiz__answer-item-circle");

            const text = document.createElement("div");
            text.classList.add("quiz__answer-item-text");
            text.textContent = answer;

            label.appendChild(input);
            label.appendChild(circle);
            label.appendChild(text);
            answersContainer.appendChild(label);
        });
    } else {
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", `text-${currentStep}`);
        input.setAttribute("id", `answer-text`);
        input.classList.add("quiz__text-input");
        answersContainer.appendChild(input);
    }
}

function nextStep() {
    let selectedAnswer;

    if (formSteps[currentStep].answers) {
        selectedAnswer = document.querySelector(
            `input[name="text-${currentStep}"]:checked`
        );
        if (selectedAnswer) {
            selectedAnswer = selectedAnswer.value;
        }
    } else {
        selectedAnswer = document.getElementById("answer-text").value.trim();
    }

    if (selectedAnswer) {
        selectedAnswers.push({
            text: formSteps[currentStep].text,
            answer: selectedAnswer,
            isCorrect: selectedAnswer.toString().toLowerCase() === formSteps[currentStep].correctAnswer.toString().toLowerCase()
        });
    } else {
        alert("Пожалуйста, выберите или введите ответ.");
        return;
    }

    if (currentStep < formSteps.length - 1) {
        currentStep++;
        renderStep();
    } else {
        showResults();
    }
}

function showResults() {
    const resultsContainer = document.getElementById("results-container");
    const correctAnswersCount = selectedAnswers.filter(answer => answer.isCorrect).length;

    resultsContainer.innerHTML = `
        <h2>Результаты</h2>
        <p>Вы ответили правильно на ${correctAnswersCount} из ${formSteps.length} вопросов.</p>
        <ul>
            ${selectedAnswers.map((step, index) => `
                <li>
                    <strong>Вопрос ${index + 1}:</strong> ${step.text}<br>
                    <strong>Ваш ответ:</strong> ${step.answer}<br>
                    <strong>Правильный ответ:</strong> ${formSteps[index].correctAnswer}<br>
                    <strong>${step.isCorrect ? "Верно" : "Неверно"}</strong>
                </li>
            `).join('')}
        </ul>
        <button onclick="restartQuiz()" class="quiz__button">Перезапустить квиз</button>
    `;
    document.getElementById("quiz-container").style.display = "none";
    resultsContainer.style.display = "block";
}

function restartQuiz() {
    document.getElementById("results-container").style.display = "none";
    document.getElementById("start-container").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("results-container").style.display = "none";
});
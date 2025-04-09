let formSteps = [
    {
        text: 'Вопрос 1: Какая планета Солнечной системы самая большая?',
        answers: ['Земля', 'Юпитер', 'Сатурн', 'Нептун']
    },
    {
        text: 'Вопрос 2: Как называется ближайшая к Земле звезда?',
        answers: ['Сириус', 'Альфа Центавра', 'Солнце', 'Бетельгейзе']
    },
    {
        text: 'Вопрос 3: Как называется галактика, в которой находится наша Солнечная система?',
        answers: ['Андромеда', 'Млечный Путь', 'Туманность Ориона', 'Большое Магелланово Облако']
    },
    {
        text: 'Вопрос 4: Сколько планет в Солнечной системе?',
        answers: [7, 8, 9, 10]
    },
    {
        text: 'Вопрос 5: Как называется первый искусственный спутник Земли?',
        answers: ["Восток-1", "Союз-1", "Спутник-1", "Аполлон-11"]
    },
    {
        text: 'Вопрос 6: Как называется самый большой спутник Солнечной системы?',
        answers: ['Луна', 'Европа', 'Ганимед', 'Титан']
    },
    {
        text: 'Вопрос 7: Как называется явление, при котором Луна полностью закрывает Солнце?',
        answers: ['Лунное затмение', 'Солнечное затмение', 'Полярное сияние', 'Парад планет']
    },
    {
        text: 'Вопрос 8: Как называется самая яркая звезда ночного неба?',
        answers: ['Полярная звезда', 'Сириус', 'Вега', 'Альдебаран']
    },
    {
        text: 'Вопрос 9: Как называется планета, которая вращается "на боку" (с осью наклона почти 90 градусов)?',
        answers: ['Уран', 'Нептун', 'Венера', 'Марс']
    },
    {
        text: 'Вопрос 10: Как называется пояс астероидов между Марсом и Юпитером?',
        answers: ['Кольцо астероидов', 'Главный пояс астероидов', 'Пояс Койпера', 'Оортово облако']
    },
    {
        text: 'Вопрос 11: Напишите фамилию первого человека, который полетел в космос.',
        answers: 'Гагарин',
    },
    {
        text: 'Вопрос 13: Как называется телескоп, который был запущен в 1990 году и находится на орбите Земли?',
        answers: 'Хаббл'
    },
    {
        text: 'Напишите название планеты, которая известна своими кольцами.',
        answers: 'Сатурн'
    },
    {
        text: 'Вопрос 15: Как называется ближайшая к Земле галактика?',
        answers: 'Андромеда'
    }
];

let currentStep = 0;
let selectedAnswers = [];

function renderStep() {
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");

    questionText.textContent = formSteps[currentStep].text;
    answersContainer.innerHTML = "";

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
    })
};

function nextStep() {
    const selectedAnswer = document.querySelector(
        `input[name="text-${currentStep}"]:checked`
    );

    if (selectedAnswer) {
        // Сохраняем выбранный ответ
        selectedAnswers.push({
            text: formSteps[currentStep].text,
            answer: selectedAnswer.value,
        });
    } else {
        alert("Пожалуйста, выберите ответ.");
        return;
    }

    // Переход к следующему шагу или завершение квиза
    if (currentStep < formSteps.length - 1) {
        currentStep++;
        renderStep();
    } else {
        const messageText = selectedAnswers
            .map(
                (step, index) =>
                    `Вопрос ${index + 1}: ${step.text}\nОтвет: ${step.answer}`
            )
            .join("\n\n");
        sendResults(messageText);
        alert("Квиз завершён");
    }
}

// Функция для отправки результатов
function sendResults(data) {
    // Выводим данные в консоль для отладки
    console.log("Отправляем данные...");
    console.log(data);
    // Здесь можно добавить код для отправки данных на сервер
}

document.addEventListener("DOMContentLoaded", renderStep);

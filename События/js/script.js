//1. Назначь для кнопки обработчик события click, который будет изменять текст этой кнопки при нажатии;

const button = document.getElementById('myButton')
button.addEventListener ('click', () => {
    button.textContent = ('КНОПКА НАЖАТА')
});

//2. Назначь для любого элемента обработчик события mouseover, который будет изменять размер элемента при наведении;

const box = document.getElementById('myBox');
box.addEventListener('mouseover', () => {
    box.style.height = '200px';
    box.style.width = '200px';
});
box.addEventListener('mouseout', () => {
    box.style.height = '';
    box.style.width = '';
});

//3. Назначь для инпута обработчик события keyup, который будет выводить отпущенную клавишу в консоль;

const inputField = document.getElementById('myInput');
document.addEventListener('keyup', (event) => {
    console.log(`Отпущена клавиша: ${event.key}`);
});

//4. Создай форму и добавь обработчик события submit, который будет показывать сообщение об успешной отправке;

const sendForm = document.getElementById ('myForm');
sendForm.addEventListener('submit', () => {
    alert ('Форма успешно отправлена');
});

//5. Пусть на странице есть кнопка с надписью 'Изменить тему', которая позволяет переключать тему страницы. 
//Например, по умолчанию тема светлая: задний фон - белый, текст - черный. Нажимаем на кнопку -> тема меняется на темную: цвет фона - черный, текст - белый. 
//Еще раз нажимаем на кнопку -> тема снова светлая и т. д.

const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});
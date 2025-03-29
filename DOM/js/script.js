//1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;

const interTitle = document.getElementById('inter-title');
interTitle.textContent = 'Тут мог бы быть Ваш Lorem, но он убежал';

//2. Используй JavaScript, чтобы изменить фон и цвет текста элемента с определенным классом;

const remasterClass = document.getElementsByClassName('reClass')[0];
remasterClass.style.color = 'red';
remasterClass.style.background = 'blue';

//При вводе без [0] - выдает ошибку и не принимает изменение. Это обосновано тем, что getElementDyClassName возвращает коллекцию элементов с этим классом. У коллекции нет свойства style.
//Я мог использовать querySelector, для того чтобы выбрать конкретный элемент (если он первый в документе, в случае других - необходим небольшой поиск и более обширный  код). 
//Но начав с getElementByClassName и встретив ошибку, я решил оставить так, чтобы понимать в будущем и больше разбираться в работе DOM.

//3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа;

const newParagraph = document.createElement('p')
newParagraph.textContent = ('Работа во Frontend разработке интересная и увлекательная');
document.body.appendChild(newParagraph);

//4. Напиши функцию, которая удаляет элемент с указанным ID из документа;

function Deleter(itemForRemove) {
    itemForRemove.parentNode.removeChild(itemForRemove);
    return
}
const itemForRemove = document.getElementById('deleteMe');
const itemDelete = Deleter(itemForRemove)

//5. Измени атрибут ссылки на новый URL и выведи его значение в консоль;

const link = document.querySelector('a');
link.setAttribute('href', 'https://rutube.ru');
console.log(link.getAttribute('href'));

//6. Создай новый элемент, добавь к нему класс и добавь его в DOM;

const newElement = document.createElement('div');
newElement.textContent = 'Оппа! А вот тут новенький элемент! И у него даже свой класс есть, еще и с обработками)';
newElement.classList.add('newClass');
document.body.appendChild(newElement);

const style = document.createElement('style');
style.textContent = `
    .newClass {
        color: red;
        font-size: 20px;
        background-color: yellow;
        padding: 10px;
        border: 1px solid black;
    }
`;
document.head.appendChild(style); 

//7. Переключи класс у существующего элемента и проверьте его наличие в консоли.

newElement.classList.remove('newClass')
newElement.classList.add('changedClass');
console.log (newElement.className)


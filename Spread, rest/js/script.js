// 1 task

/*
Задание 1.  Создай функцию, которая принимает произвольное количество чисел и возвращает их среднее значение;
*/

function average(...numbers) {
    return (numbers.reduce((acc, num) => acc + num, 0) / numbers.length);
}

console.log(average(489, 673, 812, 59, 72))

// 2 task

/*
Задание 2. Создай функцию, которая принимает объект с информацией о пользователе (имя, возраст, страна) и возвращает строку с этой информацией, используя деструктуризацию;
*/

function display({ name, surname, age, country }) {
    return `Меня зовут ${name} ${surname}. Мне ${age} года. Я из ${country}`;
}

const person = { name: 'Anthony', surname: 'Stark', age: 33, country: 'USA' };
console.log(display(person));


// 3 task

/*
3. Создай объект с вложенными объектами и массивами. Используй деструктуризацию, чтобы извлечь несколько значений на разных уровнях вложенности;
*/

const user = {
    name: 'Daria',
    surname: 'Savochkina',
    age: 23,
    adress: {
        city: 'Saint-Petersburg',
        zip: 195238,
        street: 'Lubavinskaya'
    },
    favoriteMovies: [
        comedy = ['Брилиантовая рука', 'Третий лишний', 'Тупой и еще тупее'],
        trillers = ['Крик', 'Техасская резня бензопилой', 'Пила'],
        horrors = ['Оно', 'Дитя тьмы', 'У холмов есть глаза']
    ]
}

const { name, adress: { city, street }, favoriteMovies } = user;

console.log(name)
console.log(street)
console.log(...favoriteMovies)


// 4 task

/*
Задание 4. Используй оператор `spread` для создания нового массива, который включает все элементы исходного массива и добавляет несколько новых элементов в начале и в конце;
*/

const someArray = [1, 2, 3]
const modifiedArray = [114, 12121, 2444, 35454, ...someArray, 444, 56564, 62121]

console.log(modifiedArray)

// 5 task

/*
Задание 5.  Используй оператор `rest` для создания функции, которая принимает объект с параметрами и возвращает новый объект без одного указанного параметра.
*/

const exclude = (obj, excludingKey) => {
    const { [excludingKey]: first, ...rest } = obj;
    return rest;
};

const originalObject = { d: 1, f: 2, g: 3 };
const newObject = exclude(originalObject, 'f');
console.log(newObject); 
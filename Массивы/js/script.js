// 1 task

/*
Задание 1. Есть массив чисел. Преобразуй массив так, чтобы там были квадраты чисел. Пример: [2, 3] -> [4, 9];
*/

const someArray = [18, 23, 38, 44, 5, 69];
const doubledArray = someArray.map(someArray => someArray * someArray)

console.log(someArray)
console.log(doubledArray)

// 2 task

/*
Задание 2. Есть массив c повторяющимися элементами. Отфильтруй массив так, чтобы там остались только уникальные элементы. 
Пример: [1, 2, 2, 3, 4, 5, 5, 5, 6] -> [1, 2, 3, 4, 5, 6];
*/

const numbers = [1, 2, 3, 3, 4, 6, 6, 7, 7, 7, 8, 8, 9, 10, 10]
const filtredNumbers = numbers.filter((item, index) => {
    return numbers.indexOf(item) === index
})
console.log(filtredNumbers)

// 3 task

/*
3. Есть массив чисел, посчитай сумму его элементов. 
Пример: [1, 2, 3] -> 6. 
Подсказка: используй reduce;
*/

const someNumbers = [1, 44, 55, 78, 95, 64, 123]
const amount = someNumbers.reduce((total, num) => total + num, 0)

console.log(amount)

// 4 task

/*
Задание 4. Напиши программу, которая развернет массив, то есть все элементы будут в обратном порядке. 
Нельзя использовать reverse()!
*/

const books = ['1984', 'Война и мир', 'Обломов', '1984', 'Хроники хищных городов', 'Отцы и дети', 'Война и мир', 'Атомные привычки', 'Дюна', 'Гиперион']
for (let i = 0, j = books.length - 1; i < j; i++, j--)
    [books[i], books[j]] = [books[j], books[i]]

console.log(books)

// 5 task

/*
Задание 5. Создай две переменных - две строки с использованием let и const. Попробуйте изменить значения всех этих переменных. 
Создайте два массива с использованием let и const. Попробуйте изменить массивы (добавить и удалить элементы) и переопределить сами массивы. 
Посмотри на результаты и объясни своими словами (да, опять🙂), что и почему так произошло.
*/

const a = 'Константа'
let b = 'Переменная с возможностью изменения'

a = 'Бывает, что не получается'
b = 'А вот тут получилось'

console.log(a)
console.log(b)

// В этом случае, мы пытаемся изменить ЗНАЧЕНИЕ переменной, чего нельзя сделать если задана константа. Потому в консоли выйдет ошибка.
//В случае с let, замена срабатывает, так как она позволяет заменить значение, которое было задано в самом начале.

const massive = [1, 2, 3, 4, 5, 6, 7]
let massive2 = [8, 9, 1, 2, 3, 4, 0]

console.log(massive)
console.log(massive2)

massive = [11, 22, 33, 44, 55, 66, 77]
massive2 = [88, 99, 11, 22, 33, 44]

console.log(massive)
console.log(massive2)

// В этом случае так же будет ошибка, так как мы меняем заданное значение. Константа не даст заменить массив на массив. 
// Однако let позволит это сделать, так как можно заменить его значение. Массив поменяется на другой.

massive.push(9, 10, 11)
massive2.pop()

console.log(massive)
console.log(massive2)

//В этом случае мы изменяем значение, не изменяя его. Изначально для каждой переменной задается значение, которое равно наличию массива, но не значению его наполнения.
//Добавляя или удаляя элемент из наполнения, мы не меняем первоначальных данных - в переменной по прежнему имеется массив. Он тот же самый, что и был, но его содержимое - изменено.
//Потому ошибки не будет.


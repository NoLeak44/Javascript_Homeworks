// 1 task
let someNumber = prompt('Введите число');

if (Number(someNumber) > 0) {
    console.log('Это положительное число');
} else if (Number(someNumber) === 0) {
    console.log('Это ноль!')
} else {
    console.log('Это отрицательное число')
}

// 2 task

/* 
Я искал методы, чтоб не делать бутерброд из if...else, но не смог найти. И, так как дифференциация результатов по ИМТ довольно большая, к сожалению, пришлось использовать награмождение.
Оператор switch не работает с логическими выражениями, следовательно не может быть использован. 
Каюсь, грешен. Готов понести наказание и узнать, как было сделать лучше.
*/
let userWeight = prompt('Введите свой вес')
let userHeight = prompt('Введите свой рост в сантиметрах')

let result = (Number(userWeight) / (Number(userHeight)/100) ** 2)

console.log('Ваш ИМТ= ' + (result).toFixed(1) )

if (result <= 16) {
    console.log('У Вас выраженный дефицит массы тела')
} else if (result <= 18.5) {
    console.log('У Вас недостаточная масса тела')
} else if (result <= 25) {
    console.log('Ваш вес находится в норме')
} else if (result <= 30) {
    console.log('У Вас избыточная масса тела')
} else if (result <= 35) {
    console.log('У Вас ожирение первой степени')
} else if (result <= 40) {
    console.log('У Вас ожирение второй степени')
} else {
    console.log('У Вас ожирение третьей степени')
}

// 3 task

let someVar = Number(prompt('Введите месяц'))

let monthName

switch (someVar) {
    case 1:
        monthName = 'Январь'
        break;
    case 2:
        monthName = 'Февраль'
        break;
    case 3:
        monthName = 'Март'
        break;
    case 4:
        monthName = 'Апрель'
        break;
    case 5:
        monthName = 'Май'
        break;
    case 6:
        monthName = 'Июнь'
        break;
    case 7:
        monthName = 'Июль'
        break;
    case 8:
        monthName = 'Август'
        break;
    case 9:
        monthName = 'Сентябрь'
        break;
    case 10:
        monthName = 'Октябрь'
        break;
    case 11:
        monthName = 'Ноябрь'
        break;
    case 12:
        monthName = 'Декабрь'
        break;
    default:
        monthName = 'Нет такого месяца, родной мой'
}

console.log(monthName) 

// 4 task

let currentHour = Number(prompt('Введите Ваше время суток (0-23):'))
let drinkSuggestion

switch (true) {
    case (currentHour >= 6 && currentHour < 12):
        drinkSuggestion = 'Утро! Вам подойдет чашка кофе.'
        break;
    case (currentHour >= 12 && currentHour < 18):
        drinkSuggestion = 'День! Как насчет освежающего лимонада?'
        break;
    case (currentHour >= 18 && currentHour < 22):
        drinkSuggestion = 'Вечер! Рекомендуется расслабиться с чашкой чая.'
        break;
    case ((currentHour >= 22 && currentHour <= 23) || (currentHour >= 0 && currentHour < 6)):
        drinkSuggestion = 'Ночь! Лучше выпить стакан воды перед сном.'
        break;
    default:
        drinkSuggestion = 'Некорректное время. Введите число от 0 до 23.'
}

console.log(drinkSuggestion)

/* 
В данном примере используются диапазоны, так как используется switch (true). 
Когда пишется switch (true), JavaScript получает команду: "Сравнивать каждое выражение в case с true". 
Таким образом, каждое условие в case становится логическим выражением, которое может быть либо true, либо false. Если выражение в case возвращает true, то выполняется соответствующий блок кода.
Благодаря этому метод работает корректно. 
Подобное использование было найдено на просторах интернета. Для второго задания решил отказаться от использования подобного метода для отработки всех способов. 
Также, этот метод не дает возможности к точным данными, следовательно для задач с точными измерениями он не функционирует (может функционировать, но выдать неверное значение).
*/
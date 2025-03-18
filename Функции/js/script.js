/*
1. Напиши функцию, которая принимает строку и проверяет, является ли она палиндромом. Если да - функция возвращает true, если нет - false;
*/
function palindromChecker(text) {
    let normalizedText = text.toLowerCase();
    let reverse = normalizedText.split("").reverse().join("");
    return (normalizedText === reverse);
}

let text = 'ШАЛАШ';
console.log(palindromChecker(text));

text = 'Эндовазивный';
console.log(palindromChecker(text));

text = 'наворован';
console.log(palindromChecker(text));

text = 'Декларация';
console.log(palindromChecker(text));


/*
2. Напиши функцию, которая принимает строку (предложение) и находит первое самое короткое слово в ней и возвращает его;
*/

function almostShortestWordFinder(longText) {
    let words = longText.split(/\s+/);
    let smallestWord = words
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < smallestWord.length) {
            smallestWord = words[i];
        }
    }
    return (`Cамое маленькое слово: ${smallestWord}`);
}

console.log(almostShortestWordFinder('Желание,Ржавый, Семнадцать, Рассвет, Печь, Девять, Добросердечный, Возвращение на родину, Один, Товарный вагон'))

let longText = prompt('Введите Ваше предложение для поиска самого маленького слова')
console.log(almostShortestWordFinder(longText))


/*
3. Напиши функцию, которая форматирует строку с цифрами в телефонный номер. Пример: createPhoneNumber(123456789) → 8 (123) 456-789;
*/

function createPhoneNumber(phoneNumberArray) {
    const [first, second, third, ...rest] = phoneNumberArray;
    const restPart = rest.join('');
    return `8 (${first}${second}${third}) ${restPart.slice(0, 3)}-${restPart.slice(3)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));


/*
4. Напиши функцию, которая ищет минимальное и максимальное значение в массиве;
*/

function findSmallestAndLargestItem(someArray) {
    let minVal = Infinity;
    let maxVal = -Infinity;

    for (let item of someArray) {
        if (item < minVal)
            minVal = item;
        if (item > maxVal)
            maxVal = item;
    }

    return (`Min elem is: ${minVal}, Max elem is: ${maxVal}`);
}

const result = findSmallestAndLargestItem([12, 32, 364, 35355, 789797, 16654654, 654, 78798, -14, 635464, -666666666, 65464564]);
console.log(result);
/*
5. *Напиши функцию, которая на вход принимает массив, а на выходе возвращает новый, отсортированный в порядке возрастания, массив. 
Попробуй реализовать алгоритм сортировки самостоятельно. 
Если не получается - почитай про bubble sort и попробуй реализовать её.
Удачи!
*/

function arraySorting(array1) {
    const sortedArray = array1.sort((a, b) => a - b);
    return sortedArray;
}

console.log(arraySorting([1, 3, 65, 4, 9, 7, 10, 12, -3535, -9, 8, 0]));


/*
1. Напиши функцию, которая принимает строку и проверяет, является ли она палиндромом. Если да - функция возвращает true, если нет - false;
*/
function palindromChecker(text) {
    const stickyText = text.replace(/[^\p{L}\p{N}]/gu, '');
    const normalizedText = stickyText.toLowerCase();
    const reverse = normalizedText.split("").reverse().join("");
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

text = 'А роза упала на лапу Азора'
console.log(palindromChecker(text))

//В данном случае я оставил переменную объявленную через let, так как при проверке измененная на const переменная text будет выдавать ошибку.

/*
2. Напиши функцию, которая принимает строку (предложение) и находит первое самое короткое слово в ней и возвращает его;
*/

function almostShortestWordFinder(longText) {
    const words = longText.split(/\s+/);
    let smallestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < smallestWord.length) {
            smallestWord = words[i];
        }
    }
    return (smallestWord);
    // В рецензии на работу, указано, что можно улучшить код, возвращая только слово. Я убрал конструкцию с интерполяцией. Надеюсь, я правильно понял указание.
}

console.log(almostShortestWordFinder('Желание,Ржавый, Семнадцать, Рассвет, Печь, Девять, Добросердечный, Возвращение на родину, Один, Товарный вагон'))

const longText = prompt('Введите Ваше предложение для поиска самого маленького слова')
console.log(almostShortestWordFinder(longText))


/*
3. Напиши функцию, которая форматирует строку с цифрами в телефонный номер. Пример: createPhoneNumber(123456789) → 8 (123) 456-789;
*/

function createPhoneNumber(phoneNumberInput) {

    if (typeof phoneNumberInput !== 'string' || phoneNumberInput.length !== 9) {
        console.log('Некорректные входные данные');
        return null;
    }

    const phoneNumberArray = phoneNumberInput.split('');
    const [first, second, third, ...rest] = phoneNumberArray;
    const restPart = rest.join('');

    return `8 (${first}${second}${third}) ${restPart.slice(0, 3)}-${restPart.slice(3)}`;

}

console.log(createPhoneNumber('567891234'));


/*
4. Напиши функцию, которая ищет минимальное и максимальное значение в массиве;
*/

function findSmallestAndLargestItem(someArray) {
    if (!Array.isArray(someArray)) {
        console.log('Тут должен быть массив');
        return null;
    }

    if (someArray.length === 0) {
        console.log('Массив пуст');
        return null;
    }

    let minVal = someArray[0];
    let maxVal = someArray[0];

    for (let item of someArray) {
        if (item < minVal) minVal = item;
        if (item > maxVal) maxVal = item;
    }


    return { min: minVal, max: maxVal };
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

function myBubbleSortAttempt(arr) {
    const arraySize = arr.length;

    for (let j = 0; j < arraySize - 1; ++j) {
        for (let i = 0; i < arraySize - j - 1; ++i) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    console.log(arr);
}

const arr = [44, -9, -46, 55, 353, -456, 789, 3, 111, 82];
myBubbleSortAttempt(arr);       

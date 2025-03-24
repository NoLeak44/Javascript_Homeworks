//1. Найдите с помощью break points ошибку в коде этой функции и исправьте ее:

function hasEvenNumber(arr) {

    let foundEven = false;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {

            foundEven = true;
        }
    }

    return foundEven;

}

console.log(hasEvenNumber([1, 3, 5])); // Ожидается: true

// Конструкция с else if - сбрасывает проверку, тем самым выводя false, так как она сбрасывает значение, даже если уже было найдено верное значение, так как она проверяет следующие числа.



//2. Найдите с помощью debugger ошибку в коде этой функции и исправьте ее:

function calculateAverage(numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        
        sum += numbers[i];
        debugger
    }

    return sum / numbers.length;

}

console.log(calculateAverage([2, 4, 6])); // Ожидается: 4

// i<= - приводило к тому, что код уходил в бесконечность, тем самым выдавая Nan


//3. Найдите с помощью console.log ошибку в коде этой функции и исправьте ее:

function findLargestNumber(arr) {

    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        console.log(`Текущий элемент: ${arr[i]}, Текущее наибольшее: ${largest}`);
        if (arr[i] > largest) {

            largest = arr[i];
            console.log(`Обновлено наибольшее значение: ${largest}`);
        }

    }

    return largest;

}

console.log(findLargestNumber([-10, -20, -30])); // Ожидается: -10

//Функция не срабатывала, так как изначально была задана переменная largest со значением 0. 
//Функция не сможет корректно обработать массив, содержащий только отрицательные числа, так как все элементы массива будут меньше 0, и переменная largest никогда не обновится.
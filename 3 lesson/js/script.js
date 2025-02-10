//1 task
let Name = 'Eugene'
let surname = 'Luzin'
let thisYear = 2025
let birthYear = 1999
let age = ((thisYear)-(birthYear))
const gender = 'male'
let JSisFun = true
let iCantReachMyTarget = false
let numberOfChild = null
let wife

console.log (typeof (Name))
console.log (typeof (age))
console.log (typeof (gender))
console.log (typeof (iCantReachMyTarget))
console.log (typeof (wife))

//2 task

/*
Из прочитанного примера 1 и просмотренного примера 2, можно сделать несколько выводов о понятии хранения и сравнивания типов данных по значению и ссылке.
1. Примитивные типы данных (string, number, boolean, undefined, null) хранятся и сравниваются по значению. Это позволяет спокойно менять значения их переменных, без страха изменения сторонних элементов кода, так как они занитмают отдельные ячейки в памяти.
2. Сложные типы данных  (массивы, объекты и функции) хранятся и сравниваются по ссылке. Важно, что при сравнении учитывается, что ссылка идет на один объект. 
3. При создании нового объекта и сравнивании их, они не будут сравниваться, даже если будут иметь одинаковые значения.
3. При изменении данных по ссылке изменения затронут изначальный объект.
4. При изменении изначального объекта в случае использованием ссылки (что называется мутированием), данные поменяются у всех ссылающющихся на него объектах. Стоит избегать мутирования, так как это может повлечь за собой появление огромного числа ошибок.
5. При изменении ссылающегося объекта, необходимо использовать команды копирования, которые создают на базе изначального объекта новый. В таком случае, все изменения не затрорнут изначальный объект. Важно отметить, что при сравнивании двух ссылающихся объектов, они будут сравниваться как два объекта.
*/

let name1 = 'Alexandra' // Задаем переменной значение "Александра"
let name2 = 'Elizaveta' // Задаем второй переменной значение "Елизавета"
name1 = name2 // Меняем значение первой переменной
console.log (name1)
console.log (name2)
console.log (name1 === name2) // При сравнивании ответ true, так как они являются одним и тем же объектом

name2 = 'Daria' // Изменим значение второй переменной

console.log (name1)
console.log (name2)
console.log (name1 === name2) //При сравнивании двух переменных выдаст ответ false, так как первая переменная не поменяла значения после изменения второй, следовательно является отдельным объектом

// Рассмотрим пример со сложными типами данных

let weapon = { 
    brand: 'Lobaev',
    model: 'Urbana_DVL10M',
    type: 'sniper'
}

let weapon2 = weapon

console.log (weapon)
console.log (weapon2)
console.log (weapon === weapon2)

// Сравнение приведет к  true, так как ссылка идет на один объект

let weapon3 = {
    brand: 'Schmeisser',
    model: 'AR15_Dynamic',
    type: 'assault'
}

let weapon4 = {
    brand: 'Schmeisser',
    model: 'AR15_Dynamic',
    type: 'assault'
}

console.log (weapon3)
console.log (weapon4)
console.log (weapon3 === weapon4)

// Два объекта с одинаковыми значениями, не являются одинаковыми объектами, так как сложные объхекты не сравниваются по значениям

const person = {}
const person2 = person
person2.name = 'Tom'

console.log (person)

person.name = 'John'

console.log (person2)

// Изменения person.name привели к мутированию и изменению name у второго объекта. !!!В этом случае изменения не привели к ошибкам, так как код мал и используется только в качестве обучения

const boss = {
    name: 'Victor',
    age:25,
    eyecolor: 'green'
}

const bossCopy = Object.assign({}, boss)

bossCopy.name = 'Elon'

console.log(bossCopy)
console.log(boss)

//Изменения не затронули изначальный объект, так как была создана изменяемая копия. Значение имени изменено, а возраста и цвет глаз - нет



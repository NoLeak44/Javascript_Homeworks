/*
1. Создай объект, ключи в котором будут описывать тебя. 
Например, твое имя, возраст, увлечения и т.д. 
Обязательно используй разные типы данных: 
имя - строка, 
возраст - число, 
хобби - массив и  т.д. 
Затем выведи все свои свойства/свойства объекта в консоль(разными способами!);   
*/

function personality(name, age, hobbies, isEmployed, isStudiyngIT, maritalStatus, greet) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.isEmployed = isEmployed;
    this.isStudiyngIT = isStudiyngIT;
    this.maritalStatus = maritalStatus; 
    this.greet = greet;   
}
const person = new personality(
    'Евгений', 
    25, 
    ['Бейсбол', 'Компьютерная инженерия', 'Головоломки'], 
    true, 
    'С большим интересом', 
    true, 
    function () {console.log('Привет, это я - ' + this.name)} 
);

console.log (person);

console.log(person['name']);

console.log(person.maritalStatus);
/*
2. В объект из предыдущего пункта:
- добавь новое свойство;
- измени значение существующего свойства;
- удали любое свойство.
И снова выведи все свойства объекта в консоль разными способами!
*/
person.personalTabNumber = '32006542'

person.name = 'Ольга';

person['isEmployed'] = false;

delete person.greet;

console.log (person);

console.log(person['isEmployed']);

console.log(person.name);

console.log (person.greet)


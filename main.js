//1
let points = [1, 2, 6, 8];
let maxPoint = 0;
let count = 0;

for (i in points)
    maxPoint += points[i];

if (confirm("2+2=4?"))
    count += points[0];

if (confirm("Вода кипит при температуре 100 градусов Цельсия?"))
    count += points[1];

if (confirm("Дихотомический вопрос это тот на который можно ответить только да или нет?"))
    count += points[2];

if (confirm("Солнце вращается вокруг Земли?"))
    count -= points[3];

if (count == 0)
    alert(`Вы не на один вопрос правильно не ответили и получили ${count} баллов!(`);
else if (count == maxPoint)
    alert(`Вы ответили на все вопросы правильно и собрали ${count} баллов!`);
else
    alert(`Вы ответили не на все вопросы верно и собрали ${count} баллов!`);

count = 0;

document.write(`За первый вопрос - ${points[count++]} баллов. Верный ответ: <b>да</b> <br>`);
document.write(`За второй вопрос - ${points[count++]} баллов. Верный ответ: <b>да</b> <br>`);
document.write(`За третий вопрос - ${points[count++]} баллов. Верный ответ: <b>да</b> <br>`);
document.write(`За четвёртый вопрос - ${points[count++]} баллов. Верный ответ: <b>Нет</b> <br>`);


//2
let FIO = prompt("Введите ФИО:");
let valid = true;
for (let i = 0; i < FIO.length; i++) {
    if (!(FIO[i] >= 'a' && FIO[i] <= 'z' || FIO[i] >= 'A' && FIO[i] <= 'Z') && FIO[i] != ' ' && FIO[i] != '.' && !(FIO[i] >= 'а' && FIO[i] <= 'я' || FIO[i] >= 'А' && FIO[i] <= 'Я')) {
        valid = false;
        break;
    } else if (FIO[i] >= 0 && FIO[i] != ' ' && FIO[i] != '.') {
        valid = false;
        break;
    }
}

if (!valid) {
    alert("Вы ввели недопустимый символ!");

} else {
    alert("Правильный ввод!");
    document.write("<br><br>");
    document.write('Ваше имя: ' + FIO);
}
document.write("<br><br>");


//3
let urlAddress = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
let protocol = "";
let host = "";
let path = "";
let nameFile = "";
let queryString = "";

for (let i = 0; i <= urlAddress.indexOf(":"); i++)
    protocol += urlAddress[i];
for (let i = urlAddress.indexOf(":") + 3; i < urlAddress.indexOf('/', (urlAddress.indexOf(":") + 3)); i++)
    host += urlAddress[i];
for (let i = urlAddress.indexOf('/', (urlAddress.indexOf(":") + 3)); i < urlAddress.lastIndexOf("/"); i++)
    path += urlAddress[i];

if (urlAddress.lastIndexOf("?") == -1)
    for (let i = urlAddress.lastIndexOf("/") + 1; i < urlAddress.length; i++)
        nameFile += urlAddress[i];
else {
    for (let i = urlAddress.lastIndexOf("/") + 1; i < urlAddress.indexOf("?"); i++)
        nameFile += urlAddress[i];
    for (let i = urlAddress.indexOf("?") + 1; i < urlAddress.length; i++)
        queryString += urlAddress[i];
}

document.write(`URL: ${urlAddress}<br><br>`);
document.write(`Протокол: ${protocol}<br>`);
document.write(`Хост: ${host}<br>`);
document.write(`Путь: ${path == "" ? "Отсутствует" : path}<br>`);
document.write(`Имя файла: ${nameFile}<br>`);
document.write(`Строка запроса: ${queryString == "" ? "Отсутствует" : queryString}<br>`);
document.write("<br><br>");


//2 1
function mergeUnique(a, b) {
    let rez = [];
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j])
                break;

            if (j == b.length - 1)
                rez[count++] = a[i];
        }
    }

    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < rez.length; j++) {
            if (b[i] == rez[j])
                break;
            if (j == rez.length - 1)
                rez[count++] = b[i];
        }
    }

    return rez;
}


//2 2
function mergeArraysUniqueIntersection(a, b) {
    let rez = [];
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                rez[count++] = a[i];
                break;
            }
        }
    }

    return rez;
}


//2 3
function getUniqueElements(a, b) {
    let rez = [];
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j])
                break;
            if (j == b.length - 1)
                rez[count++] = a[i];
        }
    }

    return rez;
}

let a = [2, 5, 7, 0, 8];
let b = [7, 0, 3, 4, 7];

let rez = mergeUnique(a, b);
console.log(rez);

rez = mergeArraysUniqueIntersection(a, b);
console.log(rez);

rez = getUniqueElements(a, b);
console.log(rez);


//3 1
let fruits = ["apple", "orange", "banana", "raspberry"];
fruits.sort();

document.write("<ul>");
for (let i = 0; i < fruits.length; i++)
    document.write(`<li>${fruits[i]}</li>`);
document.write("</ul>");


//3 2
for (let i = 0; i < fruits.length; i++)
    fruits[i].toLowerCase();

let indexFruits = fruits.indexOf("orange");
console.log(fruits);

if (indexFruits != -1)
    console.log(`Индекс ${fruits[indexFruits]} = ${indexFruits}`);
else
    console.log("Фрукт не найден!");
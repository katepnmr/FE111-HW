// Задание 1

for (let i = 1; i <= 50; i++) {
    console.log(i);
}
for (let i = 35; i >= 8; i--) {
    console.log(i);
}

// Задание 2

let n = 11;
while(n <= 89) {
    document.write(n + '<br>');
    n++;
}

// Задание 3

let sum = 0;

for(let a = 0; a <= 100; a++) {
    console.log(sum += a);
}

//  Задание 4 

let d = 0;
for (let b = 1; b <= 5; b++) {
    for (let c = 1; c <= b; c++) {
        d += c;
    }
    console.log(d);
}

// Задание 5

for(let a = 8; a <= 56; a++) {
    if(a % 2 == 0) {
    document.write(a + '<br>');
    }
}

// Задание 6 

for(let num = 2; num <=10; num++) {
    for(let grade = 1; grade <=10; grade++){
        document.write(num  + '*' + grade + '=' + num * grade + '<br>');
    }
}

// Задание 7

let num = 0,
    a = 1000;

while (a >= 50) {
    a /= 2;
    num++;
}
  
// Задание 10

let z = prompt(`Введите число`);

document.write('Число: ' + z + '<br>');

// a.
let string = '' + z;

// b.
let count = 0;

// c.
let summa = 0;


for(let x = 0; x < string.length; x++) {
    console.log(string[x]);
    count++;
    summa += +string[x];
}

document.write('Цифр в числе: ' + count + '<br>');
document.write('Сумма цифр в числе: ' + summa + '<br>');

// d.

let reverse;

for(let x = string.length-1; x >= 0; x--) {
   if (reverse === undefined) reverse = '';
   reverse += string[x];
}

document.write('Обратный порядок: ' + reverse);
// Un callback es una función que recibe como argumento otra función
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

setTimeout(function () {
    console.log('Hola JavaScript');
}, 5000);

function gretting(name) {
    return console.log(`Hola ${name}`);
}

setTimeout(gretting, 3000, 'Sergio');
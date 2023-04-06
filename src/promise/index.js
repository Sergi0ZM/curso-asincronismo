/* Una promesa tiene 3 estados:
1. pendiente, cuando se esta ejecutando
2. cumplido, ha regresado la información deseada
3. rechazado */

const promise = new Promise(function (resolve, reject) {
    resolve('Hey!')
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('There is no enough cows on the farm')
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));
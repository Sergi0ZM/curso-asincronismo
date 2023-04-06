const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!'), 2000)
            : reject(new Error('Error'));
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!'); // Para que el Hello sea mostrado tiene que esperar que la función fnAsync retorne un resolve o un reject, por eso es motrado de ultimo
}

console.log('Before'); // Primero se lee esto, por eso aparece de primero
anotherFn(); // En seguido este llamado a la función que espera 2 segundos a que el resolve retorne
console.log('After'); // Como hay que esperar 2 segundos, este log es mostrado de segundas ya que no tiene que esperar a que una tarea termine para ejecutar otra, por eso es motrado de segundo
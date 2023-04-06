import fetch from 'node-fetch'; // Fetch permite hacer peticiones HTTP asincronas
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi); // Devuelve una promesa a la cual se le pueden aplicar los metodos normales de las promesas 
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`) // GET de todos los productos
    .then(response => response.json()) // Convertir a formato JSON
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`) // GET de un solo producto por ID
    })
    .then(response => response.json()) // Convertir a formato JSON
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`) // GET de producto por categoria
    })
    .then(response => response.json()) // Comvertir a formato JSON
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'))
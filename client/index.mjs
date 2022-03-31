import axios from "axios"

let url = 'http://localhost:3000/products'

function getProducts() {
    axios.get(url).then(function (response) {
        console.log(`\n#getProducts : `)
        console.log(response.data)
    }).catch(function (error) {
        console.error(error)
    })
}

function addProduct() {
    const name = "pêche"
    const quantity = 12
    axios.post(url, {
        name: name,
        quantity: quantity
    }).then(function () {
        console.log(`\n#addProduct : `)
        console.log(`${quantity} ${name} ajouté(e)(s)`)
    }).catch(function (error) {
        console.error(error)
    })
}

async function getProductsAsync() {
    try {
        const response = await axios.get(url)
        console.log(`\n#getProductsAsync : `)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

//IIFE Immediatly Invoked Function Expression : appelle dans l'ordre et en asynchrone les fonctions
(async () => {
    getProducts();
    addProduct();
    getProductsAsync();
})()
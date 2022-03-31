import axios from "axios"

let url = 'http://localhost:3000/products'

function getProducts() {
    axios.get(url).then(function (response) {
        console.log(response.data)
    }).catch(function (error) {
        console.error(error)
    })
}

function addProduct() {
    axios.post(url, {
        name: "pêche",
        quantity: 12
    }).then(function (response) {
        console.log(response.data)
    }).catch(function (error) {
        console.error(error)
    })
}

addProduct()
getProducts()



//IIFE
/*
(async()=>{

})()
*/
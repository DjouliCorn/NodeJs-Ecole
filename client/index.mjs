import axios from "axios"

let url = 'http://localhost:3000/products'

function getProducts() {
    axios.get(url).then(function (response) {
        console.log("getProducts :")
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
        console.log("addProducts :")
        console.log(response.data)
    }).catch(function (error) {
        console.error(error)
    })
}

async function getProductsAsync() {
    try {
        const response = await axios.get(url)
        console.log("getProductsAsync : ")
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

getProductsAsync()



//IIFE
/*
(async()=>{

})()
*/
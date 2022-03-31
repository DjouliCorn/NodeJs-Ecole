import axios from "axios"


function getProducts() {
    axios.get('http://localhost:3000/products').then(function (response) {
        console.log(response.data)
    }).catch(function (error) {
        console.error(error)
    })
}

getProducts()


//IIFE
/*
(async()=>{

})()
*/
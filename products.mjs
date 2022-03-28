const productArray = ["Banana", "Apple"];

/*module.exports = {
    add: function (product) {
        productArray.push(product);
    },

    getAll: function() {
        return Array.from(productArray);
    },
};*/

const add = (product) => {
    setTimeout(function(){
        productArray.push(product);
        console.log("Product added");
    }, 500);
};

const getAll = () => {
    return Array.from(productArray);
};

export {add, getAll};



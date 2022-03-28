const productArray = ["Banana", "Apple"];

module.exports = {
    add: function (product) {
        productArray.push(product);
    },

    getAll: function() {
        return Array.from(productArray);
    },
};




// this will be converted to models
const productArray = [
    {
        id: '1',
        name: 'Coffee',
        price: 3.99
    },
    {
        id: '2',
        name: 'Pikachu',
        price: 10.99
    },
    {
        id: '3',
        name: 'Bootcamp',
        price: 10000
    }
];

function getProductData (id) {
    let productData = productArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log('Product not found for id: ' + id);
        return undefined;
    }

    return productData;
};

export { productArray, getProductData };
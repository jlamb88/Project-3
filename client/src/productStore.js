const productArray = [
    {
        id: 'price_1M9Xq4A0zgGYE8hKjaEdjfu0',
        name: 'Large Cheesecake',
        price: 54.99,
        image: 'https://i.imgur.com/ZbDQmJm.png'
    },
    {
        id: 'price_1M9Xr4A0zgGYE8hK80wPnIya',
        name: 'Small Cheesecake',
        price: 29.99,
        image: 'https://i.imgur.com/bH5wiLs.png'
    },
    {
        id: 'price_1M9XsCA0zgGYE8hKq6tJKx6T',
        name: 'Strawberry Cheesecake',
        price: 59.99,
        image: 'https://i.imgur.com/SotYiMT.jpg'
    },
    {
        id: 'price_1M9XtRA0zgGYE8hK4ko4s0VO',
        name: 'Carrot Cake',
        price: 34.99,
        image: 'https://i.imgur.com/1rjD49H.png'
    },
    {
        id: 'price_1M9XuNA0zgGYE8hKdKyBhMEZ',
        name: 'Chocolate Chip Cookies',
        price: 6.99,
        image: 'https://i.imgur.com/11DsKcC.jpg'
    },
    {
        id: 'price_1M9XvJA0zgGYE8hKsRPAOjWn',
        name: 'Coffee',
        price: 4.99,
        image: 'https://i.imgur.com/RqWj8pD.jpg'
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
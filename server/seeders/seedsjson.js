
seedUser = () => {
    return [
        {
            "firstName": "John",
            "lastName": "Lane",
            "streetAddress": "1001 Main St",
            "city": "Atlanta",
            "state": "GA",
            "zipcode": "30318",
            "phone": "4045551212",
            "email": "jlane@dummy.com",
            "password": "test1234",
            "payment": [
                {
                    "cardType": "VISA",
                    "cardNumber": 4444222233335555,
                    "expiration": "12/23",
                    "default": true
                }
            ]
        },
        {
            "firstName": "Marge",
            "lastName": "Simpson",
            "streetAddress": "2002 Broad St",
            "city": "Spingfield",
            "state": "KY",
            "zipcode": "81200",
            "email": "bluehair@dummy.com",
            "password": "bartlisa123"
        }
    ]
}

seedProduct = () => {
    return [
        {
            "name": "Standard plain cheesecake",
            "description": "Handmade 14 inch plain cheesecake with shortbread crust",
            "price": "50",
            "stock": "10",
            "allergens": [
                "eggs",
                "milk"
            ],
            "comments": [
                {
                    "name": "Marge",
                    "text": "This was the best cheesecake I have ever had! So rich, creamy and delicious.",
                    "rating": 5
                },
                {
                    "name": "John",
                    "text": "I order these cheesecakes every special occassion. They are absolutely the best! All or their baked goods are delicious",
                    "rating": 5
                }
            ]
        },
        {
            "name": "Mini plain cheesecake",
            "description": "Handmade 8 inch plain cheesecake with shortbread crust",
            "price": 30,
            "stock": 8,
            "allergens": [
                "eggs",
                "milk"
            ],
            "comments": [
                {
                    "name": "Alice",
                    "text": "These are so great for small gatherings!",
                    "rating": 5
                },
                {
                    "name": "Brandi",
                    "text": "Ordered this for a bridal shower. It was pretty good but maybe a little pricy for an everyday occassion",
                    "rating": 4
                }
            ]
        },
        {
            "name": "Standard cherry cheesecake",
            "description": "Handmade 14 inch cheesecake with fresh cherry topping and shortbread crust",
            "price": 60,
            "stock": 12
        },
        {
            "name": "Carrot cake",
            "description": "Handmade 10 inch, four layer carrot cake with cream cheese frosting and topped with chopped walnuts",
            "price": 35,
            "stock": 5
        },
        {
            "name": "Hummingbird cake",
            "description": "Classic cake that is a southern tradition. Handmade 10 inch, four layer hummingbird cake with cream cheese frosting",
            "price": 35,
            "stock": 5
        },
        {
            "name": "Chocolate hazelnut crepe cake",
            "description": "Elegant and light crepe cake with 18 crepe layers filled with hazelnut pastry cream and topped with chocolate ganache",
            "price": 40,
            "stock": 4,
            "comments": [
                {
                    "name": "Jason",
                    "text": "So elegant and delicious. It's like eating an amazing eclair in cake form",
                    "rating": 5
                }
            ]
        },
        {
            "name": "Meyer lemon square",
            "description": "Six lemon squares with meyer lemon and cardamom curd",
            "price": 12,
            "stock": 36,
            "comments": [
                {
                    "name": "Harriet",
                    "text": "Delightful and refreshing lemon squares with an exotic twist from the cardamom",
                    "rating": 4
                }
            ]
        }
    ]
}

module.exports = { seedUser, seedProduct }
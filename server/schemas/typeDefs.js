const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    streetAddress: String
    city: String
    state: String
    phone: Float
    email: String
    password: String
    payment: [Payment]
}

type Payment {
    cardType: cardTypeEnum
    cardNumber: Float
    expiration: String
    default: Boolean
}

enum cardTypeEnum {
    VISA
    MASTERCARD
    AMERICAN EXPRESS
    DISCOVER
}

type Product {
    _id: ID
    name: String
    description: String
    price: Int
    quantity: Int
    allergens: [String]
    comments: [Comment]
}

type Order {
    _id: ID
    total: Int
    user: [User]
    products: [Product]
    orderedAt: String
    transId: Int
}

type Comment {
    name: String
    text: String
    rating: Int
    dateAdded: String
}

type Cart {
    user: [User]
    product: [Product]
    quantity: Int
}

type Auth {
    token: ID!
    user: User
}

type Checkout {
    transId: ID
}

input userPayment {
    _id: ID
    cardType: cardTypeEnum!
    cardNumber: Float!
    expiration: String!
    default: Boolean
}

type Query {
    user(_id: ID!): User
    users: [User]
    products: [Product]
    product(_id: ID!): Product
    order(userId: ID!): Order
    cart(userId: ID!): Cart
    checkout(products: [ID]!): Checkout
}

type Mutation {
    login(email: String!, password: String!): Auth

    addUser(
        firstName: String 
        lastName: String
        streetAddress: String
        city: String
        state: String
        zipcode: Int
        phone: Float
        email: String!
        password: String!
        ): User
  
    addOrder(
        userId: ID, 
        products: [ID]!, 
        total:Int, 
        transId: Int): Order
  
    updateUser(
        firstName: String
        lastName: String
        streetAddress: String
        city: String
        state: String
        zipcode: Int
        phone: Int
        email: String!
        password: String!
        ):User

    addPayment(
        content: userPayment
    ):User
   
    updatePayment(
        _id:ID!, content: userPayment

    ):User
    
    deletePayment(_id:ID!, payId:ID!):User
    
    addComment(
        _id:ID!
        name: String!
        text: String!
        rating: Int
        ):Product
   
    addCart(
        userId: ID!
        product: [ID]!
        quantity: Int
    ):Cart

    updateCartItems(
        userID: ID!
        productID: ID!
        quantity: Int
    ):Cart
    
    deleteCartItem(
        userID: ID!
        productID: ID!
    ):Cart

}`


module.exports = typeDefs
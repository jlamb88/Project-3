const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    address: String
    city: String
    state: String
    phone: Int
    email: String
    password: String
    payment: [Payment]
}

type Payment {
    cardType: cardTypeEnum
    cardNumber: Int
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
    orderedAt: DateTime
    transId: Int
}

type Comment {
    text: String
    rating: Int
}

type Cart {
    user: ID!
    product: [Product]
    quantity: Int
}

type Auth {
    token: ID!
    user: User
}

# STRIPE checkout type
type Checkout {
    transId: ID
}

input userPayment {
    _id: ID
    cardType: cardTypeEnum!
    cardNumber: Int!
    expiration: String!
    default: Boolean
}

type Query {
    user(_id: ID!): User
    products: [Product]!
    product(_id: ID!): Product
    order(userId: ID!): Order
    cart(userId: ID!): Cart
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
        firstName: String
        lastName: String
        address: String
        state: String
        zipcode: Int
        phone: Int
        email: String!
        password: String!): User
    addOrder(userId: ID, products: [ID]!, total:Int, transId): Order
    updateUser(
        firstName: String
        lastName: String
        address: String
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
        content: userPayment
    ):User
    deletePayment(_id:ID!, payId:ID!):User
    addComment(
        _id:ID!
        text: String!
        rating: Int
        ):Product
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
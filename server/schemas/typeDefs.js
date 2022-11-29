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
    cardType: String
    cardNumber: Int
    expiration: String
    cvcNo: Int
    default: Boolean
}

type Product {
    _id: ID
    name: String
    description: String
    price: Int
    quantity: Int
    allergens: [String]
    comment: [Comment]
}

type Order {
    _id: ID
    total: Int
    user: [User]
    products: [Product]
    orderedAt: String
    transID: Int
}

type Comment {
    text: String
    rating: Int
    productId: ID
}

type Query {
    user(userID: ID!): User
    products: [Product]!
    product(productId: ID!): Product
    order(userId: ID!): Order
}
`
module.exports = typeDefs
import { gql } from '@apollo/client'

export const PRODUCTS = gql`
query products {
    products {
      _id
      name
      description
      price
      quantity
      allergens
      comments {
        name
        text
        rating
        dateAdded
      }
    }
  }`

export const ONE_PRODUCT = gql`
query oneProduct($id: ID!) {
    product(_id: $id) {
      _id
      name
      description
      price
      quantity
      allergens
      comments {
        name
        text
        rating
        dateAdded
      }
    }
  }`

export const USER = gql`
query oneUser($id: ID!) {
    user(_id: $id) {
      _id
      firstName
      lastName
      streetAddress
      city
      state
      phone
      email
      password
      payment {
        cardType
        cardNumber
        expiration
        default
      }
    }
  }`

  export const ME = gql`
  query oneUser($id: ID!) {
      user(_id: $id) {
        _id
        firstName
        lastName
        streetAddress
        city
        state
        phone
        email
        password
        payment {
          cardType
          cardNumber
          expiration
          default
        }
      }
    }`
  
  
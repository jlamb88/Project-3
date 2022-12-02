import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!)  {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
}`

export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $streetAddress: String!, $city: String!, $state: String!, $zipcode: Int!, $phone: Int!) {
    addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, streetAddress: $streetAddress, city: $city, state: $state, zipcode: $zipcode, phone: $phone) {
      token
      user {
        _id
      }
    }
  }
`
// changed userId to id, as in product, for testing
export const CHECKOUT = gql`
mutation addCart($id: String!, $quantity: Int) {
  addCart(userId: $id, quantity: $quantity) {
    cart
  }
}`
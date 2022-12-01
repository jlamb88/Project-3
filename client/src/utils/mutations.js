import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!)  {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
}`

export const ADD_USER = gql`
mutation AddUser($email: String!, $password: String!, $firstName: String, $lastName: String, $streetAddress: String, $city: String, $state: String, $zipcode: Int, $phone: Float) {
    addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, streetAddress: $streetAddress, city: $city, state: $state, zipcode: $zipcode, phone: $phone) {
      token
      user {
        _id
      }
    }
  }
`

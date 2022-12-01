import {gql} from '@apollo/client'
// , useQuerey

const GET_USER = gql`
    query GetUser{
        user{
            first_name
            lastName
            street_address
            city
            state
            zipcode
            email
            password
            payment[{
                card_type
                card_number
                expiration
                cvc_no
                default
            }]
        }
    }`

export default GET_USER
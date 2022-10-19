const { gql } = require('apollo-server')
// user_name  user_password

module.exports = gql`
    type Users {
        id: ID!
        user_name: String!
        user_password: Int!
    }

    extend type Query {
        users: [ Users ]!
    }
`
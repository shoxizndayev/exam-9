const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        id: ID!
        user_name: String!
        user_password: Int!
    }

    extend type Query {
        user: [ User ]!
    }

    extend type Mutation {
        login(user_name: String! user_password: Int!): String
    }
`
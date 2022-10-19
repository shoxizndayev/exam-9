const { gql } = require('apollo-server')

module.exports = gql`
    type Banks {
        id: ID!
        bank_name: String!
        cash_limit: Int!
        duration: Int!
        starting_pay: Int!
    }

    extend type Query {
        banks: [ Banks ]!
    }

    extend type Mutation {
        newBank(bank_name: String!, cash_limit: Int!, duration: Int!, starting_pay: Int!): Banks
    }
`
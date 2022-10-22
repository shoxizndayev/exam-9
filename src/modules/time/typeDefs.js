const { gql } = require('apollo-server')

module.exports = gql`
    type Paytime {
        id: ID!
        pay_time: Int!
        
    }

    extend type Query {
        paytime: [ Paytime ]!
    }
`
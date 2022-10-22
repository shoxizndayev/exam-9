const { gql } = require('apollo-server')

module.exports = gql`
    type Calculator {
        house_price: Int!
        starting_pay: Int!
        month_pay: Int!
        bank_servis: Int!
        pay_duration: Int!
        bank: Banks
    }

    extend type Query {
        calculator(room_id: ID!, pay_time: Int!): Calculator!
    }
`
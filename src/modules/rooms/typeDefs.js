const { gql } = require('apollo-server')

module.exports = gql`
    type Rooms {
        id: ID!
        rooms_value: Int!
        size: Int!
    }

    extend type Query {
        rooms( byProject: ID! ): [ Rooms ]!
    }

    extend type Mutation {
        newRoom( rooms_value: Int!, size: Int!, project_id: ID! ): Rooms
    }
`
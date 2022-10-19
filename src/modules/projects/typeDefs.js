const { gql } = require('apollo-server')

module.exports = gql`
    type Projects {
        id: ID!
        projects_name: String!
        price_kv: Int!
        project_location: String!
        rooms: [ Rooms ]
    }

    extend type Query {
        projects(company: ID!): [ Projects ]!
    }

    extend type Mutation {
        newProject( projects_name: String!, price_kv: Int!, project_location: String!, company_id: ID! ): Projects
    }
`
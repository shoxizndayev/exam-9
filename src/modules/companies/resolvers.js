const model = require('./model')
const projectsModel = require('../projects/model')
const { UserInputError } = require('apollo-server')

module.exports = {
    Query: {
        company: async() => {
            try {
                let company = await model.allCompany()
                return company
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        newCompany: async(_, {company_name}) => {
            try {
                let addCompany = await model.addCompany(company_name)
                return addCompany
            } catch (error) {
                console.log(error);
            }
        }
    },
    Company: {
        id: g => g.id,
        company_name: g => g.company_name,
        projects: async g => await projectsModel.byCategory(g.id)
    }
}
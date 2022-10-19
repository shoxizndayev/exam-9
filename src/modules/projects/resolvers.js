const model = require('./model')
const roomsModel = require('../rooms/model')

module.exports = {
    Query: {
        projects: async() => {
            try {
                let project = await model.allProjects()
                return project
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        newProject: async(_, { projects_name, price_kv, project_location, company_id }) => {
            try {
                let addProject = await model.addProject(projects_name, price_kv, project_location, company_id)
                return addProject
            } catch (error) {
                console.log(error);
            }
        }
    },
    Projects: {
        id:  g => g.id,
        projects_name: g => g.projects_name,
        price_kv: g => g.price_kv,
        project_location: g => g.project_location,
        rooms: async g => await roomsModel.byProject(g.id)
    }

}
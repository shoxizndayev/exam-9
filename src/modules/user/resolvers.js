const model = require('./model')

module.exports = {
    Query: {
        users: async() => {
            try {
                let project = await model.allProjects()
                return project
            } catch (error) {
                console.log(error);
            }
        }
    },
    
}
const { AuthenticationError } = require('apollo-server');
const model = require('./model')
const { sign } = require('../../utils/jwt')

module.exports = {
    Query: {
        user: async() => {
            try {
                let user = await model.allUsers()
                return user
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        login: async(_, { user_name, user_password }) => {
            try {
                const foundUser = await model.Login(user_name, user_password)

                if (!foundUser) {
                    return new AuthenticationError("Unauthorized")
                }

                return sign({ id: foundUser.id})

            } catch (error) {
                console.log(error);
            }
        }
    }
    
}
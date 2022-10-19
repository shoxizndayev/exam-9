const model = require('./model')

module.exports = {
    Query: {
        rooms: async() => {
            try {
                let gwtRoom = await model.allRooms()
                return gwtRoom
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        newRoom: async(_, { rooms_value, size, project_id }) => {
            try {
                let addRoom = await model.addRoom(rooms_value, size, project_id)
                return addRoom
            } catch (error) {
                console.log(error);
            }
        }
    }

}
const model = require('./model')

module.exports = {
    Query: {
        paytime: async() => {
            try {
                let getPaytime = await model.allPaytime()
                return getPaytime
            } catch (error) {
                console.log(error);
            }
        }
    }
}
const model = require('./model')

module.exports = {
    Query: {
        banks: async() => {
            try {
                let getBanks = await model.allBanks()
                return getBanks
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        newBank: async(_, { bank_name, cash_limit, duration, starting_pay }) => {
            try {
                let addBank = await model.addBank( bank_name, cash_limit, duration, starting_pay )
                return addBank
            } catch (error) {
                console.log(error);
            }
        }
    }

}
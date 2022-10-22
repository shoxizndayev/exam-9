const { UserInputError } = require('apollo-server')
const model = require('./model')

module.exports = {
    Query: {
        calculator: async(_, {room_id, pay_time}) => {
            try {
                let project = await model.getCalculator(room_id, pay_time)
                if (!project) {
                    return new UserInputError("Hato kiritiz")
                }
                return project
            } catch (error) {
                console.log(error);
            }
        }
    },
    Calculator: {
        house_price: ( parent ) => parent.calculating.summa,
        starting_pay: (parent ) => parent.calculating.starting,
        month_pay: ( parent ) => parent.calculating.monthly,
        bank_servis: (parent) => parent.calculating.bank_servis,
        pay_duration: ( parent ) => parent.bank.pay_time
    }
    
}
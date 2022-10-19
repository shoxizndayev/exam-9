const { fetch, fetchData} = require('../../utils/postgres')

const allBanks = () => {
    return fetchData('SELECT * FROM banks')
}

const addBank = (bank_name, cash_limit, duration, starting_pay) => {
    return fetch(' insert into banks( bank_name, cash_limit, duration, starting_pay ) values($1, $2, $3, $4) returning *', bank_name, cash_limit, duration, starting_pay )
}

module.exports = {
    allBanks,
    addBank
}
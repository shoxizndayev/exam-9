const { fetch, fetchData} = require('../../utils/postgres')

const allPaytime = () => {
    return fetchData('SELECT * FROM pay_time')
}

module.exports = {
    allPaytime
}
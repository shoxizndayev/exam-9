const { fetch, fetchData} = require('../../utils/postgres')

const addCompany = (company_name) => {
    return  fetch('insert into company(company_name) values($1)', company_name)
}

module.exports = {
    addCompany
}
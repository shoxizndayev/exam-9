const { fetch, fetchData} = require('../../utils/postgres')

const allCompany = () => {
    return  fetchData('SELECT * FROM company')
}

const addCompany = (company_name) => {
    return  fetch('insert into company(company_name) values($1) returning *', company_name)
}

module.exports = {
    allCompany,
    addCompany
}
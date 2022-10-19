const { fetch, fetchData} = require('../../utils/postgres')

const allProjects = () => {
    return  fetchData('SELECT * FROM projects')
}

const byCategory = (company_id) => {
    return fetchData(' select * from projects where company_id = $1', company_id)
}

const addProject = (projects_name, price_kv, project_location, company_id) => {
    return fetch(' insert into projects( projects_name, price_kv, project_location, company_id ) values($1, $2, $3, $4) RETURNING *', projects_name, price_kv, project_location, company_id )
}

module.exports = {
    allProjects,
    addProject,
    byCategory
}
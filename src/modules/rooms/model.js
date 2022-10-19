const { fetch, fetchData} = require('../../utils/postgres')

const allRooms = () => {
    return  fetchData('SELECT * FROM rooms')
}

const byProject = (project_id) => {
    return  fetchData('select * from rooms where project_id = $1', project_id)
}

const addRoom = (rooms_value, size, project_id) => {
    return fetch(' insert into rooms( rooms_value, size, project_id ) values($1, $2, $3) returning *', rooms_value, size, project_id )
}

module.exports = {
    allRooms,
    byProject,
    addRoom
}
const { fetch, fetchData} = require('../../utils/postgres')

const allUsers = () => {
    return  fetchData('select * from users')
}

const Login = (user_name, user_password) => {
    return fetch('select * from users where user_name = $1 and user_password = $2', user_name, user_password)
}

module.exports = {
    allUsers,
    Login
}
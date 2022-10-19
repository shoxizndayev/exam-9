const { ApolloServer } = require('apollo-server')
const modules = require('./modules')
const PORT = 5000 || process.env.PORT

const server = new ApolloServer({
    modules
})

server.listen(PORT, console.log(5000))
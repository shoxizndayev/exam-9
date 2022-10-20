const { ApolloServer } = require('apollo-server')
const modules = require('./modules')
const PORT = process.env.PORT || 5000

const server = new ApolloServer({
    modules
})

server.listen(PORT, console.log(5000))

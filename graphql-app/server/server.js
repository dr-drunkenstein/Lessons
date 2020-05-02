const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:Q52265643q.@cluster0-m0tvm.gcp.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('DB')
})
const PORT = process.env.PORT || 4000
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))

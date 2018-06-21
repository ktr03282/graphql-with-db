const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {
  graphqlExpress,
  graphiqlExpress
} = require("apollo-server-express")

const {
  makeExecutableSchema
} = require("graphql-tools")

const fs = require('fs')
const path = require('path')

const typeDefs = fs.readFileSync(path.resolve(__dirname, 'schema/typeDefs.graphql'), 'utf-8')
const resolvers = require('./schema/resolvers')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
}

app.use('/graphql',
  bodyParser.json(),
  cors(corsOptions),
  graphqlExpress({
    schema
  })
)

// use graphiql
app.use("/graphiql", graphiqlExpress({
  endpointURL: "/graphql"
}))

app.listen(4000, () => {
  console.log("Go to http://localhost:4000/graphiql to run queries!");
})

module.exports = app

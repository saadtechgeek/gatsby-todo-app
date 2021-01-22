const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    allTodo: [TODO!]
  }
  type TODO {
    id: ID!
    name: String!
    completed: Boolean!
  }
`

const todo = [
  { id: 1, name: 'Task 1', completed: false },
  { id: 2, name: 'Task 2', completed: true },
  { id: 3, name: 'Task 3', completed: false },
]

const resolvers = {
  Query: {
    allTodo: () => {
      return todo
    }
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()

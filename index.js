// ApolloServer for GraphQL
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// types
import { typeDefs } from "./schema.js";

// db
import db from "./_db.js"
const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        }
    }
}

/*
games {
    title
}
*/

// server setup
const server = new ApolloServer({
    typeDefs, // typeDefs - Definition of types of data
    resolvers // resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(url)
console.log('Server ready at port', 4000)

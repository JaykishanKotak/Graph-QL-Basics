import express from 'express'
import resolvers from './resolvers/resolvers';
import schema from './schema/schema';
import {
    graphqlHTTP
} from 'express-graphql'

const app = express();

app.get("/", (req, res) => {
    res.send("GraphQL Server Is Up and Running")
});

//Work with graphql
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

const root = resolvers;

const PORT = 8000;

app.listen(PORT, () => console.log(`App is running on Port{PORT}`))
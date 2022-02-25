const express = require("express")
const { ApolloServer } = require("apollo-server-express")

const mongoose =("mongoose")


const app = express();
const PORT = process.env.PORT || 5000;
const { typeDefs, resolvers } = require("./schemas")

//Apollo server start
const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();

    console.log(`use graphql at localhost:${PORT}${server.graphqlPath}`);
}

const db = require("./config/connection");
startServer();

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
    });
});

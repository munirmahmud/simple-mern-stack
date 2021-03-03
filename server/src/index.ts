import { ApolloServer } from "apollo-server-express";
import express from "express";
const app = express();
const port = 9000;

const server = new ApolloServer({});
server.applyMiddleware({ app, path: "/api" });

app.get("/", (_req, res) => res.send("Home Page"));

app.listen(port, () => console.log(`Server started http://localhost:${port}`));

require("dotenv").config();

import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import { connectDatabase } from "./database";
import { resolvers, typeDefs } from "./graphql";
const app = express();
const PORT = process.env.PORT;

const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app, path: "/api" });

  app.get("/", (_req, res) => res.send("Home Page"));

  app.listen(PORT, () =>
    console.log(`Server started http://localhost:${PORT}`)
  );

  const listings = await db.listings.find({}).toArray();
  console.log(listings);
};

mount(express());

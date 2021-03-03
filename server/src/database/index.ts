import { MongoClient } from "mongodb";
import { Database } from "../lib/types";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER}.8vnfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = (await client).db(process.env.DB_NAME);

  return {
    listings: db.collection("test_listings"),
  };
};

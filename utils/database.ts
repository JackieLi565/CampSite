import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URL as string);

const connect = async () => {
  await client.connect();
  const db = client.db("users");
  return { db };
};

export default connect;

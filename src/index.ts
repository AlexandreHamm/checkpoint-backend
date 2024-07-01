import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { PaysResolver } from "./resolvers/PaysResolver";
import { AppDataSource } from "./ormconfig";
import { startStandaloneServer } from "@apollo/server/standalone";

async function startServer() {
  await AppDataSource.initialize();
  const schema = await buildSchema({
    resolvers: [PaysResolver],
  });

  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server);
  console.log(`Server ready at ${url}`);
}

startServer();
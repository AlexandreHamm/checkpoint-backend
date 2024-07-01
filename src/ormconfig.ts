import { DataSource } from "typeorm";
import { Pays } from "./entities/Pays.ts";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: [Pays],
});
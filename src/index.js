import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

import categoriesRoute from "./routes/categoriesRoute.js";
import gameRoute from "./routes/gameRouter.js";
import customersRoute from "./routes/customersRoute.js";
import rentalsRoute from './routes/rentalsRoute.js';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;

//=== Routes
server.use(categoriesRoute);
server.use(gameRoute);
server.use(customersRoute);
server.use(rentalsRoute)

openServer();


//=== Functions
function openServer() {
  server.listen(PORT, () => {
    console.info(chalk.bold.yellow("Servidor iniciado na porta: " + PORT));
  });
}

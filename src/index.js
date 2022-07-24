import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.info(chalk.bold.yellow("Servidor iniciado na porta: " + PORT));
});

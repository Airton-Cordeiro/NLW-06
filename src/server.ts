import "reflect-metadata"
import express from "express";

const app = express();
import "./database"

app.listen(3000, () => console.log("-- servidor rodando na porta 3000 --"))
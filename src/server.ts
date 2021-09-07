import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "./database";
import { router } from "./routes";
import {AppError} from "./errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// @ts-ignore
app.use((err: Error, request: Request, response:Response, next:NextFunction) => {
  if (err instanceof AppError) {
    // @ts-ignore
    return response.status(err.statusCode).json({ message: err.message})
  }
  // @ts-ignore
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
})
app.listen(3333, () => console.log("Server is running!"));

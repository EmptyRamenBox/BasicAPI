// dotenv recommends to start the process as soon as possible

import "./helpers/dotenv";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "express-pino-logger";

// Error Handler
import { notFound, errorHandler } from "./helpers/errors";
import { anonOperationNotAloneMessage } from "graphql/validation/rules/LoneAnonymousOperation";

const app = express();
// All environment variables are always to be strings
//      We must do "parseInt", to parse the output
const port = parseInt(process.env.PORT);

// Security Feature Implemented
app.use(cors({ origin: process.env.ORIGIN }));
// origin option: "filter by the source"
app.use(helmet());
app.use(pino());
app.use(express.json()); // Allow express to use JSON in the body

// GET Request/Response
app.use("/", (req, res) => {
  res.json({ msg: "Hello There", type: req.method });
});
app.use(notFound); // NotFound handler
app.use(errorHandler); // Error handler
app.listen(port);

// The API that respondes with "Hello There" is ready
// Express is simple to use

// Extra Step: Postman
// In order to test APIs
// Specify different methods to test with API

// Extra Step: Insomnia API
// Another one to test API

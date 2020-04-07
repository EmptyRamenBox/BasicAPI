// dotenv recommends to start the process as soon as possible

import "./helpers/dotenv";

import express from "express";

const app = express();
// All environment variables are always to be strings
//      We must do "parseInt", to parse the output
const port = parseInt(process.env.PORT);

// doing request to the root only
// not to any other places
app.get("/", (req, res) => {
  //   res.send("Hello There");
  res.json({ msg: "Hello There" });
});
app.listen(port);

// The API that respondes with "Hello There" is ready
// Express is simple to use

// Extra Step: Postman
// In order to test APIs
// Specify different methods to test with API

// Extra Step: Insomnia API
// Another one to test API

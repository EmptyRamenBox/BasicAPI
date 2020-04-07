import express from "express";

const app = express();
const port = 3000;

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

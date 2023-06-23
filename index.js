const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const destinations = require("./data/destinations.json");

app.get("/", (req, res) => {
  res.send("Hello Travel Guru !!!");
});

app.get("/destinations", (req, res) => {
  res.send(destinations);
});

app.get("/destinations/:id", (req, res) => {
  const id = req.params.id;
  const specificDestination = destinations.find(
    (destination) => destination.id == id
  );
  res.send(specificDestination);
});

app.listen(port, () => {
  console.log(`Travel guru server is listening on port: ${port}`);
});

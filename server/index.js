const express = require("express");
const massive = require("massive");
const app = express();
const controller = require('./controller');

require("dotenv").config();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database is Connected");
  })
  .catch(err => console.error(err));

app.post("/api/pt2/house", controller.create);
app.get("/api/inventory/:id", controller.readOne);
app.get("/api/pt2/houses", controller.readAll);
app.put("/api/inventory/:id", controller.updateItem);
app.delete("/api/pt2/house/:id", controller.deleteItem);

  const port = SERVER_PORT || 6505
  app.listen(port, () => {
    console.log(`The server listening on port ${port}.`);
  });
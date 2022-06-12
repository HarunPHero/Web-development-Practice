const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Running my CRUD server");
});
//user:Database1
//pass:ZvZ3PkR7UAbEiGJ

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://Database1:ZvZ3PkR7UAbEiGJ@cluster0.8xr9vla.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("hitting to database")
  client.close();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

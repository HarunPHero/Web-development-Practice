const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

//use middleware
app.use(cors());
app.use(express.json());
//mongodb
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

//user:Database1
//pass:KVuzLnT8E7AMiO1r

const uri =
  "mongodb+srv://Database1:KVuzLnT8E7AMiO1r@cluster0.8xr9vla.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("userExpress").collection("user");

    //get user
    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    //add user
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("adding new user", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });
    //delete user
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const Delresult = await userCollection.deleteOne(query);
      res.send(Delresult);
    });
    //update user
    app.put('/user/:id', async(req, res) =>{
      const id = req.params.id;
      const updatedUser = req.body;
      const filter = {_id: ObjectId(id)};
      const options = { upsert: true };
      const updatedDoc = {
          $set: {
              name: updatedUser.name,
              email: updatedUser.email
          }
      };
      const result = await userCollection.updateOne(filter, updatedDoc, options);
      res.send(result);

  })
   
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const updateResult = await userCollection.findOne(query);
      res.send(updateResult);
    });
  } finally {
  }
}

run().catch();
app.get("/", (req, res) => {
  res.send("My name is Mamun");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://IndianaSwede:<password>@cluster0.snqniwx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("Lab1Database").collection("Lab1");
  console.log("Connection success")
  client.close();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(port, () => {
    console.log("Server started at http://localhost:" + port)
});


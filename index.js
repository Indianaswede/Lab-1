const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:3000/Lab1Database', (err, db) => {
  if (err) throw err

  db.collection('Lab1').find().toArray((err, result) => {
    if (err) throw err

    console.log(result)
  })
})

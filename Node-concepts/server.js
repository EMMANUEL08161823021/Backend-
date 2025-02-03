const express = require('express');
const app = express();

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Connection error:", err);
});

app.listen(3001, ()=> console.log('Server has started')) 
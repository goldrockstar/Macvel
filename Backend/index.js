const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

app.mongoose.connect('mongodb+srv://thangam:16201620@cluster0.nehs4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("DB Connected");
}).catch ((err) => {
    console.log(err);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});


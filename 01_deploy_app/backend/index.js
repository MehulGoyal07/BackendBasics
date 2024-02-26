// require("dotenv").config();
import 'dotenv/config';
import express from "express";

const app = express();

const port = 3000;

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id : 1,
            type : "First Joke",
            content : "This is a joke"
        },
        {
            id : 2,
            type : "Second Joke",
            content : "This is a joke"
        },
        {
            id : 3,
            type : "Third Joke",
            content : "This is a joke"
        },
        {
            id : 4,
            type : "Fourth Joke",
            content : "This is a joke"
        }
    ]
    res.send(jokes)
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
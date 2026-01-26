// IMPORTS
import express from "express";
import axios from "axios";

// CONSTS
const app = express();
const port = 3000;
const PRAYER_API = "";
const WEATHER_API = "";

// PUBLIC
app.use(express.static("public"));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/", (req, res) => {
    res.render("index.ejs");
});



// LISTEN
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
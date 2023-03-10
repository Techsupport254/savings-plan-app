const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./Routes/Routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
	console.log("Database connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);

app.get("/", (req, res) => {
    res.send("Welcome to Save Leo");
});

app.listen(4000, () => {
	console.log("Server is running on port 4000");
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const gamesRoutes = require("./src/game_collection/routes");

const app = express();
const port = 8003;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Hello world");
});

// API Route
app.use("/api/v1/game_collection", gamesRoutes);

app.listen(port, () => console.log(`running on ${port}`));
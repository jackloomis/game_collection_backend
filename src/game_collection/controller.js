const pool = require('../../db');
const queries = require('./queries');

// Controller: get all games
const getGames = (req, res) => {
    pool.query(queries.getGames,(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

// Controller: filters by game id
const getGamesById = (req, res) => {
    const id = req.params.id;

    if (isNaN(id)) {
        return res.status(400).json({error: "Invalid value format"});
    }
    console.log("Received gameId");

    pool.query(queries.getGamesById, [id], (error, results) => {
        if (error) {
            console.error("Database Error", error);
            return res.status(500).json({error: "ID not found"});
        }
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getGames,
    getGamesById
};
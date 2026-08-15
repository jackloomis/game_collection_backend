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
    const id = parseInt(req.params.id);

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
};

// Controller: add new game
const addNewGame = (req, res) => {
    const title = req.body.title;
    const genre = req.body.genre;
    const system_id = req.body.system_id;
    const status_id = req.body.status_id;
    const rating = req.body.rating;

    pool.query(queries.addNewGame, [title, system_id, status_id], (error, results) => {
        if (error) {
            console.error("Database Error", error);
            return res.status(500).json({error: "Adding game failed"});
        }
        res.status(201).json(results.rows);
    });
};

// Controller: modify game details
const updateGame = (req, res) => {
    const id = parseInt(req.params.id);
    const title = req.body.title;
    const genre = req.body.genre;
    const system_id = req.body.system_id;
    const status_id = req.body.status_id;
    const rating = req.body.rating;

    if (isNaN(id)) {
        return res.status(400).json({error: "Invalid ID format"});
    }

    pool.query(queries.updateGame, [title, genre, system_id, status_id, rating, id], (error, results) => {
        if (error) {
            console.error("Database Error", error);
            return res.status(500).json({error: "Updating game failed"});
        }
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getGames,
    getGamesById,
    addNewGame,
    updateGame,
};
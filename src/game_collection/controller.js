const pool = require('../../db');
const queries = require('./queries');

const getGames = (req, res) => {
    pool.query(queries.getGames,(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getGames,
};
const getGames = "SELECT * FROM games";
const getGamesById = "SELECT * FROM games WHERE id = $1";
const addNewGame = "INSERT INTO games(title, system_id, status_id) VALUES($1, $2, $3) RETURNING *";
const updateGame = "UPDATE games SET title = $1, genre = $2, system_id = $3, status_id = $4, rating = $5 WHERE id = $6 RETURNING *";

module.exports = {
    getGames,
    getGamesById,
    addNewGame,
    updateGame,
};
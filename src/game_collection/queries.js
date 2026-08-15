const getGames = "SELECT * FROM games";
const getGamesById = "SELECT * FROM games WHERE id = $1";
const addNewGame = "INSERT INTO games(title, system_id, status_id) VALUES($1, $2, $3) RETURNING *";

module.exports = {
    getGames,
    getGamesById,
    addNewGame,
};
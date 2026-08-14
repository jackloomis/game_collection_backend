const getGames = "SELECT * FROM games";
const getGamesById = "SELECT * FROM games WHERE id = $1";

module.exports = {
    getGames,
    getGamesById
};
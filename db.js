const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

pool.query("SELECT current_database(), current_user", (error, results) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Connected to:", results.rows[0]);
    }
});

module.exports = pool;
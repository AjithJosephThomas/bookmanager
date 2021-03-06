const { createPool } = require('mysql2');
const { promisify } = require('util');

const {
    IS_DOCKER,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD
} = process.env;

const host = IS_DOCKER ? 'db' : 'localhost';

const pool = createPool({
    host,
    database: "bookmanager",
    user: "bookmanager",
    password: "bookmanager",
    port:3306
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        }
    }
    if (connection) connection.release();
    return;
})

pool.query = promisify(pool.query);

module.exports = pool;

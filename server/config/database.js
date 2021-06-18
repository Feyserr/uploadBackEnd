/*const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password:'12345',
    host:'localhost',
    port: 5432,
    database:'testePratico'
});

module.exports = db;
*/
            // CONEXÃO COM O BANCO POSTGRESQL

const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user:"postgres",
    password:"12345d",
    database:"postgres"
})

module.exports = client;


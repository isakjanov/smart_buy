const pgp = require('pg-promise')();

const connection = {
    host: 'localhost',
    port: 5432,
    database: 'smart_buy',
    user: 'tim',
    password: 'tim123'
};

const db = pgp(connection);
export default db;

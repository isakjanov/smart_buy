'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pgp = require('pg-promise')();

var connection = {
    host: 'localhost',
    port: 5432,
    database: 'smart_buy',
    user: 'tim',
    password: 'tim123'
};

var db = pgp(connection);
exports.default = db;
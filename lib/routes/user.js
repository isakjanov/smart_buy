'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../services/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userService = new _user2.default();
var router = _express2.default.Router();

router.get('/', function (req, res) {
	userService.getUsers().then(function (users) {
		return res.send({ users: users });
	});
});

router.post('/create', function (req, res) {
	var _req$body = req.body,
	    email = _req$body.email,
	    name = _req$body.name,
	    password = _req$body.password;


	console.log(req.body);

	userService.createUser({ email: email, name: name, password: password }).then(function (result) {
		return res.send({ result: result });
	}).catch(function (error) {
		return res.send(error);
	});
});

exports.userRouter = router;
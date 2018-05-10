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
	res.send({ action: 'create user' });
});

exports.userRouter = router;
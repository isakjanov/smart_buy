'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../utils/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserRepository = function () {
	function UserRepository() {
		_classCallCheck(this, UserRepository);
	}

	_createClass(UserRepository, [{
		key: 'getUsers',
		value: function getUsers() {
			return _db2.default.any('SELECT * FROM users');
		}
	}, {
		key: 'createUser',
		value: function createUser(_ref) {
			var email = _ref.email,
			    name = _ref.name,
			    password = _ref.password;

			return _db2.default.query('INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING id', [email, name, password]);
		}
	}]);

	return UserRepository;
}();

exports.default = UserRepository;
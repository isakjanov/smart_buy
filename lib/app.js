'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index');

var _user = require('./routes/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/', _index.indexRouter);
app.use('/user', _user.userRouter);

app.listen(3000, function () {
  return console.log('Example app listening on port 3000');
});
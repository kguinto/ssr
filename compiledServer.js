'use strict';

var express = require('express');
var app = express();

var _require = require('react'),
    createElement = _require.createElement;

var _require2 = require('react-dom/server'),
    renderToString = _require2.renderToString;

var path = require('path');
var App = require('./client/App').default;

var html = function html(content) {
  return '\n    <!DOCTYPE html>\n    <html>\n      <head> </head>\n      <body>\n        <div id="root">' + content + '</div>\n\t<script src="static/bundle.js"></script>\n      </body>\n    </html>\n  ';
};

app.use('/static', express.static('build'));

app.get('/', function (req, res) {
  var appHtml = renderToString(createElement(App));
  res.status(200).send(html(appHtml));
});

app.listen(3000, function () {
  console.log('Listening');
});

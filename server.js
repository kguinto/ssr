const express = require('express');
const app = express();
const { createElement } = require('react');
const { renderToString } = require('react-dom/server');
const path = require('path');
const App = require('./client/App').default;

const html = (content) => (
  `
    <!DOCTYPE html>
    <html>
      <head> </head>
      <body>
        <div id="root">${content}</div>
	<script src="static/bundle.js"></script>
      </body>
    </html>
  `
);

app.use('/static', express.static('build'));

app.get('/', (req, res) => {
  const appHtml = renderToString(createElement(App));
  res.status(200).send(html(appHtml));
});

app.listen(3000, () => {
  console.log('Listening');
});


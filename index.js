const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Jenkins + Node.js!');
});

module.exports = app;

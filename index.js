const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Jenkins + Node.js!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

module.exports = app; // export for testing


const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', "text/html");
  res.status(200);
  res.send('<h1>Hello world!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}.`);
});
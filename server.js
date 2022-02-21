// const { Client } = require('pg');
const express = require('express');
const app = express();
const PORT = 8080;

// Serve the public folder
app.use(express.static('public'));

// Routing
const greetingRouter = require('./routes/greeting.routes');
app.use(greetingRouter);

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', "text/html");
  res.status(200);
  res.send('<h1>Hello world!</h1>');
});

(async () => {
  const db = require('./util/db');
  await db.connect();
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}.`);
  });
})();

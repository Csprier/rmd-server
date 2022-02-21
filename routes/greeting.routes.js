const greetingRouter = require('express').Router();
const db = require('util/db');

app.get('/greeting', async function (req, res) {
  const results = await client
    .query('SELECT * FROM Greeting')
    .then(payload => {
      return payload.rows;
    })
    .catch(() => {
      throw new Error('Query failed.');
    });
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(JSON.stringify(results));
});
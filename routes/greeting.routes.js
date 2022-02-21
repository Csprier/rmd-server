const greetingRouter = require('express').Router();
const db = require('../util/db');

greetingRouter.get('/greeting', async function (req, res) {
  const results = await db.query('SELECT * FROM Greeting')
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

module.exports = greetingRouter;
const { Client } = require('pg');
const express = require('express');
const app = express();
const PORT = 8080;

const client = new Client({
  password: 'root',
  user: 'root',
  host: 'database'
});

app.use(express.static('public'));
 
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


app.get('/', async (req, res) => {
  res.setHeader('Content-Type', "text/html");
  res.status(200);
  res.send('<h1>Hello world!</h1>');
});

(async () => {
  await client.connect();
  
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}.`);
  });
})();

// =============================================================
// Create the Express app instance
const express = require('express');
const app = express();

// =============================================================
// dotenv
const dotenv = require('dotenv');
dotenv.config();

// =============================================================
app.use(express.json());
app.use(cors());
app.options('*', cors());
const PORT = 8080;

// =============================================================
// Routing
const greetingRouter = require('./routes/greeting.routes');
app.use(greetingRouter);

// =============================================================
// Serve the public folder
app.use(express.static('public'));
app.get('/', async (req, res) => {
  res.setHeader('Content-Type', "text/html");
  res.status(200);
  res.send('<h1>Hello world!</h1>');
});

// =============================================================
// Listen to the PORT
(async () => {
  const db = require('./util/db');
  await db.connect();
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}.`);
  });
})();

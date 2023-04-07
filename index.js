import express from 'express';
import path from 'path';
import db from './models/index.js';

import mysql from 'mysql2/promise'

import dbConfig from './config/db-config.js'

const PORT = 3000
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(import.meta.url, 'public')));

(async () => {
  await db.sequelize.sync();
})();

const TABLE_NAME = 'posts'

const connection = await mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});

// routes

// GET route to retrieve data from the database
app.get('/posts', async (req, res) => {
  try {
    const [rows] = await connection.execute(`SELECT * FROM ${dbConfig.TABLE_NAME}`);
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});




//------------------------------------------------------

app.use(function (req, res, next) {
  console.log('This is global middleware!');
  next();
});



app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}!`)
})

'use strict';

const express = require('express');
const app = express();

// Use the built-in express middleware for serving static files from './public'
app.use(express.static('build'));
app.use(express.static('build/static'));

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});

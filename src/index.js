require('dotenv').config();
require('./helpers/database').connect();
const express = require('express');
const app = express();
const cors = require('cors');

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
  req.io = io;
  return next();
});
app.use(cors());
app.use(express.json());
app.use(require('./routes.js'));

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://goweek:goweek123@ds133856.mlab.com:33856/goweek_backend', {
  useNewUrlParser: true
});

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
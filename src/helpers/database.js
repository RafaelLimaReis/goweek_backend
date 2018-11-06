const mongoose = require('mongoose');

const connect = () => {
  if (process.env.DB_TYPE === 'MONGO') {
    let urlConnection = 'mongodb://';
    if (/^(localhost|127.0.0.1)/.test(process.env.DB_HOST)) {
      urlConnection += `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
    } else {
      urlConnection += `${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
    } 
    mongoose.connect(urlConnection, {
      useNewUrlParser: true
    });
  }
}

module.exports = { connect };
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/myapp';

function connect() {
  return new Promise((resolve, reject) => {
    dotenv.config({ path: './config.env' });
    const setDatabase = () => {
      if (process.env.NODE_ENV === 'development') {
        const DB = process.env.DATABASE;
        return DB;
      } else {
        const DB = process.env.DATABASE_PRODUCTION.replace(
          '<PASSWORD>',
          process.env.DATABASE_PASSWORD
        );
        return DB;
      }
    };

    const DB = setDatabase();

    mongoose
      .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
      .then(() => console.log('DB connection successful!'));
  });
}

module.exports = { connect };

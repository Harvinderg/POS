const mongoose = require('mongoose');
const confgir = require('dotenv');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold);
};

module.exports = connectDB;

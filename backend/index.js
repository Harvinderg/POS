const express = require('express');
const dotenv = require('dotenv');

const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
dotenv.config({ path: './config/config.env' });
const connectDB = require('./db/dbConnection');
connectDB();

const logger = require('./middleware/logger');
const bootCamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const app = express();
//Body Parser
app.use(express.json());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/v1/bootcamps', bootCamps);
app.use('/api/v1/courses', courses);

//app.use(errorHandler());
const PORT = process.env.PORT || 6000;
//Add Data again
const server = app.listen(PORT, (err) => {
  if (!err)
    console.log(
      `Server running in ${process.env.NODE_ENV} mode  on PORT ${PORT}`.yellow
        .bold
    );
  if (err)
    console.log(
      `Error Starting Server on PORT ${PORT} in ${process.env.NODE_ENV}`.red
        .bold
    );
});

//handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.yellow.bold);

  //Close Server and exit
  server.close(() => process.exit(1));
});

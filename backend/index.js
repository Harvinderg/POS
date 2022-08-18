const express = require('express');
const dotenv = require('dotenv');

const bootCamps = require('./routes/bootcamps');

const app = express();

dotenv.config({ path: './config/config.env' });

app.use('/api/v1/bootcamps', bootCamps);

const PORT = process.env.PORT || 6000;
//Add Data again
app.listen(PORT, (err) => {
  if (!err)
    console.log(
      `Server running in ${process.env.NODE_ENV} mode  on PORT ${PORT}`
    );
  if (err)
    console.log(
      `Error Starting Server on PORT ${PORT} in ${process.env.NODE_ENV}`
    );
});

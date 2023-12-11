const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouters = require('./routes/index');
const bookRouters = require('./routes/books');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOption = {
  origin: '*',
  credentials: false,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOption));
app.use('/api/user', indexRouters);
app.use('/api/books', bookRouters);

const port = 5000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}.....`);
});

const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const colors = require('colors');
const welcomeRoute = require('./routes/home.routes');
const noteRoute = require('./routes/notes.routes');

const cors = require('cors');
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', welcomeRoute);
app.use('/api/note', noteRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at port: ${port} `.yellow.bold);
});

const express = require('express');
const app = express();
const { dbConnection } = require('./config/config');
const routes = require('./routes');

const PORT = 3000;

app.use(express.json());

app.use('/', routes);

dbConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
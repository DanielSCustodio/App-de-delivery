const cors = require('cors');

const express = require('express');
const loginRouter = require('../routers/loginRoute');
const registerRouter = require('../routers/registerRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.use(loginRouter);
app.use(registerRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;

'use strict'

const express = require("express");
const cors = require("cors");
const config = require("./config");
const bookRoutes = require('./routes/bookRoutes');
const devolutionRoutes = require('./routes/devolutionRoutes');
const libraryRoutes = require('./routes/libraryRoutes');
const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');


const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/book', bookRoutes);
app.use('/api/devolution', devolutionRoutes);
app.use('/api/library', libraryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/loan', loanRoutes);


app.listen(config.port, () => {
    console.log(`API rodando em ${config.url}`);
})

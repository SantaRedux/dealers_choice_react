const path = require('path');
const express = require('express');
const volleyball = require ('volleyball');

const app = express();

module.exports = app;

app.use(volleyball)

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'node_modules', 'font - awesome', 'css')));
app.use('/fonts', express.static(path.join(__dirname, '..', 'node_modules', 'font-awesome', 'fonts')));

app.use('/api', require('./src/api')); 

app.use((req, res, next) => {
    if (path.extname(req.path).length > 0) res.status(404).end();
    else next();
})

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
})

app.use((err, req, res, next) => {
    console.log(err, typeof next);
    console.log(err.stack);
    res.status(err.status).send(`***** epic server FAIL: *****\n${err.message}`);
})
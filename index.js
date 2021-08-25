const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('Reached first middleware!');
    res.send('<h1>You are in the users pages</h1>')
})

app.use('/', (req, res, next) => {
    console.log('Reached the last middleware!');
    res.send('<h1>You are in the home page!</h1>');
});

app.listen(3000);
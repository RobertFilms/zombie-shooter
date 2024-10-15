//Base node stuff frfr
const sql = require('sqlite3');
const express = require('express');
const crypto = require('crypto');

//Being insane is trying to do the same thing over and over again and expecting different results - Albert Einstein

//Add a thing to add an image to the user profile (maybe)
//And I should prob make a ejs page to display profiles

const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended: true}));

app.set ('view engine', 'ejs');

const db = new sql.Database('users.db', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Opened database');
    }
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
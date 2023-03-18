const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const cors = require('cors');
const mysql = require('mysql2'); 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "isu_project"
});

app.use(bodyparser.urlencoded({ extended: true}))
app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const sqlSelect = "SELECT fullname FROM `isu_user_login` WHERE emailid=? and password=md5(?);"
    db.query(sqlSelect, [email, password], (err, result) => {
        if(err) console.log(err);
        res.send(result);
    });
});

app.post('/api/register', (req, res) => {
    const fname = req.body.fname;
    const email = req.body.email;
    const password = req.body.password;
    
    const sqlInsert = "INSERT INTO `isu_user_login` (`fullname`, `emailid`, `password`) VALUES (?, ?, MD5(?));"
    db.query(sqlInsert, [fname, email, password], (err, result) => {
        if(err) console.log(err);
    })
});

app.listen(3001, () => {
    console.log('running on port 3001')
});
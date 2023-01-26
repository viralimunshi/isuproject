const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2'); 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "isu_project"
});

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO `isu_project`.`isu_user_login` (`fullname`, `emailid`, `password`) VALUES ('wsdsaw', 'ew121@gmail.com', 'fdssd');"

    db.query(sqlInsert, (err, result) => {
        // if(err) {
            console.log(err);
            console.log(result);
        // } 
        res.send(result);
    })
});

app.listen(3001, () => {
    console.log('running on port 3001')
});
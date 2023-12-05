/*const express = require('express');

const app = express();
const port = 3000;

app.set("view engine", "ejs")
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
*/

const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: "192.168.0.3",
    user: "root",
    port: "33060",
    password: "P@ssw0rd"
});
conn.connect(err => {
    if(err){
        console.log(err);
        return err;
    }
    else{
        console.log("DATABASE -------------------------------> OK")
    }
});
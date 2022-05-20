const express=require('express');
const app=express();
const cors=require('cors');
app.use (cors());
app.use(express.json());


// var mysql = require("mysql");

// var con = mysql.createConnection({
//   host: "---------",
//   user: "---------",
//   password: "----------",
//   database: "----------",
// });
// con.connect(function (err) {
//   if (err) res.send(err); 
// });

// app.post("/route",(req,res)=>{
//     console.log(req.body)

// })
// app.listen(8000,()=>{
//     console.log('server is running');
// });

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecommerce",
});
con.connect(function (err) {
  if (err) res.send(err); 
});



app.post("/uservalidate", (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    var sql ="SELECT id from tbluser where txtUsername='" +username+ "' AND txtPassword='" +password+"'" ;
  console.log(sql)
    con.query(sql, function (err, result, fields) {
      if (err) res.send(err);
      res.send(result);
    })

  });

app.listen(8000,()=>{
    console.log('server is running');
});
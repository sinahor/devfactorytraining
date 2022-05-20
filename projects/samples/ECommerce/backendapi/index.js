const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

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

app.post("/uservalidation", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  var sql ="SELECT id from tbluser where txtUsername='" +username+ "' AND txtPassword='" +password+"'" ;
console.log(sql)
  con.query(sql, function (err, result, fields) {
    if (err) res.send(err);
    res.send(result);
  })
});

  app.post("/countryfetch", (req, res) => {
   var sql ="SELECT'"+txtCountryName+"'FROM tblcountry" ;
  console.log(sql)
    con.query(sql, function (err, result, fields) {
      if (err) res.send(err);
      res.send(result);
    });
  });

    app.post("/statefetch", (req, res) => {
      let countryname=req.body.countryname;
     var sql ="select txtstatename from tblstate s inner join tblcountry c on s.reftxtcountryname=c.id  where txtCountryName='"+countryname+"'";
      console.log(sql)
      con.query(sql, function (err, result, fields) {
        if (err) res.send(err);
        res.send(result);
      });
    });

      app.post("/userinsert", (req, res) => {
        console.log(req.body)
        let usertype = req.body.usertype;
        let username = req.body.username;
        let password = req.body.password;
        let firstname=req.body.firstname;
        let lastname=req.body.lastname;
        let countryname=req.body.countryname;
        let statename=req.body.statename;
        // let address=req.body.address;
        // let street=req.body.street;
        // let city=req.body.city;
        // let pincode=req.body.pincode;
        // let phone=req.body.phone;
        // let website=req.body.website;
        // let bIsRegirtered=req.body.bIsRegirtered;
        // let createdon=req.body.createdon;
        // let updatedon=req.body.updatedon;
        // let deleteflag=req.body.deleteflag;

        // var sql ="INSERT INTO tbluser(txtUserType) VALUES('"+usertype +"')"; 
        var sql ="INSERT INTO tbluser(txtUserType,txtUsername,txtPassword,txtFirstName,txtLastName,reftxtcountryname,reftxtstatename) VALUES('"+usertype +"','"+username+"','"+password+"','"+firstname+"','"+lastname+"',"+countryname+","+statename+")";
         console.log(sql)
         con.query(sql, function (err, result, fields) {
           if (err) res.send(err);
           res.send(result);
         });
        });



app.listen(8000, () => {
  console.log("Server is running");
});



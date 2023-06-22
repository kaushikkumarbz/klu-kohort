const express = require("express");
const User = require("./db/models/user");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const data = require("./db/connect");
const { constants } = require("buffer");
data.connectMongoDB();

app.use(bodyParser.json());


app.get("/api/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/create", async function (req, res) {

    try{
      let user = new User({
        name: "Rohan",
        phoneNumber: "234234232",
        userName: "xyz",
        email: "xyz@gmail.com",
        password: "hgasdh997",
        gender: "male",
        dateOfBirth: new Date(),
        address: "hyd",
      });

      let data = await user.save();

      res.send({ answer: data });

    }catch(err){
      console.log(err);
      res.send({ERROR: "ERROR IN CREATE"})
    }
});


app.get("/api/get/all/user", async function (req, res) {

  let query = {name: req.query.name}
  let data = await User.find(query);

  res.send({ answer: data });
});


app.post("/api/user", (req, res)=>{

  try{

    console.log(req.body);

    res.send({ });

  }catch(err){
    console.log(err);
    res.send({ERROR: "ERROR IN CREATE"})
  }



} )

app.use(express.static( path.join(__dirname, '../frontend/dist') ));

app.get("/*", async (req, res) => {
	res.sendFile( path.join(__dirname, "../frontend/dist/index.html") );
});


app.listen(3000, () => {
  console.log("listening on port 3000");
});



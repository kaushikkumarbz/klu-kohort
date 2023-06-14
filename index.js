const express = require('express')
const Blog = require("./db/blogPost")
const app = express()

const data = require("./connect")
data.connectMongoDB()


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/home',async function (req, res) {

  let newblog = new Blog({
    author: "new",
    title: "sdf",
    body: "sdfs",
    date: new Date()

  })

   let data = await newblog.save();


    res.send({answer : data})
 })



 app.get('/get',async function (req, res) {


   let data = await Blog.find();


    res.send({answer : data})
 })









app.listen(3000,()=>{
    console.log('listening on port 3000');
})

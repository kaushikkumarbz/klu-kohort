const mongoose = require("mongoose")

const connectionString = "mongodb+srv://root:root@nodecluster.oaib3if.mongodb.net/kohort";


module.exports.connectMongoDB = function () {
    mongoose
        .connect(connectionString, {})
        .then(() => {
            console.log("Connected to MongoDB")
        })
        .catch((err) => {
            console.log(err)
        })
}



// developmentDBOne


// How to create schema
// CRUD operations on the table
// mongoose



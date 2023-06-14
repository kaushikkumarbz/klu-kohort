const mongoose = require("mongoose")

const connectionString = "";


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

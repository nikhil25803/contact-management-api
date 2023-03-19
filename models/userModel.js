const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide the username"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email address"],
        unique: [true, "Email is already registered"]
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)
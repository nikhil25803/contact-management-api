const asyncHandler = require("express-async-handler")
const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are required")
    }

    const userAvailable = await userModel.findOne({ email })
    if (userAvailable) {
        res.status(400)
        throw new Error("The email has already been registered")
    }

    // Hashed Password
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = userModel.create({
        username,
        email,
        password: hashedPassword
    })

    if (newUser) {
        res.status(201)
            .json({
                "status": res.statusCode,
                "data": {
                    "username": username,
                    "email": email
                }
            })
    } else {
        res.status(400)
        throw new Error("User data is not valid")
    }

    res.json({ message: "Register the user" })
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("Both email and password field is required")
    }

    const user = await userModel.findOne({ email })
    if (user && bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        }, process.env.ACCESS_TOKEN,
            { expiresIn: "10m" }
        )
        res.status(200)
            .json({ accessToken })
    } else {
        res.status(400)
        throw new Error("email or password is not valid")
    }
})

const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
  });

module.exports = { registerUser, loginUser, currentUser }
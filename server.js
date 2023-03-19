// Imports
const express = require("express")
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
dotenv.config()


// Initialise an express application
const app  = express();

// Middlewares
app.use(express.json())

// Mount routes
app.use("/api", require("./routes/contactRoutes"))
app.use(errorHandler)






// Home Route for testing
app.get("/", (req, res) => {
    res.status(200).json({
        "status":res.statusCode,
        "message":"Server up and Running"
    })
})


// Create a PORT and listen to the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
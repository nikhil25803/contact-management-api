const asyncHandler = require("express-async-handler")


const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({
        "status": res.statusCode,
        "message": "Get all contacts"
    })
})


const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    res.status(200).json({
        "status": res.statusCode,
        "message": "Create contact"
    })
})

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({
        "status": res.statusCode,
        "message": `Update contact for id: ${req.params.id}`
    })
})

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({
        "status": res.statusCode,
        "message": `Delete contact with id: ${req.params.id}`
    })
})


module.exports = {
    getContact, createContact, updateContact, deleteContact
}
const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json({
        "status": res.statusCode,
        "data": contacts
    })
})

const getContactById = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404)
        throw new Error(`No contact found with id: ${req.params.id}`)
    }
    res.status(200).json({
        "status":res.statusCode,
        "data":contact
    })
})


const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const newContact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(200).json({
        "status": res.statusCode,
        "message": "Contact created sucessfully",
        "data": newContact
    })
})


const updateContact = asyncHandler(async (req, res) => {
    const contactId = req.params.id
    if(!contactId) {
        res.status(404)
        throw new Error("Please pass an ID with the request")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json({
        "status": res.statusCode,
        "message": `Update contact for id: ${contactId}`,
        "data":updatedContact
    })
})

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404)
        throw new Error(`No contact found with id: ${req.params.id}`)
    }
    await Contact.deleteOne({_id:req.params.id})
    res.status(200).json({
        "status": res.statusCode,
        "message": `Delete contact with id: ${req.params.id}`
    })
})


module.exports = {
    getContact, createContact, updateContact, deleteContact, getContactById
}
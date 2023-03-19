const express = require("express")
const router = express.Router();
const contactController = require("../controllers/contactController")


router.route('/').get(contactController.getContact)
router.route('/:id').get(contactController.getContactById)
router.route('/').post(contactController.createContact)
router.route('/:id').put(contactController.updateContact)
router.route('/:id').delete(contactController.deleteContact)

module.exports = router;


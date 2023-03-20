const express = require("express")
const router = express.Router();
const contactController = require("../controllers/contactController");
const authenticateToken = require("../middleware/validateTokenHandler");


router.use(authenticateToken)
router.route('/').get(contactController.getContact)
router.route('/:id').get(contactController.getContactById)
router.route('/:name').get(contactController.getContactByName)
router.route('/').post(contactController.createContact)
router.route('/:id').put(contactController.updateContact)
router.route('/:id').delete(contactController.deleteContact)

module.exports = router;


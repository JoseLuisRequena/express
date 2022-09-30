const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts.controller')

router.route('/')
    .get(controller.getContacts)
    .post(controller.newContact);
    
router.route('/:id')
    .get(controller.getContact)
    .delete(controller.deleteContact)
    .put(controller.updateContact);

module.exports = router;
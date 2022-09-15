const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts.controller')

router.delete('/:id', controller.deleteContact);
router.get('/', controller.getContacts);
router.get('/:id', controller.getContact);
router.post('/', controller.newContact);
router.put('/:id', controller.updateContact);

module.exports = router;
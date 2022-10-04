const { Contact } = require('../db/schema');
require('../db/connectionDB');

const controller = {};

controller.getContacts = async function(req, res) {
    const result = await Contact.find();
    res.json(result);
};

controller.getContact = async function(req, res) {
    const contactId = req.params.id;
    const result = await Contact.findOne({_id: contactId});
    res.json(result);
};

controller.newContact = async function(req, res) {
    const dataNewContact = req.body;
    const newContact = new Contact(dataNewContact);
    const result = await newContact.save();
    res.json({ result, message: "New contact added" });
};

controller.updateContact = async function(req, res) {
    const contactId = req.params.id;
    const result = await Contact.findOneAndUpdate(
        {_id: contactId},
        req.body,
        {new: true}
        );
    res.json({ result, message: "Contact updated" });
};
 
controller.deleteContact = async function(req, res) {
    const contactId = req.params.id;
    const result = await Contact.deleteOne({ _id: contactId });
    res.json({ result, message: "Contact deleted" });
};

module.exports = controller;
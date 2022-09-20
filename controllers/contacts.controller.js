const contacts = require('../jsons/Contacts.json');

const controller = {};

controller.getContacts = function(req, res) {
    res.json(contacts);
};
controller.getContact = function(req, res) {
    const contact = contacts.find( contact => String(contact.id) === req.params.id);
    res.json(contact);
};
controller.newContact = function(req, res) {
    //contacts = [...contacts, req.body];
    res.json({ success: true, message: "New contact added" });
};
controller.updateContact = function(req, res) {
    //contacts.forEach((contact, index) => {
    //  if (contact.id === req.params.id) {
    //    return (contacts[index] = req.body);
    //  }
    //});
    res.json({ success: true, message: "Contact updated" });
};
controller.deleteContact = function(req, res) {
    const contactId = contacts.find(contact => String(contact.id) === req.params.id);
    contacts.splice(contactId, 1);
    res.json({ success: true, message: "Contact deleted" });
};

module.exports = controller;
const { Booking } = require('../schema');
require('../connectionDB');

const controller = {};

controller.getBookings = async function(req, res) {
    const result = await Booking.find()
    res.json(result);
};

controller.getBooking = async function(req, res) {
    const bookingId = req.params.id;
    const result = await Booking.findOne({_id: bookingId})
    res.json(result);
};

controller.newBooking = function(req, res) {
    const dataNewBooking = req.body;
    const newBooking = new Booking(dataNewBooking);
    const result = newBooking.save();
    res.json({ result, message: "New booking added" });
};

controller.updateBooking = async function(req, res) {
    const bookingId = req.params.id;
    const result = await Booking.findOneAndUpdate(
        {_id: bookingId},
        req.body,
        {new: true}
        );
    res.json({ result, message: "Booking updated" });
};

controller.deleteBooking = async function(req, res) {
    const bookingId = req.params.id;
    const result = await Booking.deleteOne({ _id: bookingId })
    res.json({ result, message: "Booking deleted" });
};
  
module.exports = controller;
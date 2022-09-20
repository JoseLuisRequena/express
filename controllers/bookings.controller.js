const bookings = require('../jsons/Bookings.json');

const controller = {};

controller.getBookings = function(req, res) {
    res.json(bookings);
};
controller.getBooking = function(req, res) {
    const booking = bookings.find( booking => String(booking.id) === req.params.id);
    res.json(booking);
};
controller.newBooking = function(req, res) {
    res.json({ success: true, message: "New booking added" });
};
controller.updateBooking = function(req, res) {
    res.json({ success: true, message: "Booking updated" });
};
controller.deleteBooking = function(req, res) {
    const bookingId = bookings.find(booking => String(booking.id) === req.params.id);
    bookings.splice(bookingId, 1);
    res.json({ success: true, message: "Booking deleted" });
};
  

module.exports = controller;
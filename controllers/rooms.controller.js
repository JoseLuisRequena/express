const rooms = require('../jsons/Rooms.json')

const controller = {};

controller.getRooms = function(req, res) {
    res.json(rooms);
};
controller.getRoom = function(req, res) {
    const room = rooms.find( room => String(room.room) === req.params.room);
    res.json(room);
};
controller.newRoom = function(req, res) {
    rooms = [...rooms, req.body];
    res.json({ success: true, message: "New room added" });
};
controller.updateRoom = function(req, res) {
    rooms.forEach((room, index) => {
      if (room.room === req.params.room) {
        return (rooms[index] = req.body);
      }
    });
    res.json({ success: true, message: "Room updated" });
};
controller.deleteRoom = function(req, res) {
    const roomNum = rooms.find(room => String(room.room) === req.params.room);
    rooms.splice(roomNum, 1);
    res.json({ success: true, message: "Room deleted" });
};

module.exports = controller;
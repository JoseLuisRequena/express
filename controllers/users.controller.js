const users = require('../jsons/Users.json')

const controller = {}

controller.getUsers = function(req, res) {
    res.json(users);
};
controller.getUser = function(req, res) {
    const user = users.find( user => String(user.id) === req.params.id);
    res.json(user);
};
controller.newUser = function(req, res) {
    users = [...users, req.body];
    res.json({ success: true, message: "New user added" });
};
controller.updateUser = function(req, res) {
    users.forEach((user, index) => {
      if (user.id === req.params.id) {
        return (users[index] = req.body);
      }
    });
    res.json({ success: true, message: "User updated" });
};
controller.deleteUser = function(req, res) {
    const userId = users.find(user => String(user.id) === req.params.id);
    users.splice(userId, 1);
    res.json({ success: true, message: "User deleted" });
};

module.exports = controller;
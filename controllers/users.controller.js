const { User } = require('../db/schema');
require('../db/connectionDB');

const controller = {}

controller.getUsers = async function(req, res) {
    const result = await User.find();
    res.json(result);
};

controller.getUser = async function(req, res) {
    const userId = req.params.id
    const result = await User.findOne({_id: userId});
    res.json(result);
};

controller.newUser = async function(req, res) {
    const dataNewUser = req.body;
    const newUser = new User(dataNewUser);
    const result = await newUser.save();
    res.json({ result, message: "New user added" });
};

controller.updateUser = async function(req, res) {
    const userId = req.params.id;
    const result = await User.findOneAndUpdate(
        { _id: userId },
        req.body,
        {new: true}
    );
    res.json({ result, message: "User updated" });
};

controller.deleteUser = async function(req, res) {
    const userId = req.params.id;
    const result = await User.deleteOne({ _id: userId })
    res.json({ result, message: "User deleted" });
};

module.exports = controller;
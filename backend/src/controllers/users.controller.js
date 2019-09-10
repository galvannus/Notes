const usersCtrl = {};
const UserModel = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const user = await UserModel.find();
    res.json(user)
}

usersCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new UserModel({
        username
    });
    await newUser.save();
    res.json({message: 'User Created'})
}

usersCtrl.getUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    res.json(user)
}
usersCtrl.updateUser = async (req, res) => {
    const { username } = req.body;
    await UserModel.findOneAndUpdate(req.params.id, {
        username
    });
    res.json({message: 'User Updated'})
}
usersCtrl.deleteUser = async (req, res) => {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({message: 'User Deleted'})
}

module.exports = usersCtrl;
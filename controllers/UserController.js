const User = require('../models/User');

exports.createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User is Not Found' });
        }
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User is Not Found' });
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true });
        if (!user) {
            return res.status(404).json({ message: 'User is Not Found' });
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};







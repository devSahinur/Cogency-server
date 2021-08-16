const { Admin } = require('../model/admin')

// Create a new Admin
const createAdmin = async (req, res) => {
    console.log(req.body);
    try {
        const admin = await Admin.create(req.body);
        res.json(admin);
    } catch (error) {
        res.json(error);
    }
};

// Fetch all Admin
const fetchAllAdmin = async (req, res) => {
    try {
        const admin = await Admin.find();
        res.json(admin);
    } catch (error) {
        res.json(error);
    }
};

// Fetch a Admin
const fetchAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        res.json(admin);
    } catch (error) {
        res.json(error);
    }
};

// Update a Admin
const updateAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, {
            $set: req.body
        });
        res.json(admin);
    } catch (error) {
        res.json(error);
    }
};

// Delete a Admin
const deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndRemove(req.params.id);
        res.json(admin);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {createAdmin, fetchAllAdmin, deleteAdmin, updateAdmin, fetchAdmin};


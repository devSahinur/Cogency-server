const { Service } = require('../model/Service')

// Create a new Service
const createService = async (req, res) => {
    console.log(req.body);
    try {
        const service = await Service.create({
            serviceTitle: req.body.serviceTitle,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image
        });
        res.json(service);
    } catch (error) {
        res.json(error);
    }
};

// Fetch all Service
const fetchAllService = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.json(error);
    }
};

// Fetch a Service
const fetchService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        res.json(service);
    } catch (error) {
        res.json(error);
    }
};

// Update a Service
const updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, {
            serviceTitle: req.body.serviceTitle,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image
        });
        res.json(service);
    } catch (error) {
        res.json(error);
    }
};

// Delete a Service
const deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndRemove(req.params.id);
        res.json(service);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {createService, fetchAllService, deleteService, updateService, fetchService};


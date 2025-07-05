const mongoose = require('../database');

const ServiceSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
}, {
    timestamps: true,
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;

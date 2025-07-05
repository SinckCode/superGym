const mongoose = require('../database');

const ProductSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

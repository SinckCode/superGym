const mongoose = require('../database');

const PaymentSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    monto: { type: Number, required: true },
    metodoPago: { type: String, required: true },
}, {
    timestamps: true,
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;

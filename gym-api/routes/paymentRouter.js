const express = require('express');
const Payment = require('../models/Payment');
const router = express.Router();

// Obtener todos los pagos
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find().populate('usuario');
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los pagos.' });
    }
});

// Crear un nuevo pago
router.post('/', async (req, res) => {
    try {
        const { usuario, monto, metodoPago } = req.body;
        const payment = new Payment({ usuario, monto, metodoPago });
        await payment.save();
        res.status(201).json(payment);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el pago.' });
    }
});

module.exports = router;

const express = require('express');
const membershipRouter = require('./routes/membershipRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const serviceRouter = require('./routes/serviceRouter');
const paymentRouter = require('./routes/paymentRouter');
const authRouter = require('./routes/authRouter');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/memberships', membershipRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/services', serviceRouter);
app.use('/api/payments', paymentRouter);

// Rutas de autenticación
app.use('/api/auth', authRouter);

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

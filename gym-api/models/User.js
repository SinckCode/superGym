const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    membresia: { type: mongoose.Schema.Types.ObjectId, ref: 'Membership', required: false },
}, {
    timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

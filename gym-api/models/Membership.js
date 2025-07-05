const mongoose = require('../database');

const MembershipSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    precio: { type: Number, required: true },
}, {
    timestamps: true,
});

const Membership = mongoose.model('Membership', MembershipSchema);

module.exports = Membership;

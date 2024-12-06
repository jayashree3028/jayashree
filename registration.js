const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    eventDate: { type: Date, required: true },
    message: { type: String, required: true },
    image: { type: String, required: true },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;

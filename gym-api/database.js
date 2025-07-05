const mongoose = require('mongoose');

// URL de conexión a MongoDB
const DB_URL = 'mongodb+srv://soyangeldavid1:ang777pop@finaldesign.7dhk7.mongodb.net/gym-api?retryWrites=true&w=majority&appName=finaldesign';

// Conexión a la base de datos
mongoose.connect(DB_URL)
    .then(() => console.log('Conexión a la base de datos MongoDB Atlas exitosa.'))
    .catch((error) => console.error('Error al conectar con la base de datos:', error));

module.exports = mongoose;

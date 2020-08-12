const mongoose = require('mongoose');

const ObraSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    editora: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    autores: {
        type: Array,
        required: true
    }
});

mongoose.model('Obra', ObraSchema);
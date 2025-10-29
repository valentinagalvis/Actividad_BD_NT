const mongoose = require("mongoose");
const articuloShema = mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },
    autores: {
        type: String,
        required: true
    },
    anioPublicacion: {
        type: Date,
        required: true
    },
    resumen: {
        type: String,
        required: true
    },
    cantReferencia: {
        type: Number,
        required: true
    },
    nombreBD: {
        type: String,
        required: true
    },
    nombreRevista: {
        type: String,
        required: true
    },
    enlace: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Articulo",articuloShema);
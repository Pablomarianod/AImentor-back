import { Schema, model } from "mongoose";

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: email,
        required: true
    },
    clave: {
        type: Password
    },
    fechaRegistro: {
        type: Date
    },
    rol: {
        type: String,
        default: 'user'
    },

    bloqueado: {
        type:Boolean,
        default: false
    }

});

const UsuarioModel = model('usuario', UsuarioSchema);

export default UsuarioModel;


//Colección usuarios

    // "preferencias_usuarios": 
    // "idioma": "String,"
    // "tema_interes": "String",
    // "notificaciones_activas": "Boolean"
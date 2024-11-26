import { Schema, model } from "mongoose"

const PreguntaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
});

const PreguntaModel = model('pregunta', PreguntaSchema);

export default PreguntaModel;



//Colección sesiones
// {
//     "_id": "bbjectId",
//     "id_usuario": "objectId",
//     "fecha-inicio": "ISODate",
//     "fecha-fin": "ISODate",
//     "interacciones": ["objectId"],
//     "estado": "String"
// }


// Colección interacciones

// {
//   "_id": "ObjectId",
//   "id_sesion": "ObjectId",  // Referencia a la colección de Sesiones.
//   "id_usuario": "ObjectId",  // Referencia a la colección de Usuarios.
//   "fecha_interaccion": "ISODate",
//   "mensaje_usuario": "string",
//   "respuesta_sistema": {  // Embedded document de la respuesta generada en esa interacción.
//     "texto_respuesta": "string",
//     "tipo_respuesta": "string",  // Si es generada, almacenada, etc.
//     "id_respuesta_almacenada": "ObjectId"  // Referencia a la colección de Respuestas Almacenadas (opcional).
//   },
//   "historial_consultas_api": ["ObjectId"],  // Referencias a la colección Historial de Consultas API.
//   "id_topic": "ObjectId",  // Referencia a la colección Tópicos.
//   "feedback_usuario": {
//     "id_feedback": "ObjectId",
//     "calificacion": "int",  // Calificación del usuario sobre la interacción.
//     "comentarios": "string"
//   }
// }

//Colección de respuestas almacenadas

// {
//     "_id": "objectId",
//     "id_tema": "objectId",
//     "texto_respuesta": "String",
//     "fecha_creacion": "ISODate",
//     "autor": "String"
// }

//Colección tópicos
// {
//     "_id": "objectId",
//     "nombre_tema": "String",
//     "descripcion": "String",
//     "recursos_externos": "String",
//     "respuestas_almacenadas": ["objectId"]
// }

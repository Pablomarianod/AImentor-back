import PreguntaModel from "../models/pregunta.schema";


const nuevaPregunta = async (pregunta) => {
    try {
        const pregunta = new PreguntaModel(body);
        await pregunta.save()
        return {
            msg: 'Pregunta creada',
            statusCode: 201
        };
    } catch (error) {
        return {
            msg: 'Error al crear pregunta',
            statusCode: 500,
            error
        };
    }
};

const obtenerPreguntas = async () => {
    try {
        const preguntas = await PreguntaModel.find();
        return {
            preguntas,
            msg: 'Todas las preguntas',
            statusCode: 200
        };
    } catch (error) {
        return {
            msg: 'Error al mostrar las preguntas',
            statusCode: 500,
            error
        };
    }
};

const obtenerPregunta = async (idPregunta) => {
    try {
        const pregunta = await PreguntaModel.findById(idPregunta)
        return {
            pregunta,
            msg: 'Pregunta buscada',
            statusCode: 200
        };
    } catch (error) {
        return {
            msg: 'Error al mostrar la pregunta',
            statusCode: 500,
            error
        };
    }
};

const modificarPregunta = async (idPregunta, body) => {
    try {
        await PreguntaModel.findById({ _id: idPregunta }, body);

        return {
            msg: 'Pregunta modificada',
            statusCode: 200
        };

    } catch (error) {
        console.log(error)
        return {
            msg: 'Error al modificar la pregunta',
            statusCode: 500,
            error
        };
    }
};

const eliminarPregunta = async (idPregunta) => {

    const preguntaExiste = await PreguntaModel.findById(idPregunta);
    if (preguntaExiste) {

        await PreguntaModel.findByIdAndDelete({ _id: idPregunta });
        return {
            msg: 'Pregunta eliminada',
            statusCode: 200
        };
    } else {
        return {
            msg: 'No se encontró el ID',
            statusCode: 400,
            error
        };
    };
};

export {
    nuevaPregunta,
    obtenerPreguntas,
    obtenerPregunta,
    modificarPregunta,
    eliminarPregunta
};
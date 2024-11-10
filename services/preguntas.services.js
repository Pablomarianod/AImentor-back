import PreguntaModel from "../models/pregunta.schema";


const nuevaPregunta = (pregunta) => {
    try {
        preguntas.push({ id: crypto.randomUUID(), pregunta });
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

const obtenerPreguntas = () => {
    try {
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

const obtenerPregunta = (idPregunta) => {
    try {
        const pregunta = preguntas.find((preg) => preg.id === idPregunta);
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
        const preguntaEditada = await PreguntaModel.findByIdAndUpdate({ _id: idPregunta }, body)

        return preguntaEditada
    } catch (error) {
        console.log(error)
    }
};

const eliminarPregunta = async (idPregunta) => {
    try {
        await PreguntaModel.findByIdAndDelete({ _id: idPregunta })
    } catch (error) {
        console.log(error)
    }
};

export {
    nuevaPregunta,
    obtenerPreguntas,
    obtenerPregunta,
    modificarPregunta,
    eliminarPregunta
};
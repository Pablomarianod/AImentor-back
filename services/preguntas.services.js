const preguntas = []

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

const modificarPregunta = (idPregunta, body) => {
    try {
        const posPregunta = preguntas.findIndex((preg) => preg.id === idPregunta);

        const preguntaModificada = {
            id: idPregunta,
            ...body
        };
        preguntas[posPregunta] = preguntaModificada

        return {
            pregunta,
            msg: 'Pregunta modificada',
            statusCode: 200
        };
    } catch (error) {
        return {
            msg: 'Error al modificar la pregunta',
            statusCode: 500,
            error
        };
    }
};

const eliminarPregunta = (idPregunta) => {
    try {
        const posPregunta = preguntas.findIndex((preg) => preg.id === idPregunta);
        preguntas.splice(posPregunta, 1)

        return {
            msg: 'Pregunta eliminada',
            statusCode: 200
        };
    } catch (error) {
        return {
            msg: 'Error al eliminar la pregunta',
            statusCode: 500,
            error
        };
    }
};

module.exports = {
    nuevaPregunta,
    obtenerPreguntas,
    obtenerPregunta,
    modificarPregunta,
    eliminarPregunta
};
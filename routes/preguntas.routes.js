import express from 'express';
import { CrearPregunta, EditarPregunta, EliminarPregunta, ObtenerTodasPreguntas, obtenerUnaPregunta } from '../controllers/preguntas.controllers.js';
const router = express.Router();

//GET
router.get('/', ObtenerTodasPreguntas)

router.get('/:idPregunta', obtenerUnaPregunta);


//POST
router.post('/', CrearPregunta)

//PUT
router.put('/:idPregunta', EditarPregunta)

//DELETE
router.delete('/:idPregunta', EliminarPregunta)


export default router;
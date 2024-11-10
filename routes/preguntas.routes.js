import express from 'express';
import { CrearPregunta, EditarPregunta, EliminarPregunta, ObtenerTodasPreguntas } from '../controllers/preguntas.controllers.js';
const router = express.Router();

//GET
router.get('/', ObtenerTodasPreguntas)

//POST
router.post('/', CrearPregunta)

//PUT
router.put('', EditarPregunta)

//DELETE
router.delete('', EliminarPregunta)


export default router;
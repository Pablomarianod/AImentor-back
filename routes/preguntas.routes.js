import express from 'express';
import { CrearPregunta, EditarPregunta, EliminarPregunta, ObtenerTodasPreguntas } from '../controllers/preguntas.controllers';
const router = express.Router();

//GET
router.get('/', ObtenerTodasPreguntas)

//POST
router.post('', CrearPregunta)

//PUT
router.post('', EditarPregunta)

//DELETE
router.post('', EliminarPregunta)


module.exports = router;
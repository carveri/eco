
import { Router } from "express";
import { deleteTecnologia, getAllTecnologia, getOneTecnologia, postTecnologia, updateTecnologia } from "../controllers/tecnologia.controller.js";

const router = Router()

router.get('/tecnologia', getAllTecnologia)
router.post('/tecnologia', postTecnologia)
router.get('/tecnologia/:id', getOneTecnologia)
router.delete('/tecnologia/:id', deleteTecnologia)
router.put('/tecnologia/:id', updateTecnologia)

export default router;
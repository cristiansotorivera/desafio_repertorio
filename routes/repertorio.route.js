import { Router } from "express";

import { createRepertorio, getAllRepertorio, getOneRepertorio, removeRepertorio, updateRepertorio } from "../controllers/repertorios.controller.js";
const router = Router()

router.get('/', getAllRepertorio)
router.get('/:id', getOneRepertorio)
router.post('/', createRepertorio)
router.put('/:id', updateRepertorio)
router.delete('/:id', removeRepertorio)
export default router
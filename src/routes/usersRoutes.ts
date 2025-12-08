import { Router } from "express";
import { createRecord, getRecord, getRecords } from "../controller/usersController.js";

const router = Router()
router.get('/', getRecords)
router.get('/:id', getRecord)
router.post('/', createRecord)
/*
router.put('/:id', updateRecord)
router.delete('/:id', deleteRecord)
*/
export const userRoutes = router
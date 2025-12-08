import { Router } from "express";
import { getRecords } from "../controller/usersController.js";

const router = Router()
router.get('/', getRecords)

export const userRoutes = router
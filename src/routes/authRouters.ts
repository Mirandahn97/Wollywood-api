import { Router } from "express";
import { authenticateToken } from "../middleware/authenticateToken";
import { getUserProfile } from "../controller/authController";

const router = Router()

//Først kører authenticateToken (tjek om token er gyldig). Hvis token er OK, kører getUserProfil og retunerer brugerens data
router.get('/authenticate', authenticateToken, getUserProfile)

export { router as authRoutes}
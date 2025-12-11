import { Router } from "express";
import { authenticateToken } from "../middleware/authenticateToken";
import { getUserProfile } from "../controller/authController";
import { authorizeRole } from "../middleware/authorizeRole";

const router = Router()

//Først kører authenticateToken (tjek om token er gyldig). Hvis token er OK, kører getUserProfil og retunerer brugerens data
router.get('/authenticate', authenticateToken, getUserProfile)
router.get('/authorize', authenticateToken, authorizeRole('ADMIN'), getUserProfile)

export { router as authRoutes}
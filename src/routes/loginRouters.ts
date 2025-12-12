import { Router } from 'express'
import { login } from '../controller/loginController.js'
import { authorizeRole } from '../middleware/authorizeRole.js'
import { authenticateToken } from '../middleware/authenticateToken.js'

const router = Router()

router.post('/' , authenticateToken, authorizeRole('ADMIN'), login)

export { router as loginRouter}
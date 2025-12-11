import express from 'express'
import dotenv from 'dotenv'
import { userRoutes } from './routes/usersRoutes.js'
import { cartlineRoutes } from './routes/cartlinesRoutes.js'
import { posterRoutes } from './routes/postersRoutes.js'
import { genreRoutes } from './routes/genresRoutes.js'
import { loginRouter } from './routes/loginRouters.js'
import { authRoutes } from './routes/authRouters.js'

//Indlæs miljøvariabler fra .env (uden at vise logs)
dotenv.config({ quiet: true})

//Brug port fra .env eller falde tilbage til 3000
const port = process.env.PORT || 3000

//Opret express.app
const app = express()

//Gør det muligt at modtage JSON i requests
app.use(express.json())

//Ger det muligt at modtage form-data (fx fra formularer)
app.use(express.urlencoded({ extended: true}))

//Brug vores user-routes under /api/users
app.use('/api/users', userRoutes)
app.use('/api/posters', posterRoutes)
app.use('/api/genres', genreRoutes)
app.use('/api/userRatinges', userRoutes)
app.use('/api/cartlines', cartlineRoutes)
app.use('/login', loginRouter)
app.use('/auth', authRoutes)
app.use('/auth', authRoutes)

//Start serveren 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    
})
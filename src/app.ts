import express from 'express'
import morganBody from 'morgan-body'
import cors from 'cors'
import UserRoutes from './routes/User.routes'
import { validateJWT } from './middleware/validateToken'

const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
morganBody(app)
app.use(validateJWT)

// routes
app.use('/api', UserRoutes)

export default app
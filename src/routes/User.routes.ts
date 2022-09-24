import express from 'express'

const router = express.Router()

import { getUsers, createUser, authUser } from '../controllers/UserController'

router.get('/user', getUsers)
router.post('/user', createUser)
router.post('/user/auth', authUser)

export default router

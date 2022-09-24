import express from 'express'

const router = express.Router()

import { getUsers, createUser, authUser, getUser, editUser, deleteUser } from '../controllers/UserController'

router.get('/user', getUsers)
router.post('/user', createUser)
router.post('/user/auth', authUser)
router.get('/user/:id', getUser)
router.put('/user/:id', editUser)
router.delete('/user/:id', deleteUser)

export default router

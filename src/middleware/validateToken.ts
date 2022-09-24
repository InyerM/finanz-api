import jwt from 'jsonwebtoken'
import { auth } from '../config'
import { NextFunction } from 'express'

type Payload = {
  id: string
  email: string
  phone: string
}

const validateJWT = (req: any, res: any, next: NextFunction) => {
  let token
  let decodedToken

  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
    decodedToken = jwt.verify(token, auth.jwt.secret as string) as Payload
  }
  

  // if (!token || !decodedToken.id) {
  //   return res.status(401).json({ errorMessage: 'Invalid or missing token' })
  // }

  if(token || decodedToken){ 
    const { id } = decodedToken as Payload
    req.userId = id
  }

  next()
}

const createToken = ({ email, id, phone }: Payload) => {
  const token = jwt.sign({ email, id, phone }, auth.jwt.secret as string, {
    expiresIn: auth.jwt.expiresIn,
  })
  return token
}

export {
  validateJWT,
  createToken
}
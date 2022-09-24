import { Request, Response } from "express"
import { User } from "../data"
import bcrypt from 'bcrypt'
import { createToken } from "../middleware/validateToken"

export const getUsers = async (req: any, res: Response) => {
  if(req.userId){
    try{
      const users = await User.find()
      return res.status(200).json({
        message: 'Users fetched successfully',
        results: users,
        count: users.length
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Error fetching users',
        error
      })
    }
  }
  res.status(401).json({ errorMessage: 'invalid token' })
}

export const createUser = async (req: any, res: Response) => {
  try{
    const { username, password, email, firstName, lastName, phone, dialCode, born } = req.body
    const validateUser = await User.findOne({ 
      where: [
        { username },
        { email },
        { phone }
      ] 
    })

    if(validateUser){
      return res.status(400).json({
        message: 'User already exists'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = User.create({
      username,
      password: hashedPassword,
      email,
      firstName,
      lastName,
      phone,
      dialCode,
      born: new Date(born)
    })

    await user.save()
    return res.status(201).json({
      message: 'User created successfully',
      user
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating user',
      error
    })
  }
}

export const authUser = async (req: Request, res: Response) => {
  try{
    const { username, password } = req.body
    const user = await User.findOne({ where: { username } })
    if(!user){
      return res.status(404).json({
        message: 'User not found'
      })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if(!isValidPassword){
      return res.status(401).json({
        message: 'Invalid password'
      })
    }

    const token = createToken({
      id: (user.id).toString(),
      email: user.email,
      phone: user.phone
    })

    res.status(200).json({
      message: 'User authenticated successfully',
      token
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error authenticating user',
      error
    })
  }
}

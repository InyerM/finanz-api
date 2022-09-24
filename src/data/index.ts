import { DataSource } from 'typeorm' 
import { databaseConfig } from '../config'
import { User } from './entities/User'
import { Expenses } from './entities/Expenses'
import { Budget } from './entities/Budget'

const { host, port, username, password, database } = databaseConfig

const AppDataSource = new DataSource({
  type: "postgres",
  host,
  port,
  username,
  password,
  database,
  entities: [User, Budget, Expenses],
  synchronize: true,
  logging: true
})

export {
  User,
  Budget,
  Expenses,
}

export default AppDataSource
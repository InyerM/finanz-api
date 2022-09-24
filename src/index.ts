import app from './app'
import AppDataSource from './data'
import "reflect-metadata"

const main = async () => {
  try {
    await AppDataSource.initialize()
    console.log('Database connected ✅')
  } catch (error) {
    console.log(error)
  }
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
  })
}

main()


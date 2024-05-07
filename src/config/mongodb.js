/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

// u0PHMBIRE9QMb5LU
// tanprovip156
const MONGODB_URI = 'mongodb+srv://tanprovip156:u0PHMBIRE9QMb5LU@cluster0.2vzavnt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DATABASE_NAME = 'trello-backend'
import { MongoClient, ServerApiVersion } from 'mongodb'
let trelloDatabaseInstance = null
const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi : {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async() => {
  await mongoClientInstance.connect()

  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect do DB first!')
  return trelloDatabaseInstance
}

import mongoose, { connection } from 'mongoose'

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("DB connected")
        })
    } catch(err) {
        console.log("error in db connnection " + err)
    }
}
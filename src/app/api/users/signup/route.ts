import {connect} from '@/db/db'
import User from '@/models/userModel'
import {NextRequest, NextResponse} from "next/server"
import  bcryptjs from 'bcryptjs'

connect()


export async function POST(request: NextRequest) {
    try {
       const body =  await request.json()
       const {email, password} = body;
       const existingUser = await User.find({email: email})
       if (existingUser.length > 0) {
        return NextResponse.json({
            message: "user exists"
        })
       }
       const salt = await bcryptjs.genSalt(10)
       const hashedPassword = await bcryptjs.hash(password, salt)
       const addUser = new User({
            email, password: hashedPassword
       })
       const addedUser = await addUser.save()
      return NextResponse.json({
       user: addedUser
      })
    } catch (err) {
        console.log(err)
    }
}
import {connect} from '@/db/db'
import User from '@/models/userModel'
import {NextRequest, NextResponse} from "next/server"
import  bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()


export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {email, password} = body;
        console.log(body)
        const existingUser = await User.find({email})
        console.log(existingUser)
        if (existingUser.length === 0) {
            return NextResponse.json({
                message: "user dne, pls signup"
            }, {
                status: 400
            })
        }
        const comparePassword = await bcryptjs.compare(password, existingUser[0].password)
        console.log(comparePassword)
        if (!comparePassword) {
            return NextResponse.json({
                message: "invalid id/pass"
            }, {
                status: 400
            }) 
        }
        const tokenDetails = {
            id: existingUser[0]._id,
            email: existingUser[0].email
        }
        const token = await jwt.sign(tokenDetails, process.env.TOKEN_SECRET!, {expiresIn: "1d" })
        const response = NextResponse.json({
            message: "logged in"
        })
        response.cookies.set("token", token, {
            httpOnly: true
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}
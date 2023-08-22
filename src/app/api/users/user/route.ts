import { getData } from "@/helpers/tokenData";
import { NextRequest, NextResponse } from "next/server";import User from '@/models/userModel'
import {connect} from '@/db/db'

connect()

export async function GET(request: NextRequest) {
    try {
        console.log("hello there")
        const userEmail = await getData(request)
        const userLoggedIn = await User.find({email: userEmail})
        return NextResponse.json({
            user: userLoggedIn
        })
    } catch(err) {
        console.log("oops")
        console.log(err)
    }
}

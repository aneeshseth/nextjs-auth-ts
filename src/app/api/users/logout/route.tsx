import { NextResponse } from "next/server";


export async function GET() {
    try {
        const response = NextResponse.json({
            message: "logged out"
        })
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(Date.now())
        })
        return response;
    } catch (err) {
        console.log(err)
    }
}
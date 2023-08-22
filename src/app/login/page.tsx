"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'


function page() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    async function handleLogin() {
        try {
            const response = await axios.post("/api/users/login", {
                email, password
            })
            const data = await response.data;
            console.log(data)
            router.push("/landing")
        } catch (err) {
            console.log(err)
        }
    }
    return (
      <div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" style={{color: "black"}}/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"  style={{color: "black"}}/>
          <button onClick={handleLogin}>Login</button>
          <Link href={"/signup"}>Signup?</Link>
      </div>
    )
}

export default page
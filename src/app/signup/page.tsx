"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

function page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  async function handleSignup() {
    try {
        const response = await axios.post("api/users/signup", {
            email, password
        })
        const data = await response.data;
        router.push("/login")
    } catch(err) {
        console.log(err)
    }
  }
  return (
    <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" style={{color: "black"}}/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"  style={{color: "black"}}/>
        <button onClick={handleSignup}>signup</button>
        <Link href={"/login"}>Login?</Link>
    </div>
  )
}

export default page
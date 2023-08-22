"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function page() {
  const router = useRouter()
  async function getUser() {
    const response = await axios.get("/api/users/user")
    const data = await response.data;
    console.log(data)
  }
  async function Logout() {
    try {
      const response = await axios.get("api/users/logout")
      const data = await response.data;
      router.push("/login")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <button onClick={Logout}>Logout</button>
      <button onClick={getUser}>getuser</button>
    </div>
  )
}

export default page
"use client"
import { useState } from "react"
import { Login } from "../Login"

export const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Login</button>
      <Login isVisible={showModal} onClose={() => setShowModal(false)} /> 
    </div>
  )
}
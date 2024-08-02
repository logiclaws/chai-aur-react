import { useState } from "react"
import BgChanger from "./components/BgChanger"

function App() {
  const colors = ['red','blue','green','cyan','brown', 'black']
  const defaultColor = 'white'
  return (
    <BgChanger colorCodes = {colors} defaultColor='white' />
  )
}

export default App

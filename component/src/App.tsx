import './App.css'
import Welcome from './Welcome'
import Input from './assets/Input'
import { useState } from 'react'

function App() {

const [name, setName] = useState<string>('World')

  return (
    <>
    <Input value={name}  onChange = {setName} />
    <Welcome name= {name}/>
    </>
  )
}

export default App

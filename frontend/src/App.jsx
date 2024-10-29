import Formulario from './Formulario'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [esPuto, setEsPuto] = useState('False')

  const cambiarValor = () => {
    setEsPuto(esPuto == 'False' ? 'True' : 'False')
  }

  useEffect(() => {
    alert('El valor del boton ha cambiado')
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Formulario>
        <h1>Hola</h1>
      </Formulario>
      <button onClick={cambiarValor}>{esPuto}</button>
    </>
  )
}

export default App

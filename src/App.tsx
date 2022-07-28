import {useState} from 'react'
import './App.css'
import Bloqued from './Pages/Bloqued/Bloqued'
import Navbar from './componentes/Navbar/Navbar'
function App() {
  const [acces, Setacces]=useState(false)
  const handleacces = () =>{
    let contraseña = prompt ("Escribe la contraseña, si te atreves...")
    if(contraseña == "hola"){
      Setacces(true)
    }
  }

  return(
    <div>
      {acces?
        (<Navbar/>):(<Bloqued changeacces={handleacces}/>)
      }
    </div>
  )
}

export default App

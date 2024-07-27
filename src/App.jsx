import { useEffect, useState } from 'react'

import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Inicio from './componets/Inicio'
import Nav from './navbar/Nav'

function App() {
  const [mostrarPag, setMostrarPag] = useState('Inicio')
useEffect(()=>{
console.log(mostrarPag)
},[mostrarPag])
  return (
    <HashRouter>
      {/* <Login/> */}
      <div className="grid grid-cols-6 bg-[#E9E9E9]">
        <div className="col-span-1 min-w-[300px]">
          <Nav setMostrarPag={setMostrarPag}/>
        </div>
        <div className="col-span-5">
          <Routes>
            {/* <Route path="/" element={<Inicio />} /> */}

          </Routes>
        </div>

      </div>
    </HashRouter>
  )
}

export default App

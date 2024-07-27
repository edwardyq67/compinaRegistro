import { useEffect, useState } from 'react'

import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Inicio from './componets/Inicio'
import Nav from './navbar/Nav'
import NavVertical from './navbar/NavVertical'
import ListarClientes from './componets/clientes/ListarClientes'
import Requerimiento from './componets/clientes/Requerimiento'
import CumpleañosAniversarios from './componets/clientes/CumpleañosAniversarios'
import ReporteEmail from './componets/clientes/ReporteEmail'
import Alertas from './componets/clientes/Alertas'
import SolicitudCuaderno from './componets/clientes/SolicitudCuaderno'

function App() {
  const [mostrarPag, setMostrarPag] = useState('Inicio')

  return (
    <HashRouter>
      {/* <Login/> */}
      <div className="flex bg-[#E9E9E9]">
        <div className="hidden lg:grid mr-2 min-w-[300px]">
          <Nav setMostrarPag={setMostrarPag}/>
        </div>
        <div className="w-full pt-3  lg:pl-0 lg:pr-2 px-4">
           <div className='w-[100%] p-2 rounded-md bg-white shadow-lg'>
          <NavVertical mostrarPag={mostrarPag}/>
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/Inicio" element={<Inicio />} />
            {/* clientes */}
            <Route path="/clientes/ListarClientes" element={<ListarClientes />} />
            <Route path="/clientes/Requerimiento" element={<Requerimiento />} />
            <Route path="/clientes/CumpleañosAniversario" element={<CumpleañosAniversarios />} />
            <Route path="/clientes/ReporteEmail" element={<ReporteEmail />} />
            <Route path="/clientes/Alertas" element={<Alertas />} />
            <Route path="/clientes/SolicitudCuaderno" element={<SolicitudCuaderno />} />
          </Routes>
        </div>
        </div>
       

      </div>
    </HashRouter>
  )
}

export default App

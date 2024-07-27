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
import Contacto from './componets/Status de Atencion/Contacto'
import Ingr from './componets/Status de Atencion/Ingr'
import Retornar from './componets/Status de Atencion/Retornar'
import VentasR from './componets/Status de Atencion/VentasR'
import Pendientes from './componets/Status de Atencion/Pendientes'
import Clientes from './componets/Status de Atencion/Clientes'
import VentasN from './componets/Status de Atencion/VentasN'
import Producto from './componets/Status de Atencion/Producto'
import CPotenciales from './componets/Tipos de clientes/CPotenciales'
import COcacionales from './componets/Tipos de clientes/COcacionales'
import CFrecuentes from './componets/Tipos de clientes/CFrecuentes'
import CTercerizados from './componets/Tipos de clientes/CTercerizados'
import Prospecto from './componets/Tipos de clientes/Prospecto'
import CNPotentecial from './componets/Tipos de clientes/CNPotentecial'
import MClientes from './componets/Tipos de clientes/MClientes'

function App() {
  const [mostrarPag, setMostrarPag] = useState('Inicio')

  return (
    <HashRouter>
      {/* <Login/> */}
      <div className="flex bg-[#E9E9E9]">
        <div className="hidden lg:grid  min-w-[300px]">
          <Nav setMostrarPag={setMostrarPag}/>
        </div>
        <div className="w-full pt-3 sm:mx-2 mx-1 lg:pl-0  ">
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
            {/* status de atencion*/}
            <Route path="/status/Contacto" element={<Contacto />} />
            <Route path="/status/Ingr" element={<Ingr />} />
            <Route path="/status/Retornar" element={<Retornar />} />
            <Route path="/status/VentasR" element={<VentasR />} />
            <Route path="/status/Pendientes" element={<Pendientes />} />
            <Route path="/status/Clientes" element={<Clientes />} />
            <Route path="/status/VentasN" element={<VentasN />} />
            <Route path="/status/Producto" element={<Producto />} />
            {/* Tipos de clientes */}
            <Route path="/tipos/CPotenciales" element={<CPotenciales />} />
            <Route path="/tipos/COcacionales" element={<COcacionales />} />
            <Route path="/tipos/CFrecuentes" element={<CFrecuentes />} />
            <Route path="/tipos/CTercerizados" element={<CTercerizados />} />
            <Route path="/tipos/Prospecto" element={<Prospecto />} />
            <Route path="/tipos/CNPotenciales" element={<CNPotentecial />} />
            <Route path="/tipos/MClientes" element={<MClientes />} />
          </Routes>
        </div>
        </div>
       

      </div>
    </HashRouter>
  )
}

export default App

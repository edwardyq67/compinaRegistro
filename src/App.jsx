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
import Emitir from './componets/Provedores/Emitir'
import Listar from './componets/Provedores/Listar'
import OrdenCOMPINA from './componets/Provedores/OrdenCOMPINA'
import OrdenCOMPIPRO from './componets/Provedores/OrdenCOMPIPRO'
import ListarProvedores from './componets/Logistica/ListarProvedores'
import Productos from './componets/Logistica/Productos'
import RequerimientoCotizaciones from './componets/Logistica/RequerimientoCotizaciones'
import Formato from './componets/Logistica/Formato'
import Facturacion from './componets/administracion/Facturacion'
import Cobranza from './componets/administracion/Cobranza'
import Guia from './componets/administracion/Guia'
import Cotizacion from './componets/administracion/Cotizacion'
import Nuevo from './componets/usuarios/Nuevo'
import ListarAsistencia from './componets/usuarios/ListarAsistencia'
import Documentos from './componets/Documentos'
import Inventario from './componets/Inventario'
import EmailCompipro from './componets/programar/Email/EmailCompipro'
import EmailCompina from './componets/programar/Email/EmailCompina'
import EnviadosCompipro from './componets/programar/Enviados/EnviadosCompipro'
import EnviadosCompina from './componets/programar/Enviados/EnviadosCompina'
import ProgramadoCompipro from './componets/programar/Programados/ProgramadoCompipro'
import ProgramadoCompina from './componets/programar/Programados/ProgramadoCompina'
import ResmineFormulario from './componets/formulario resmine/ResmineFormulario'
import ResmineListado from './componets/formulario resmine/ResmineListado'
import ListarUsuario from './componets/usuarios/ListarUsuario'

function App() {
  const [mostrarPag, setMostrarPag] = useState('Inicio')

  return (
    <HashRouter>
      {/* <Login/> */}
      <div className="flex bg-[#E9E9E9]">
        <div className="hidden lg:grid w-[16vw]">
          <Nav setMostrarPag={setMostrarPag}/>
        </div>
        <div className="w-[98vw] lg:w-[83vw] pt-3 sm:mx-2 mx-1 lg:pl-0  ">
           <div className=' p-2 mb-2 rounded-md bg-white shadow-lg'>
          <NavVertical mostrarPag={mostrarPag} setMostrarPag={setMostrarPag}/>
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Documentos" element={<Documentos />} />
            <Route path="/Inventario" element={<Inventario />} />
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
            {/* Provedores */}
            <Route path="/provedores/Listar" element={<Emitir />} />
            <Route path="/provedores/Emitir" element={<Listar />} />
            <Route path="/provedores/OrdenCOMPINA" element={<OrdenCOMPINA />} />
            <Route path="/provedores/OrdenCOMPIPRO" element={<OrdenCOMPIPRO />} />
            {/* Logistica */}
            <Route path="/logistica/Listar" element={<ListarProvedores />} />
            <Route path="/logistica/Emitir" element={<Productos />} />
            <Route path="/logistica/OrdenCOMPINA" element={<RequerimientoCotizaciones />} />
            <Route path="/logistica/OrdenCOMPIPRO" element={<Formato />} />
            {/* administracion */}
            <Route path="/administracion/facturacion" element={<Facturacion />} />
            <Route path="/administracion/cobranza" element={<Cobranza />} />
            <Route path="/administracion/guiaRemision" element={<Guia />} />
            <Route path="/administracion/cotizacion" element={<Cotizacion />} />
            {/* usuario */}
            <Route path="/usuario/nuevo" element={<Nuevo />} />
            <Route path="/usuario/listarUsuario" element={<ListarUsuario />} />
            <Route path="/usuario/listarAsistencia" element={<ListarAsistencia />} />
            {/* Programar */}
            <Route path="/programar/Email/Compipro" element={<EmailCompipro />} />
            <Route path="/programar/Email/Compina" element={<EmailCompina />} />
            <Route path="/programar/Enviados/Compipro" element={<EnviadosCompipro />} />
            <Route path="/programar/Enviados/Compina" element={<EnviadosCompina />} />
            <Route path="/programar/Programados/Compipro" element={<ProgramadoCompipro />} />
            <Route path="/programar/Programados/Compina" element={<ProgramadoCompina />} />
            {/* Formulario Resmine */}
            <Route path="/FormularioResmine/Formulario" element={<ResmineFormulario />} />
            <Route path="/FormularioResmine/Email/Listado" element={<ResmineListado />} />
          </Routes>
        </div>
        </div>
       

      </div>
    </HashRouter>
  )
}

export default App

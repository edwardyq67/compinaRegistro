import { useEffect, useRef, useState } from 'react'

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
import ListarProvedores from './componets/Logistica/Rutas'
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
  // Cliente
  // lista de cliente
  const [agregarClienteListarCliente, setAgregarClienteListarCliente] = useState(false)
  // agregar
  const [activarAgregarClienteListarCliene, setActivarAgregarClienteListarCliene] = useState('Informacion')
  const isActivarAgregarClienteListarCliene = (tab) => activarAgregarClienteListarCliene === tab;
  return (
    <HashRouter>
      {/* <Login/> */}
      <div className={`${agregarClienteListarCliente ? 'h-[100vh] relative flex overflow-y-hidden' : 'flex overflow-x-hidden'} relative  bg-[#E9E9E9]`} >
        <div className="hidden lg:grid w-[16vw]">
          <Nav setMostrarPag={setMostrarPag} />
        </div>
        <div className="w-[98vw] lg:w-[83vw] pt-3 sm:mx-2 mx-1 lg:pl-0 ">
          <div className=' p-2 mb-2 rounded-md bg-white shadow-lg'>
            <NavVertical mostrarPag={mostrarPag} setMostrarPag={setMostrarPag} />
          </div>
          <div className="w-full ">
            <Routes>
              <Route path="/Inicio" element={<Inicio />} />
              <Route path="/Documentos" element={<Documentos />} />
              <Route path="/Inventario" element={<Inventario />} />
              {/* clientes */}
              <Route path="/clientes/ListarClientes" element={<ListarClientes setAgregarClienteListarCliente={setAgregarClienteListarCliente} agregarClienteListarCliente={agregarClienteListarCliente} />} />
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
              <Route path="/provedores/Listar" element={<Listar />} />
              <Route path="/provedores/Emitir" element={<Emitir />} />
              <Route path="/provedores/OrdenCOMPINA" element={<OrdenCOMPINA />} />
              <Route path="/provedores/OrdenCOMPIPRO" element={<OrdenCOMPIPRO />} />
              {/* Logistica */}
              <Route path="/logistica/Rutas" element={<ListarProvedores />} />
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

        <div className={`${agregarClienteListarCliente ? 'visible' : 'invisible hidden '}  flex justify-center items-center absolute w-[100vw] min-h-[100vh]`}>
          <div  onClick={()=>setAgregarClienteListarCliente(!agregarClienteListarCliente)} className=" absolute  bg-black opacity-50 w-[100vw] h-[100vh] z-10"></div>
          <div className="z-20 grid mx-2 bg-white col-span-4 grid-cols-4 max-h-[80vh] overflow-hidden rounded-md overflow-y-auto">
            <div className="flex justify-around col-span-4 bg-[#969696]  pt-2">
              <section onClick={() => setActivarAgregarClienteListarCliene('Informacion')} className={`${isActivarAgregarClienteListarCliene('Informacion') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} flex rounded-t-md  font-medium transition-all cursor-pointer py-1 px-2 text-sm`}>
                Informacion Personal
              </section>
              <section onClick={() => setActivarAgregarClienteListarCliene('Trabajo')} className={`${isActivarAgregarClienteListarCliene('Trabajo') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} flex rounded-t-md  select-none   font-medium cursor-pointer py-1 px-2 text-sm`}>
                Trabajo
              </section>
              <section onClick={() => setActivarAgregarClienteListarCliene('Estado')} className={`${isActivarAgregarClienteListarCliene('Estado') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} flex rounded-t-md  select-none  font-medium cursor-pointer py-1 px-2 text-sm`}>
                Estado
              </section>
              <section onClick={() => setActivarAgregarClienteListarCliene('Documento')} className={`${isActivarAgregarClienteListarCliene('Documento') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} flex rounded-t-md  select-none  font-medium cursor-pointer py-1 px-2 text-sm`}>
                Documento
              </section>
            </div>
            <form className={`${isActivarAgregarClienteListarCliene('Informacion') ? 'grid' : 'hidden'} grid-cols-4 col-span-4 px-2 gap-x-2 gap-y-4 py-4`}>
              <div className="col-span-4 sm:col-span-2 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Usuario</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="Nombre Apellido" required />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Correo</label>
                  <input type="email" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="ejample@gmail.com" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Skype</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Cumpleaños</label>
                  <input type="date" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Telefono</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="(01) 12345678" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Celular</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="123456789" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Entel</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">RPC</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">RPM</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Pais</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="Peru" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Cuidad</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="Lima" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Provincia</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="Lima" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Distrito</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="San juan de Lurigancho" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">C.Postal</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="1234" required />
                </span>
              </div>
              <div className="col-span-4 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Dirección</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="direcion .ejample" required />
                </span>
              </div>
              <div className="col-span-4 ">
                <span>
                  <label for="message" className="block mb-2 text-sm font-medium">Referencia</label>
                  <textarea id="message" rows="4" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="referencia. . ."></textarea>
                </span>
              </div>
              <div className="col-span-4 flex gap-2 sm:col-span-2 md:col-span-1 ">
                <button className="flex 1 items-center py-1 px-2 font-medium rounded-md text-white gap-2 justify-center text-sm bg-[#969696]">
                  <i className="fa-solid fa-broom"></i>
                  <h3 className='whitespace-nowrap' >Limpiar</h3>
                </button>

                <button  onClick={()=>setAgregarClienteListarCliente(!agregarClienteListarCliente)} className="flex 1 items-center py-1 font-medium px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#cc2630]">
                  <i className="fa-solid fa-ban"></i>
                  <h3 className='whitespace-nowrap ' >Cancelar</h3>
                </button>
              </div>
            </form>
            <form className={`${isActivarAgregarClienteListarCliene('Trabajo') ? 'grid' : 'hidden'} grid-cols-4 col-span-4 px-2 gap-x-2 gap-y-4 py-4`}>
              <div className="col-span-4 sm:col-span-2 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">RUC</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="Nombre Apellido" required />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Direccion</label>
                  <input type="email" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="ejample@gmail.com" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Razon Comercial</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Razon social</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Obs. Direccion</label>
                  <input type="texto" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Cargo</label>
                  <input type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="Nombre Apellido" required />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Aniversario</label>
                  <input type="email" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="ejample@gmail.com" required />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Rubro</label>
                  <input type="date" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Codigo</label>
                  <input type="texto" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Tipo de Cliente</label>

                  <select
                    id="countries"
                    className="font-light bg-white border border-[#969696] p-2.5 w-full text-black text-sm rounded-md block  focus:outline-none"

                  >
                    <option value="">Todos</option>
                    <option value="Ninguno">Ninguno</option>
                    <option value="Potenciales">Potenciales</option>
                    <option value="Frecuentes">Frecuentes</option>
                    <option value="Ocasionales">Ocasionales</option>
                    <option value="Tercerizadores">Tercerizadores</option>
                    <option value="Prospecto">Prospecto</option>
                    <option value="No Potencial">No Potencial</option>
                    <option value="Mal Cliente">Mal Cliente</option>
                  </select>
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Estatus Atencion</label>
                  <select
                    id="countries"
                    className=" font-light p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none "

                  >
                    <option selected value="">todos</option>
                    <option value="Contacto Inicial" >Contacto Inicial</option>
                    <option value="Retomar Contacto" >Retomar Contacto</option>
                    <option value="Pendientes por Cotizar" >Pendientes por Cotizar</option>
                    <option value="Cotizado" >Cotizado</option>
                    <option value="Venta Realizado" >Venta Realizado</option>
                    <option value="Venta No Realizado" >Venta No Realizado</option>
                    <option value="Prod. Entregado" >Prod. Entregado</option>
                  </select>
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 ">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Detalle Origen</label>
                  <select
                    id="countries"
                    className=" font-light p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none "

                  >
                    <option selected value="">Seleccione</option>
                    <option value="Contacto Inicial" >Pag Web</option>
                    <option value="Retomar Contacto" >Mailing</option>
                    <option value="Pendientes por Cotizar" >Facebook</option>
                    <option value="Cotizado" >Chat</option>
                    <option value="Venta Realizado" >Llamadas</option>
                    <option value="Venta No Realizado" >Referidos</option>
                    <option value="Prod. Entregado" >Otros</option>
                  </select>
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label for="first_name" className="block mb-2 text-sm font-medium ">Pagina Web</label>
                  <input type="texto" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block  focus:outline-none" placeholder="" required />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-3 grid grid-cols-6 gap-x-2 gap-y-1 ">

                  <label for="first_name" className="col-span-6 block mb-2 text-sm font-medium ">Dirección</label>
 
                    <div className="col-span-3 sm:col-span-2 flex items-center">
                      <input
                        id="default-checkbox1"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                      />
                      <label
                        htmlFor="default-checkbox1"
                        className="ms-1 text-sm whitespace-nowrap"
                      >
                        Carta de Presentacion
                      </label>
                    </div>
                    <div className="col-span-3 sm:col-span-2 flex items-center">
                      <input
                        id="default-checkbox2"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                      />
                      <label
                        htmlFor="default-checkbox2"
                        className="ms-1 text-sm whitespace-nowrap"
                      >
                        Catalogo
                      </label>
                    </div>
                    <div className="col-span-3 sm:col-span-2 flex items-center">
                      <input
                        id="default-checkbox3"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                      />
                      <label
                        htmlFor="default-checkbox3"
                        className="ms-1 text-sm whitespace-nowrap"
                      >
                        Pack Promocional
                      </label>
                    </div>

              </div>
              <div className="grid grid-cols-4 col-span-4">
                <div className="col-span-4 flex gap-2 sm:col-span-2 md:col-span-1 ">
                  <button className="flex 1 items-center py-1 px-2 font-medium rounded-md text-white gap-2 justify-center text-sm bg-[#969696]">
                    <i className="fa-solid fa-broom"></i>
                    <h3 className='whitespace-nowrap' >Limpiar</h3>
                  </button>

                  <button  onClick={()=>setAgregarClienteListarCliente(!agregarClienteListarCliente)} className="flex 1 items-center py-1 font-medium px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#cc2630]">
                    <i className="fa-solid fa-ban"></i>
                    <h3 className='whitespace-nowrap ' >Cancelar</h3>
                  </button>
                </div>
              </div>

            </form>


          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default App

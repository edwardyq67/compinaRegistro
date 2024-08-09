import { useEffect, useRef, useState } from 'react'

import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import { useForm } from 'react-hook-form';
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
import { useDispatch } from 'react-redux';
import { postClienteListarCliente, putClienteListarCliente } from './store/slices/clienteListarCliente';
import axios from 'axios';
import ProtectedRoutes from './login/ProtectedRoutes';

function App() {

  const { register: postClienteRegister, handleSubmit: postClienteHandleSubmit, reset: postClienteReset, setValue: postClienteRest } = useForm();
  const { register: putClienteRegister, handleSubmit: putClienteHandleSubmit, reset: putClienteRest, setValue: putClienteSetValue } = useForm();
  const { register: register3, handleSubmit: handleSubmit3, reset: reset3, setValue: setValue3 } = useForm();

  const dispatch = useDispatch();
  const [mostrarPag, setMostrarPag] = useState('')
  const [ruta, setRutas] = useState("")
  // Cliente
  // lista de cliente
  const [agregarClienteListarCliente, setAgregarClienteListarCliente] = useState(false)
  // agregar
  const [activarAgregarClienteListarCliene, setActivarAgregarClienteListarCliene] = useState('Informacion')
  const isActivarAgregarClienteListarCliene = (tab) => activarAgregarClienteListarCliene === tab;
  // editar
  const [idClienteClienteListarCliete, setidClienteListarCliete] = useState('')
  const [idClieteEdit, setIdClienteEdit] = useState('')
  const [idActivarClienteClienteListarCliete, setidActivarClienteListarCliete] = useState(false)

  useEffect(() => {
    setRutas(location.pathname);
  }, [location.pathname]);
  const submit = async (data) => {
    const processedData = {
      Usuario: data.Usuario || "",
      E_Mail: data.E_Mail || "",
      Skype: data.Skype || "",
      Cumpleaños: data.Cumpleaños || "",
      Telefono: data.Telefono || "",
      Celular: data.Celular || "",
      Entel: data.Entel || "",
      RPC: data.RPC || "",
      RPM: data.RPM || "",
      Pais: data.Pais || "",
      Ciudad: data.Ciudad || "",
      Provincia: data.Provincia || "",
      Distrito: data.Distrito || "",
      C_postal: data.C_postal || "",
      Dirección: data.Dirección || "",
      Referencia: data.Referencia || "",
      RUC: data.RUC || "",
      Obs_Direccion_Empresa: data.Obs_Direccion_Empresa || "",
      Razon_Comercial: data.Razon_Comercial || "",
      Razon_Social: data.Razon_Social || "",
      Obs_direccion: data.Obs_direccion || "",
      Cargo: data.Cargo || "",
      Aniversario: data.Aniversario || "",
      Rubro: data.Rubro || "",
      Codigo: data.Codigo || "",
      Tipos_Cliente: data.Tipos_Cliente || "",
      Status_atencion: data.Status_atencion || "",
      Origen: data.Origen || "",
      Web: data.Web || "",
      C_presentacion: data.C_presentacion === "true" ? true : false,
      Catalogo: data.Catalogo === "true" ? true : false,
      P_presentacion: data.P_presentacion === "true" ? true : false,
      id: data.id
    };

    try {
      await dispatch(postClienteListarCliente(processedData));
 
    } catch (error) {
      console.error('Error al enviar los datos:', error.response?.data || error.message);
    }
  };

  const editIdCliente = async (data) => {
    const processedDataEdit = {
      Usuario: data.Usuario || "",
      E_Mail: data.E_Mail || "",
      Skype: data.Skype || "",
      Cumpleaños: data.Cumpleaños || "",
      Telefono: data.Telefono || "",
      Celular: data.Celular || "",
      Entel: data.Entel || "",
      RPC: data.RPC || "",
      RPM: data.RPM || "",
      Pais: data.Pais || "",
      Ciudad: data.Ciudad || "",
      Provincia: data.Provincia || "",
      Distrito: data.Distrito || "",
      C_postal: data.C_postal || "",
      Dirección: data.Dirección || "",
      Referencia: data.Referencia || "",
      RUC: data.RUC || "",
      Obs_Direccion_Empresa: data.Obs_Direccion_Empresa || "",
      Razon_Comercial: data.Razon_Comercial || "",
      Razon_Social: data.Razon_Social || "",
      Obs_direccion: data.Obs_direccion || "",
      Cargo: data.Cargo || "",
      Aniversario: data.Aniversario || "",
      Rubro: data.Rubro || "",
      Codigo: data.Codigo || "",
      Tipos_Cliente: data.Tipos_Cliente || "",
      Status_atencion: data.Status_atencion || "",
      Origen: data.Origen || "",
      Web: data.Web || "",
      C_presentacion: data.C_presentacion === "true" ? true : false,
      Catalogo: data.Catalogo === "true" ? true : false,
      P_presentacion: data.P_presentacion === "true" ? true : false,
      id: idClieteEdit
    };

    try {
      await dispatch(putClienteListarCliente(processedDataEdit));
 
    } catch (error) {
      console.error('Error al enviar los datos:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (idClienteClienteListarCliete) { // Verifica que idClienteClienteListarCliete no esté vacío o no sea null
      axios.get(`http://localhost:8080/cliente/listarCliente/${idClienteClienteListarCliete}`)
        .then(res => {
          setIdClienteEdit(res.data.id); // Actualiza el ID del cliente
          const data = res.data;

          // Establece los valores en el formulario usando setValue
          for (const key in data) {
            if (data.hasOwnProperty(key)) { // Verifica si la propiedad pertenece al objeto
              putClienteSetValue(key, data[key] || ''); // Usa un valor predeterminado si el valor es undefined
            }
          }
        })
        .catch(error => {
          console.error('Error al cargar los datos del cliente:', error.response?.data || error.message);
        });
    }
  }, [idClienteClienteListarCliete, idActivarClienteClienteListarCliete, putClienteSetValue]); // Agrega setValue a las dependencias si es necesario


  return (
    <HashRouter>

      <div className={`${agregarClienteListarCliente ? 'h-[100vh] relative flex overflow-y-hidden' : 'flex overflow-x-hidden'} relative  bg-[#E9E9E9]`} >
        <div className={`${ruta === '/' ? 'hidden' : 'hidden lg:grid w-[16vw]'}`}>
        
          <Nav setMostrarPag={setMostrarPag} />
        </div>

        <div className={`${ruta === '/' ? 'w-[100vw]' : 'w-[98vw] lg:w-[83vw] min-h-[100vh] pt-3 sm:mx-2 mx-1 lg:pl-0'}`}>
          <div className={`${ruta === '/' ? 'hidden' : 'p-2 mb-2 bg-white rounded-md shadow-lg'}`}>
            <NavVertical setRutas={setRutas} mostrarPag={mostrarPag} setMostrarPag={setMostrarPag} />
          </div>
          <div className="w-full ">
            <Routes>
              <Route path='/' element={<Login ruta={ruta} setRutas={setRutas} />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/Documentos" element={<Documentos />} />
                <Route path="/Inventario" element={<Inventario />} />
                {/* clientes */}
                <Route path="/clientes/ListarClientes" element={<ListarClientes setidActivarClienteListarCliete={setidActivarClienteListarCliete} setidClienteListarCliete={setidClienteListarCliete} setAgregarClienteListarCliente={setAgregarClienteListarCliente} agregarClienteListarCliente={agregarClienteListarCliente} />} />
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
              </Route>
            </Routes>
          </div>
        </div>
        <div className={`${idActivarClienteClienteListarCliete ? 'visible' : 'invisible hidden '}  flex justify-center items-center absolute w-[100vw] min-h-[100vh]`}>
          <div onClick={() => setidActivarClienteListarCliete(false)} className=" absolute  bg-black opacity-50 w-[100vw] h-[100vh] z-10"></div>
          <form onSubmit={putClienteHandleSubmit(editIdCliente)} className="z-20 grid  mx-2 bg-white col-span-4 grid-cols-4 max-h-[80vh] overflow-hidden rounded-md overflow-y-auto">
            <div className="flex justify-around col-span-4 bg-[#969696]  pt-2">
              <section onClick={() => setActivarAgregarClienteListarCliene('Informacion')} className={`${isActivarAgregarClienteListarCliene('Informacion') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} min-w-[48%]  flex rounded-t-md  font-medium transition-all cursor-pointer py-1 px-2 text-sm`}>
                <h6 className='mx-auto'>
                  Informacion Personal
                </h6>

              </section>
              <section onClick={() => setActivarAgregarClienteListarCliene('Trabajo')} className={`${isActivarAgregarClienteListarCliene('Trabajo') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} flex rounded-t-md   min-w-[48%] select-none   font-medium cursor-pointer py-1 px-2 text-sm`}>
                <h6 className='mx-auto'>
                  Trabajoos
                </h6>

              </section>
              {/* <section onClick={() => setActivarAgregarClienteListarCliene('Estado')} className={`${isActivarAgregarClienteListarCliene('Estado') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} flex rounded-t-md  select-none  font-medium cursor-pointer py-1 px-2 text-sm`}>
                Estado
              </section>
              <section onClick={() => setActivarAgregarClienteListarCliene('Documento')} className={`${isActivarAgregarClienteListarCliene('Documento') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} flex rounded-t-md  select-none  font-medium cursor-pointer py-1 px-2 text-sm`}>
                Documento
              </section> */}
            </div>
            <section className={`${isActivarAgregarClienteListarCliene('Informacion') ? 'grid' : 'hidden'} grid-cols-4 col-span-4 px-2 gap-x-2 gap-y-4 py-4`}>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium">Usuario</label>
                  <input  {...putClienteRegister("Usuario")} type="text" id="first_name" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Nombre Apellido" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Correo</label>
                  <input  {...putClienteRegister("E_Mail")} type="email" id="email" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="ejemplo@gmail.com" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="skype" className="block mb-2 text-sm font-medium">Skype</label>
                  <input {...putClienteRegister("Skype")} type="text" id="skype" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="birthday" className="block mb-2 text-sm font-medium">Cumpleaños</label>
                  <input {...putClienteRegister("Cumpleaños")} type="date" id="birthday" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">Telefono</label>
                  <input {...putClienteRegister("Telefono")} type="text" id="phone" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="(01) 12345678" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="cellphone" className="block mb-2 text-sm font-medium">Celular</label>
                  <input {...putClienteRegister("Celular")} type="text" id="cellphone" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="123456789" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="entel" className="block mb-2 text-sm font-medium">Entel</label>
                  <input {...putClienteRegister("Entel")} type="text" id="entel" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="rpc" className="block mb-2 text-sm font-medium">RPC</label>
                  <input {...putClienteRegister("RPC")} type="text" id="rpc" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="rpm" className="block mb-2 text-sm font-medium">RPM</label>
                  <input {...putClienteRegister("RPM")} type="text" id="rpm" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="country" className="block mb-2 text-sm font-medium">País</label>
                  <input {...putClienteRegister("Pais")} type="text" id="country" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Perú" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="city" className="block mb-2 text-sm font-medium">Ciudad</label>
                  <input {...putClienteRegister("Ciudad")} type="text" id="city" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Lima" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="province" className="block mb-2 text-sm font-medium">Provincia</label>
                  <input {...putClienteRegister("Provincia")} type="text" id="province" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Lima" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="district" className="block mb-2 text-sm font-medium">Distrito</label>
                  <input {...putClienteRegister("Distrito")} type="text" id="district" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="San Juan de Lurigancho" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="postal_code" className="block mb-2 text-sm font-medium">C.Postal</label>
                  <input {...putClienteRegister("C_postal")} type="text" id="postal_code" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="1234" />
                </span>
              </div>
              <div className="col-span-4">
                <span>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium">Dirección</label>
                  <input {...putClienteRegister("Direccion")} type="text" id="address" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Dirección Ejemplo" />
                </span>
              </div>
              <div className="col-span-4">
                <span>
                  <label htmlFor="reference" className="block mb-2 text-sm font-medium">Referencia</label>
                  <textarea {...putClienteRegister("Referencia")} id="reference" rows="4" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Referencia..."></textarea>
                </span>
              </div>
              <div className="grid grid-cols-4 col-span-4">
                <div className="col-span-4 flex gap-2  ">
                  <button onClick={() => putClienteRest()} type="button" className="flex 1 items-center py-1 px-2 font-medium rounded-md text-white gap-2 justify-center text-sm bg-[#969696]">
                    <i className="fa-solid fa-broom"></i>
                    <h3 className='whitespace-nowrap' >Limpiar</h3>
                  </button>

                  <button type="button" onClick={() => setidActivarClienteListarCliete(false)} className="flex 1 items-center py-1 font-medium px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#cc2630]">
                    <i className="fa-solid fa-ban"></i>
                    <h3 className='whitespace-nowrap ' >Cancelar</h3>
                  </button>
                  <button type="submit" onClick={() => [setidActivarClienteListarCliete(false)]} className="flex 1 items-center py-1 font-medium px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                    <i className="fa-solid fa-folder-open"></i>
                    <h3 className='whitespace-nowrap ' >Guardar</h3>
                  </button>
                </div>
              </div>
            </section>
            <section className={`${isActivarAgregarClienteListarCliene('Trabajo') ? 'grid' : 'hidden'} grid-cols-4 col-span-4 px-2 gap-x-2 gap-y-4 py-4`}>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="ruc" className="block mb-2 text-sm font-medium">RUC</label>
                  <input {...putClienteRegister("RUC")} type="text" id="ruc" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Nombre Apellido" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="direccion" className="block mb-2 text-sm font-medium">Direccion de Empresa</label>
                  <input {...putClienteRegister("Obs_Direccion_Empresa")} type="text" id="direccion" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="ejample@gmail.com" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="razon_comercial" className="block mb-2 text-sm font-medium">Razon Comercial</label>
                  <input {...putClienteRegister("Razon_Comercial")} type="text" id="razon_comercial" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="razon_social" className="block mb-2 text-sm font-medium">Razon social</label>
                  <input {...putClienteRegister("Razon_Social")} type="text" id="razon_social" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="obs_direccion" className="block mb-2 text-sm font-medium">Obs. Direccion</label>
                  <input {...putClienteRegister("Obs_direccion")} type="text" id="obs_direccion" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="cargo" className="block mb-2 text-sm font-medium">Cargo</label>
                  <input {...putClienteRegister("Cargo")} type="text" id="cargo" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Nombre Apellido" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="aniversario" className="block mb-2 text-sm font-medium">Aniversario</label>
                  <input type="date" {...putClienteRegister("Aniversario")} id="aniversario" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="ejample@gmail.com" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="rubro" className="block mb-2 text-sm font-medium">Rubro</label>
                  <input {...putClienteRegister("Rubro")} type="text" id="rubro" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="codigo" className="block mb-2 text-sm font-medium">Codigo</label>
                  <input {...putClienteRegister("Codigo")} type="text" id="codigo" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="tipo_cliente" className="block mb-2 text-sm font-medium">Tipo de Cliente</label>
                  <select {...putClienteRegister("Tipos_Cliente")} id="tipo_cliente" className="font-light bg-white border border-[#969696] p-2.5 w-full text-black text-sm rounded-md block focus:outline-none">
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
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="estatus_atencion" className="block mb-2 text-sm font-medium">Estatus Atencion</label>
                  <select {...putClienteRegister("Status_atencion")} id="estatus_atencion" className="font-light p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none">
                    <option selected value="">todos</option>
                    <option value="Contacto Inicial">Contacto Inicial</option>
                    <option value="Retomar Contacto">Retomar Contacto</option>
                    <option value="Pendientes por Cotizar">Pendientes por Cotizar</option>
                    <option value="Cotizado">Cotizado</option>
                    <option value="Venta Realizado">Venta Realizado</option>
                    <option value="Venta No Realizado">Venta No Realizado</option>
                    <option value="Prod. Entregado">Prod. Entregado</option>
                  </select>
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="detalle_origen" className="block mb-2 text-sm font-medium">Detalle Origen</label>
                  <select {...putClienteRegister("Origen")} id="detalle_origen" className="font-light p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none">
                    <option selected value="">Seleccione</option>
                    <option value="Pag Web">Pag Web</option>
                    <option value="Mailing">Mailing</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Chat">Chat</option>
                    <option value="Llamadas">Llamadas</option>
                    <option value="Referidos">Referidos</option>
                    <option value="Otros">Otros</option>
                  </select>
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="pagina_web" className="block mb-2 text-sm font-medium">Pagina Web</label>
                  <input {...putClienteRegister("Web")} type="text" id="pagina_web" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-3 grid grid-cols-6 gap-x-2 gap-y-1">
                <label htmlFor="direccion" className="col-span-6 block mb-2 text-sm font-medium">Acciones Realizadas</label>
                <div className="col-span-3 sm:col-span-2 flex items-center">
                  <input id="checkbox1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#969696] focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="checkbox1" {...putClienteRegister("C_presentacion")} className="ml-2 text-xs font-light">Carta de Presentacion</label>
                </div>
                <div className="col-span-3 sm:col-span-2 flex items-center">
                  <input id="checkbox2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#969696] focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="checkbox2" {...putClienteRegister("Catalogo")} className="ml-2 text-xs font-light">Catalogo</label>
                </div>
                <div className="col-span-3 sm:col-span-2 flex items-center">
                  <input id="checkbox3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#969696] focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="checkbox3"{...putClienteRegister("P_presentacion")} className="ml-2 text-xs font-light">Pack Promocional</label>
                </div>
              </div>
              <div className="grid grid-cols-4 col-span-4">
                <div className="col-span-4 flex gap-2  ">
                  <button type="button" onClick={() => putClienteRest()} className="flex 1 items-center py-1 px-2 font-medium rounded-md text-white gap-2 justify-center text-sm bg-[#969696]">
                    <i className="fa-solid fa-broom"></i>
                    <h3 className='whitespace-nowrap' >Limpiar</h3>
                  </button>

                  <button type="button" onClick={() => setidActivarClienteListarCliete(false)} className="flex 1 items-center py-1 font-medium px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#cc2630]">
                    <i className="fa-solid fa-ban"></i>
                    <h3 className='whitespace-nowrap ' >Cancelar</h3>
                  </button>
                  <button type="submit" onClick={() => [setidActivarClienteListarCliete(false)]} className="flex 1 items-center py-1 font-medium px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                    <i className="fa-solid fa-folder-open"></i>
                    <h3 className='whitespace-nowrap ' >Guardar</h3>
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>
        <div className={`${agregarClienteListarCliente ? 'visible' : 'invisible hidden '}  flex justify-center items-center absolute w-[100vw] min-h-[100vh]`}>
          <div onClick={() => setAgregarClienteListarCliente(false)} className=" absolute  bg-black opacity-50 w-[100vw] h-[100vh] z-10"></div>
          <form onSubmit={postClienteHandleSubmit(submit)} className="z-20 grid  mx-2 bg-white col-span-4 grid-cols-4 max-h-[80vh] overflow-hidden rounded-md overflow-y-auto">
            <div className="flex justify-around col-span-4 bg-[#969696]  pt-2">
              <section onClick={() => setActivarAgregarClienteListarCliene('Informacion')} className={`${isActivarAgregarClienteListarCliene('Informacion') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} min-w-[48%]  flex rounded-t-md  font-medium transition-all cursor-pointer py-1 px-2 text-sm`}>
                <h6 className='mx-auto'>
                  Informacion Personal
                </h6>

              </section>
              <section onClick={() => setActivarAgregarClienteListarCliene('Trabajo')} className={`${isActivarAgregarClienteListarCliene('Trabajo') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} flex rounded-t-md   min-w-[48%] select-none   font-medium cursor-pointer py-1 px-2 text-sm`}>
                <h6 className='mx-auto'>
                  Trabajo
                </h6>

              </section>
              {/* <section onClick={() => setActivarAgregarClienteListarCliene('Estado')} className={`${isActivarAgregarClienteListarCliene('Estado') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} flex rounded-t-md  select-none  font-medium cursor-pointer py-1 px-2 text-sm`}>
                Estado
              </section>
              <section onClick={() => setActivarAgregarClienteListarCliene('Documento')} className={`${isActivarAgregarClienteListarCliene('Documento') ? 'bg-white text-[#969696]' : 'bg-[#969696] text-white hover:bg-white hover:text-[#969696] duration-150 transition-all'} flex rounded-t-md  select-none  font-medium cursor-pointer py-1 px-2 text-sm`}>
                Documento
              </section> */}
            </div>
            <section className={`${isActivarAgregarClienteListarCliene('Informacion') ? 'grid' : 'hidden'} grid-cols-4 col-span-4 px-2 gap-x-2 gap-y-4 py-4`}>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium">Usuario</label>
                  <input {...postClienteRegister("Usuario")} type="text" id="Usuario" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Nombre Apellido" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Correo</label>
                  <input {...postClienteRegister("E_Mail")} type="email" id="email" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="ejemplo@gmail.com" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="skype" className="block mb-2 text-sm font-medium">Skype</label>
                  <input {...postClienteRegister("Skype")} type="text" id="skype" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="birthday" className="block mb-2 text-sm font-medium">Cumpleaños</label>
                  <input {...postClienteRegister("Cumpleaños")} type="date" id="birthday" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">Telefonsao</label>
                  <input {...postClienteRegister("Telefono")} type="text" id="phone" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="(01) 12345678" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="cellphone" className="block mb-2 text-sm font-medium">Celular</label>
                  <input {...postClienteRegister("Celular")} type="text" id="cellphone" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="123456789" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="entel" className="block mb-2 text-sm font-medium">Entel</label>
                  <input {...postClienteRegister("Entel")} type="text" id="entel" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="rpc" className="block mb-2 text-sm font-medium">RPC</label>
                  <input {...postClienteRegister("RPC")} type="text" id="rpc" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="rpm" className="block mb-2 text-sm font-medium">RPM</label>
                  <input {...postClienteRegister("RPM")} type="text" id="rpm" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="country" className="block mb-2 text-sm font-medium">País</label>
                  <input {...postClienteRegister("Pais")} type="text" id="country" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Perú" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="city" className="block mb-2 text-sm font-medium">Ciudad</label>
                  <input {...postClienteRegister("Ciudad")} type="text" id="city" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Lima" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="province" className="block mb-2 text-sm font-medium">Provincia</label>
                  <input {...postClienteRegister("Provincia")} type="text" id="province" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Lima" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="district" className="block mb-2 text-sm font-medium">Distrito</label>
                  <input {...postClienteRegister("Distrito")} type="text" id="district" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="San Juan de Lurigancho" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="postal_code" className="block mb-2 text-sm font-medium">C.Postal</label>
                  <input {...postClienteRegister("C_postal")} type="text" id="postal_code" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="1234" />
                </span>
              </div>
              <div className="col-span-4">
                <span>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium">Dirección</label>
                  <input {...postClienteRegister("Direccion")} type="text" id="address" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Dirección Ejemplo" />
                </span>
              </div>
              <div className="col-span-4">
                <span>
                  <label htmlFor="reference" className="block mb-2 text-sm font-medium">Referencia</label>
                  <textarea {...postClienteRegister("Referencia")} id="reference" rows="4" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Referencia..."></textarea>
                </span>
              </div>
              <div className="grid grid-cols-4 col-span-4">
                <div className="col-span-4 flex gap-2  ">
                  <button onClick={() => postClienteReset()} type="button" className="flex 1 items-center py-1 px-2 font-medium rounded-md text-white gap-2 justify-center text-sm bg-[#969696]">
                    <i className="fa-solid fa-broom"></i>
                    <h3 className='whitespace-nowrap' >Limpiar</h3>
                  </button>

                  <button type="button" onClick={() => setAgregarClienteListarCliente(false)} className="flex 1 items-center py-1 font-medium px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#cc2630]">
                    <i className="fa-solid fa-ban"></i>
                    <h3 className='whitespace-nowrap ' >Cancelar</h3>
                  </button>
                  <button type="submit" onClick={() => [setAgregarClienteListarCliente(false)]} className="flex 1 items-center py-1 font-medium px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                    <i className="fa-solid fa-folder-open"></i>
                    <h3 className='whitespace-nowrap ' >Guardar</h3>
                  </button>
                </div>
              </div>
            </section>
            <section className={`${isActivarAgregarClienteListarCliene('Trabajo') ? 'grid' : 'hidden'} grid-cols-4 col-span-4 px-2 gap-x-2 gap-y-4 py-4`}>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="ruc" className="block mb-2 text-sm font-medium">RUC</label>
                  <input {...postClienteRegister("RUC")} type="text" id="ruc" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Nombre Apellido" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="direccion" className="block mb-2 text-sm font-medium">Direccion de Empresa</label>
                  <input {...postClienteRegister("Obs_Direccion_Empresa")} type="text" id="direccion" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="ejample@gmail.com" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="razon_comercial" className="block mb-2 text-sm font-medium">Razon Comercial</label>
                  <input {...postClienteRegister("Razon_Comercial")} type="text" id="razon_comercial" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="razon_social" className="block mb-2 text-sm font-medium">Razon social</label>
                  <input {...postClienteRegister("Razon_Social")} type="text" id="razon_social" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="obs_direccion" className="block mb-2 text-sm font-medium">Obs. Direccion</label>
                  <input {...postClienteRegister("Obs_direccion")} type="text" id="obs_direccion" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="cargo" className="block mb-2 text-sm font-medium">Cargo</label>
                  <input {...postClienteRegister("Cargo")} type="text" id="cargo" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="Nombre Apellido" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="aniversario" className="block mb-2 text-sm font-medium">Aniversario</label>
                  <input type="date" {...postClienteRegister("Aniversario")} id="aniversario" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="ejample@gmail.com" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="rubro" className="block mb-2 text-sm font-medium">Rubro</label>
                  <input {...postClienteRegister("Rubro")} type="text" id="rubro" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="codigo" className="block mb-2 text-sm font-medium">Codigo</label>
                  <input {...postClienteRegister("Codigo")} type="text" id="codigo" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="tipo_cliente" className="block mb-2 text-sm font-medium">Tipo de Cliente</label>
                  <select {...postClienteRegister("Tipos_Cliente")} id="tipo_cliente" className="font-light bg-white border border-[#969696] p-2.5 w-full text-black text-sm rounded-md block focus:outline-none">
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
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="estatus_atencion" className="block mb-2 text-sm font-medium">Estatus Atencion</label>
                  <select {...postClienteRegister("Status_atencion")} id="estatus_atencion" className="font-light p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none">
                    <option selected value="">todos</option>
                    <option value="Contacto Inicial">Contacto Inicial</option>
                    <option value="Retomar Contacto">Retomar Contacto</option>
                    <option value="Pendientes por Cotizar">Pendientes por Cotizar</option>
                    <option value="Cotizado">Cotizado</option>
                    <option value="Venta Realizado">Venta Realizado</option>
                    <option value="Venta No Realizado">Venta No Realizado</option>
                    <option value="Prod. Entregado">Prod. Entregado</option>
                  </select>
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span>
                  <label htmlFor="detalle_origen" className="block mb-2 text-sm font-medium">Detalle Origen</label>
                  <select {...postClienteRegister("Origen")} id="detalle_origen" className="font-light p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none">
                    <option selected value="">Seleccione</option>
                    <option value="Pag Web">Pag Web</option>
                    <option value="Mailing">Mailing</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Chat">Chat</option>
                    <option value="Llamadas">Llamadas</option>
                    <option value="Referidos">Referidos</option>
                    <option value="Otros">Otros</option>
                  </select>
                </span>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <span>
                  <label htmlFor="pagina_web" className="block mb-2 text-sm font-medium">Pagina Web</label>
                  <input {...postClienteRegister("Web")} type="text" id="pagina_web" className="p-2.5 w-full bg-white border border-[#969696] text-black text-sm rounded-md block focus:outline-none" placeholder="" />
                </span>
              </div>
              <div className="col-span-4 sm:col-span-3 grid grid-cols-6 gap-x-2 gap-y-1">
                <label htmlFor="direccion" className="col-span-6 block mb-2 text-sm font-medium">Acciones Realizadas</label>
                <div className="col-span-3 sm:col-span-2 flex items-center">
                  <input id="checkbox1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#969696] focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="checkbox1" {...postClienteRegister("C_presentacion")} className="ml-2 text-xs font-light">Carta de Presentacion</label>
                </div>
                <div className="col-span-3 sm:col-span-2 flex items-center">
                  <input id="checkbox2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#969696] focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="checkbox2" {...postClienteRegister("Catalogo")} className="ml-2 text-xs font-light">Catalogo</label>
                </div>
                <div className="col-span-3 sm:col-span-2 flex items-center">
                  <input id="checkbox3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#969696] focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="checkbox3"{...postClienteRegister("P_presentacion")} className="ml-2 text-xs font-light">Pack Promocional</label>
                </div>
              </div>
              <div className="grid grid-cols-4 col-span-4">
                <div className="col-span-4 flex gap-2  ">
                  <button onClick={() => postClienteReset()} type="button" className="flex 1 items-center py-1 px-2 font-medium rounded-md text-white gap-2 justify-center text-sm bg-[#969696]">
                    <i className="fa-solid fa-broom"></i>
                    <h3 className='whitespace-nowrap' >Limpiar</h3>
                  </button>

                  <button type="button" onClick={() => setAgregarClienteListarCliente(false)} className="flex 1 items-center py-1 font-medium px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#cc2630]">
                    <i className="fa-solid fa-ban"></i>
                    <h3 className='whitespace-nowrap ' >Cancelar</h3>
                  </button>
                  <button type="submit" onClick={() => [setAgregarClienteListarCliente(false)]} className="flex 1 items-center py-1 font-medium px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                    <i className="fa-solid fa-folder-open"></i>
                    <h3 className='whitespace-nowrap ' >Guardar</h3>
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>

      </div>
    </HashRouter>
  )
}

export default App

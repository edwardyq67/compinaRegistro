import React, { useEffect, useState } from 'react'
import ejemploData from '../../ejemplo.json'
import { useDispatch, useSelector } from 'react-redux';
import { getClienteListarCliente } from '../../store/slices/clienteListarCliente';

function ListarClientes({setAgregarClienteListarCliente,agregarClienteListarCliente}) {
  const dispatch = useDispatch();
const [nRegistro,setNRegistro]=useState(10)
const [idClientes,setIdCliente]=useState('')
const[buscarPor,setBuscarPor]=useState('')
const [busqueda,setBusqueda]=useState('');
const[fAtencionDesde,setFAtencionDesde]=useState('')
const [fAtencionHasta,setFAtencionHasta]=useState('')
  const [filterTiposDeClientes, setFilterTiposDeClientes] = useState('');
  const [filterStatusAtencion, setFilterStatusAtencion] = useState('');
  const [cumpleaños, setCumpleaños] = useState('');
  const [page, setPage] = useState(1);
  const [fAtencion, setFAtencion] = useState(true);
  const mesNumber = {
    "Enero": 1, "Febrero": 2, "Marzo": 3, "Abril": 4, "Mayo": 5, "Junio": 6,
    "Julio": 7, "Agosto": 8, "Septiembre": 9, "Octubre": 10, "Noviembre": 11, "Diciembre": 12
  };

  const loading = useSelector((state) => state.clienteLitarCliente);

useEffect(()=>{
dispatch(getClienteListarCliente())
},[])

  const paseDateStirng = (dataStr) => {
    const [dia, mes] = dataStr.split(' de ')
    const mesIndex = mesNumber[mes]
    return new Date(`${new Date().getFullYear()}-${mesIndex}-${dia.padStart(2, '0')}`);
  }
  // Función para manejar el cambio de selección

  const datos = loading
    .filter(TipyCliente => filterTiposDeClientes === '' || TipyCliente.Tipos_Cliente.includes(filterTiposDeClientes))
    .filter(statusAtencion => filterStatusAtencion === '' || statusAtencion.Status_atencion.includes(filterStatusAtencion))
    .sort((a, b) => {
      if (fAtencion) {
        // Orden ascendente
        const dateA = paseDateStirng(a.F_Atencion);
        const dateB = paseDateStirng(b.F_Atencion);
        return dateA - dateB;
      } else {
        // Orden descendente
        const dateA = paseDateStirng(a.F_Atencion);
        const dateB = paseDateStirng(b.F_Atencion);
        return dateB - dateA;
      }
    })
    .filter(cumple => cumpleaños === '' || cumple.Cumpleaños.includes(cumpleaños))
    .filter(idClien=>idClientes===''|| idClien.id === Number(idClientes))
    .filter(buscar => busqueda === '' || buscar[buscarPor].toLowerCase().includes(busqueda.toLowerCase()))
    .filter(cliente => {
      const fechaAtencion = paseDateStirng(cliente.F_Atencion);
      const desde = fAtencionDesde ? new Date(fAtencionDesde) : new Date('1970-01-01');
      const hasta = fAtencionHasta ? new Date(fAtencionHasta) : new Date();
  
      return fechaAtencion >= desde && fechaAtencion <= hasta; });
    ;


  const lidatos = nRegistro;
  const lastCharacterIndex = page * lidatos; //15;
  const firstCharacterIndex = lastCharacterIndex - lidatos;
  const charactersPaginated = datos.slice(
    firstCharacterIndex,
    lastCharacterIndex
  );
  const totalPgaginas = Math.ceil(datos.length / lidatos);
  const pagNumber = [];
  for (let i = 1; i <= totalPgaginas; i++) {
    pagNumber.push(i);
  }

  return (
    <main className="">
      <div className="flex mb-2 ">
        <form className="grid rounded-md bg-white shadow-lg p-2 gap-2 divide-y ">

          <div className="grid lg:flex gap-2 divide-x-0 lg:divide-x">
            <div className=" grid grid-cols-2 gap-2">
              <button onClick={()=>setAgregarClienteListarCliente(!agregarClienteListarCliente)} className="flex items-center py-1 px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                <i className="fa-solid fa-user-plus"></i>
                <h3>Agragar Cliente</h3>
              </button>
              <button className="flex 1 items-center py-1 px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                <i className="fa-solid fa-trash-can"></i>
                <h3 className='whitespace-nowrap' >Registro eliminados</h3>
              </button>
              <div className="flex items-center py-1 px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                <i className="fa-solid fa-pen-to-square"></i>
                <h3 className='whitespace-nowrap'>Actualizar Resultados</h3>
              </div>
            </div>
            <form className="pl-2 grid gap-2 justify-end mx-auto">
              <div className="flex gap-2 items-center justify-start">
                <label htmlFor="" className='font-medium text-sm w-[80px]'>Buscar por: </label>
                <select id="countries" onChange={(e)=>setBuscarPor(e.target.value)}  className=" py-1 w-[74%] bg-white border border-[#969696] text-black text-sm rounded-md  block  px-2 focus:outline-none ">
                  <option selected>todos</option>
                  <option value="Razon_Comercial">Razon Comercial</option>
                  <option value="Razon_Social">Razon Social</option>
                  <option value="Nombre">Nombres</option>
                  <option value="Apellido">Apellidos</option>
                  <option value="Usuario">Usuario</option>
                  <option value="Rubro">Rubro</option>
                  <option value="RUC">RUC</option>
                  <option value="Telefono">Teléfono</option>
                  <option value="Celular">Celular</option>
                  <option value="F_Atencion">Fecha de Atencion</option>
                  <option value="Direccion">Direccion Cliente</option>
                  <option value="Obs_Direccion_Empresa">Direccion Empresa</option>
                  <option value="E_Mail">Emails</option>
                  <option value="web">Web</option>
                </select>
              </div>
              <div className="flex gap-2 items-center justify-start">
                <label htmlFor="" className='font-medium text-sm'>Busqueda:  </label>
                <div className="relative flex items-center">
                  <input
                    id="registro-1"
                    type="text"
                    onChange={e=>setBusqueda(e.target.value)}
                    className="py-1 bg-white border border-[#969696] text-black text-sm rounded-md block px-2 pr-8 focus:outline-none"
                  />
                  <i className="cursor-pointer fa-solid fa-magnifying-glass absolute right-2 text-gray-500"></i>
                </div>
              </div>
            </form>
            <form action="">
              <div className="py-1 px-2 sm:flex grid gap-2 ">
                <div className="flex justify-around sm:grid gap-2">
                  <div className="flex items-center ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 "
                    />
                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium ">
                      Fecha de Aviso
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 "
                    />
                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium">
                      Fecha de Atencion
                    </label>
                  </div>
                </div>
                  <div className="grid gap-1 ml-2">
                    <div className="flex col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 gap-2 items-center justify-center lg:justify-end">
                      <label htmlFor="registro-1" className="font-medium text-sm">Desde: </label>
                      <input
                      onChange={e=>setFAtencionDesde(e.target.value)}
                        id="registro-1"
                        type="date"
                        className="py-1 bg-white border border-[#969696] text-black text-sm rounded-md block px-2 pr-8 focus:outline-none"
                      />
                    </div>
                    <div className="flex col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 gap-2 items-center justify-center lg:justify-end">
                      <label htmlFor="registro-1" className="font-medium text-sm">Hasta: </label>
                      <input
                      onChange={e=>setFAtencionHasta(e.target.value)}
                        id="registro-1"
                        type="date"
                        className="py-1 bg-white border border-[#969696] text-black text-sm rounded-md block px-2 pr-8 focus:outline-none"
                      />
                    </div>
                  </div>

              </div>
            </form>

          </div>

          <div className="grid grid-cols-6 pt-2 gap-4">
   
            <div className="flex col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 gap-2 items-center justify-center lg:justify-end">
              <label htmlFor="registro-1" className="font-medium text-sm">N° Registro</label>
              {/* <div className="relative flex items-center"> */}
                    <input
                id="registro-1"
                type="number"
                min={1}
                value={nRegistro}
                
                onChange={e=>setNRegistro(e.target.value)}
                className="py-1 select-none bg-white border border-[#969696] text-black text-sm rounded-md block px-2 focus:outline-none"
              />
              {/* <div className="absolute w-[90%] left-0  bg-transparent h-full">

              </div> */}
              {/* </div> */}
          
            </div>
            <div className="flex col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 items-center justify-center gap-2 lg:justify-end">
              <label htmlFor="registro-2" className="font-medium text-sm">ID del Cliente</label>
              <input
                id="registro-2"
                type="number"
                onChange={e=>setIdCliente(e.target.value)}
                className="py-1 bg-white border border-[#969696] text-black text-sm rounded-md block px-2 focus:outline-none"
              />
            </div>
            <div className="flex col-span-6 lg:col-span-2 items-center justify-center">
              <label className="font-medium text-sm">
                <i className="text-yellow-400 fa-solid fa-triangle-exclamation"></i> Actualmente hay <span className="text-[#0087c8]">{loading.length} cliente</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className=' overflow-hidden'>
        {/*  scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent */}
        <div className=" relative overflow-x-auto shadow-md sm:rounded-lg lg:max-w-[83vw]" >
          <table className="w-full text-sm text-left rtl:text-right text-black overflow-y-auto ">
            <thead className="text-xs text-white uppercase  bg-[#0087c8]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center ">
                    <span className="sr-only">Edit</span>
                  </h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">N°</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">Usuario</h4>
                </th>
                <th scope="col" className="px-6 py-3" >
                  <h4 className="text-center">
                    <div className="flex items-center justify-center">
                      F.atencion
                      <a ><svg onClick={() => setFAtencion(!fAtencion)} className="cursor-pointer w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg></a>
                    </div>
                  </h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center whitespace-nowrap">Razon Commercial</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center whitespace-nowrap mx-auto">Razon Social</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">Rubro</h4>
                </th>
                <th scope="col" className="px-6 py-3 flex items-center gap-1">
                  <h4 className="text-center whitespace-nowrap">Tipos de Cliente</h4>
                  <select
                    id="countries"
                    className="py-1 font-light bg-white border border-[#969696] text-black text-sm rounded-md block px-1 focus:outline-none"
                    onChange={(e) => setFilterTiposDeClientes(e.target.value)}
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
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[200px]">Origen</h4>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  <h4 className="text-center w-[200px] mx-auto">Status</h4>
                </th>
                <th scope="col" className="px-6 py-3 flex items-center gap-1">
                  <h4 className="text-center whitespace-nowrap ">Status Atencion</h4>
                  <select
                    id="countries"
                    className="py-1 font-light bg-white border border-[#969696] text-black text-sm rounded-md block px-1 focus:outline-none "
                    onChange={(e) => setFilterStatusAtencion(e.target.value)}
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
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center whitespace-nowrap">Nombre</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center ">Apellido</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center ">Cargo</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center ">Entel</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center ">Telefono</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center ">RUC</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center ">Celular</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">RPC</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">RPM</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center ">E-Mail</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center ">Web</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center ">Dirección</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center whitespace-nowrap">Direccion de Empresa</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">Referencia</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">Distrito</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">Ciudad</h4>
                </th>
                <th scope="col" className="px-6 py-3 flex items-center gap-1">
                  <h4 className="text-center  ">Cumpleaños</h4>
                  <select
                    id="countries"
                    className="py-1 font-light bg-white border border-[#969696] text-black text-sm rounded-md block px-1 focus:outline-none"
                    onChange={(e) => setCumpleaños(e.target.value)}
                  >
                    <option selected value="">todos</option>
                    <option value="Enero">Enero</option>
                    <option value="Febrero">Febrero</option>
                    <option value="Marzo">Marzo</option>
                    <option value="Abril">Abril</option>
                    <option value="Mayo">Mayo</option>
                    <option value="Junio">Junio</option>
                    <option value="Julio">Julio</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Septiembre">Septiembre</option>
                    <option value="Octubre">Octubre</option>
                    <option value="Noviembre">Noviembre</option>
                    <option value="Diciembre">Diciembre</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center whitespace-nowrap">Aniversario</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center whitespace-nowrap">Skype</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                charactersPaginated.map((cliente, index) => (
                  <tr key={index} className="bg-white border-b divide-x ">
                    <td className="px-4 py-2 text-center gap-1 flex mt-1">
                      <button  className="px-2 font-medium py-1 whitespace-nowrap text-white bg-[#0087c8] rounded flex justify-center items-center gap-1">
                        <i className="fa-solid fa-pen-to-square"></i>Edit
                      </button>
                      <button className="px-2 font-medium py-1 whitespace-nowrap text-white bg-[#cc2630] rounded flex justify-center items-center gap-1">
                        <i className="fa-solid fa-lock"></i>Proteger
                      </button>
                    </td>
                    <th scope="row" className="px-4 py-2 text-center font-medium text-black whitespace-nowrap ">
                      {cliente.id}
                    </th>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Usuario || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.F_Atencion || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Razon_Comercial || ' '}
                    </td>
                    <td className="px-4 whitespace-nowrap  py-2 text-center ">
                      {cliente.Razon_Social || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Rubro || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Tipos_Cliente || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Origen || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Status || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Status_atencion || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Nombre || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Apellido || ' '}
                    </td>
                    <td className="px-4 whitespace-nowrap  py-2 text-center">
                      {cliente.Cargo || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Entel || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Telefono || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.RUC || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Celular || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.RPC || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.RPM || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.E_Mail || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Web || ' '}
                    </td>
                    <td className="px-4 whitespace-nowrap  py-2 text-center">
                      {cliente.Direccion || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap ">
                      {cliente.Obs_Direccion_Empresa || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Referencia || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Distrito || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Ciudad || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Cumpleaños || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Aniversario || ' '}
                    </td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {cliente.Skype || ' '}
                    </td>
                  </tr>
                ))
              }
            </tbody>

          </table>
        </div>

      </div>
      <div className="flex mt-2 p-2 justify-center">
        <nav aria-label="" className="flex justify-center">
          <ul className="inline-flex -space-x-px text-[1.1em] ">
            <li>
              <a
                onClick={() => setPage(1)}
                className="text-sm cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight rounded-l-lg border-r-2 border-white bg-[#0087c8] text-white hover:bg-[#3381a8]"
              >
                <i className="fa-solid fa-angles-left"></i>
              </a>
            </li>
            {pagNumber.map((number) => (
              <li key={number}>
                <a
                  onClick={() => setPage(number)}
                  className="text-sm cursor-pointer flex items-center justify-center px-3 h-8 bg-[#0087c8] border-r-2 border-white  text-white hover:bg-[#3381a8]"
                >
                  {number}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setPage(totalPgaginas)}
                className="text-sm cursor-pointer flex items-center justify-center px-3 h-8 leading-tight bg-[#0087c8] text-white hover:bg-[#3381a8] rounded-e-lg "
              >
                <i className="fa-solid fa-angles-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </main>
  )
}

export default ListarClientes
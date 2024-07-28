import React, { useState } from 'react'
import ejemploData from '../../ejemplo.json'
function ListarClientes() {
  const [selectedValue, setSelectedValue] = useState('');

  // Función para manejar el cambio de selección
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  console.log(ejemploData.clientes.Listar_Clientes[0].Cargo)
  return (
    <main className="">
      <div className="flex mb-2">
        <form className="grid rounded-md bg-white shadow-lg p-2 gap-2 divide-y">
          <div className="grid lg:flex gap-2">
            <div className="grid md:flex gap-2">
              <div className="col-span-4 md:col-span-2 lg:col-span-1 grid grid-cols-2 gap-2">
                <button className="flex col-span-1 items-center py-1 px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                  <i className="fa-solid fa-user-plus"></i>
                  <h3>Agragar Cliente</h3>
                </button>
                <button className="flex col-span-1 items-center py-1 px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                  <i className="fa-solid fa-trash-can"></i>
                  <h3>Registro eliminados</h3>
                </button>
                <div className="flex col-span-1 items-center py-1 px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                  <i className="fa-solid fa-pen-to-square"></i>
                  <h3 className=''>Actualizar Resultados</h3>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 lg:col-span-1 grid gap-2 justify-end mx-auto">

                <div className="flex gap-2 items-center justify-start">
                  <label htmlFor="" className='font-medium text-sm w-[80px]'>Buscar por: </label>
                  <select id="countries" className=" py-1 w-[74%] bg-white border border-[#969696] text-black text-sm rounded-md  block  px-2 focus:outline-none ">
                    <option selected>todos</option>
                    <option value="c.empresa">Empresa</option>
                    <option value="c.razon">Razon Social</option>
                    <option value="c.nombres">Nombres</option>
                    <option value="c.apellidos">Apellidos</option>
                    <option value="u.usuario">Usuarios</option>
                    <option value="c.rubro">Rubro</option>
                    <option value="c.ruc">RUC</option>
                    <option value="c.telefono">Teléfono</option>
                    <option value="c.celular">Celular</option>
                    <option value="c.fatencion">Fecha de Atencion</option>
                    <option value="c.direccion">Direccion Cliente</option>
                    <option value="c.direccion2">Direccion Empresa</option>
                    <option value="groupemail.tcvc_email">Emails</option>
                    <option value="c.web">Web</option>
                  </select>
                </div>
                <div className="flex gap-2 items-center justify-start">
                  <label htmlFor="" className='font-medium text-sm'>Datos de Busqueda:  </label>
                  <input type="text" className=" py-1 bg-white border  border-[#969696] text-black text-sm rounded-md  block  px-2 focus:outline-none" />
                </div>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-2 flex md:mx-auto mx-0">
              <div className="grid  grid-cols-3 border border-[#969696]  rounded-md px-2 py-1 divide-x-none md:divide-x gap-1 shadow-md md:w-auto w-full">
                <div className="grid p-1 col-span-4 md:col-span-1">
                  <div className="flex items-center mb-4">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="option1"
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 focus:outline-none"
                      checked={selectedValue === 'option1'}
                      onChange={handleChange}
                    />
                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">
                      Fecha de aviso
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="option2"
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 focus:outline-none"
                      checked={selectedValue === 'option2'}
                      onChange={handleChange}
                    />
                    <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 ">
                      Fecha de atencion
                    </label>
                  </div>
                </div>
                <div className="flex pl-2 gap-2 col-span-4 md:col-span-2">
                  <div className="grid justify-end gap-1">
                    <div className="flex gap-2 items-center justify-end">
                      <label htmlFor="" className='font-medium text-sm'>Desde:  </label>
                      <input type="text" className=" py-1 bg-white border  border-[#969696] text-black text-sm rounded-md  block  px-2 focus:outline-none" />
                    </div>
                    <div className="flex gap-2 items-center justify-end">
                      <label htmlFor="" className='font-medium text-sm'>Hasta:  </label>
                      <input type="text" className=" py-1 bg-white border  border-[#969696] text-black text-sm rounded-md  block  px-2 focus:outline-none" />
                    </div>
                  </div>
                  <button className="flex justify-center items-center mx-auto ">
                    <i className="bg-red-400 h-[50px] w-[50px] flex justify-center items-center rounded-md text-white text-[1.2em] cursor-pointer fa-solid fa-magnifying-glass"></i>
                  </button>

                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-6 pt-2 gap-4">
            <div className="flex col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 gap-2 items-center justify-center lg:justify-end">
              <label htmlFor="registro-1" className="font-medium text-sm">N° Registro</label>
              <input
                id="registro-1"
                type="number"
                className="py-1 bg-white border border-[#969696] text-black text-sm rounded-md block px-2 focus:outline-none"
              />
            </div>
            <div className="flex col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 items-center justify-center gap-2 lg:justify-end">
              <label htmlFor="registro-2" className="font-medium text-sm">ID del Cliente</label>
              <input
                id="registro-2"
                type="number"
                className="py-1 bg-white border border-[#969696] text-black text-sm rounded-md block px-2 focus:outline-none"
              />
            </div>
            <div className="flex col-span-6 lg:col-span-2 items-center justify-center">
              <label className="font-medium text-sm">
                <i className="text-yellow-400 fa-solid fa-triangle-exclamation"></i> Actualmente hay <span className="text-[#0087c8]">1 cliente</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className=' overflow-hidden'>
        <div className=" relative overflow-x-auto shadow-md sm:rounded-lg lg:max-w-[83vw]">
          <table className="w-full text-sm text-left rtl:text-right text-black overflow-y-auto ">
            <thead className="text-xs text-white uppercase bg-[#0087c8]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[100px]">
                    <span className="sr-only">Edit</span>
                  </h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">N°</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">Usuario</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">
                    <div className="flex items-center justify-center">
                      F.atencion
                      <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg></a>
                    </div>
                  </h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">Razon Commercial</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[100px] mx-auto">Razon Social</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">Rubro</h4>
                </th>
                <th scope="col" className="px-6 py-3 flex items-center gap-1">
                  <h4 className="text-center w-[100px]">tipos de Cliente</h4>
                  <select id="countries" className="py-1 font-light bg-white border border-[#969696] text-black text-sm rounded-md block px-1 focus:outline-none ">
                    <option selected>todos</option>
                    <option value="0">Ninguno</option>
                    <option value="1">Potenciales</option>
                    <option value="2">Frecuentes</option>
                    <option value="3">Ocasionales</option>
                    <option value="4">Tercerizadores</option>
                    <option value="5">Prospecto</option>
                    <option value="6">No Potencial</option>
                    <option value="7">Mal Cliente</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[200px]">Origen</h4>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  <h4 className="text-center w-[200px] mx-auto">Status</h4>
                </th>
                <th scope="col" className="px-6 py-3 flex items-center gap-1">
                  <h4 className="text-center w-[100px] ">Status Atencion</h4>
                  <select id="countries" className="py-1 font-light bg-white border border-[#969696] text-black text-sm rounded-md block px-1 focus:outline-none ">
                    <option selected>todos</option>
                    <option value="In">Contacto Inicial</option>
                    <option value="RC">Retomar Contacto</option>
                    <option value="PC">Pendientes por Cotizar</option>
                    <option value="C">Cotizado</option>
                    <option value="VR">Venta Realizado</option>
                    <option value="VNR">Venta No Realizado</option>
                    <option value="PE">Prod. Entregado</option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[100px]">Nombre</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[100px]">Apellido</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[50px]">Cargo</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[50px]">Entel</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[50px]">Telefono</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[50px]">RUC</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[50px]">Celular</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">RPC</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">RPM</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[100px]">E-Mail</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[200px]">Web</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[200px]">Dirección</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[200px]">Direccion de Empresa</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[200px]">Referencia</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">Distrito</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center">Ciudad</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[100px]">Cumpleaños</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[100px]">Aniversario</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[100px]">Skype</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                ejemploData.clientes.Listar_Clientes.map((cliente, index) => (
                  <tr key={index} className="bg-white border-b divide-x">
                    <td className="px-4 py-2 text-center gap-1 grid">
                      <a href="#" className="font-medium py-1 text-white bg-[#0087c8] rounded flex justify-center items-center gap-1">
                        <i className="fa-solid fa-pen-to-square"></i>Edit
                      </a>
                      <a href="#" className="font-medium py-1 text-white bg-[#cc2630] rounded flex justify-center items-center gap-1">
                        <i className="fa-solid fa-lock"></i>Proteger
                      </a>
                    </td>
                    <th scope="row" className="px-4 py-2 text-center font-medium text-black whitespace-nowrap min-w-[80px]">
                      {index + 1}
                    </th>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Usuario || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.F_Atecncion || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Razon_Comercial || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[200px]">
                      {cliente.Razon_Social || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Rubro || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Tipos_Cliente || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Origen || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[200px]">
                      {cliente.Status || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[200px]">
                      {cliente.Status_atencion || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Nombre || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Apellido || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Cargo || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Entel || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Telefono || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.RUC || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Celular || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.RPC || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.RPM || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[200px]">
                      {cliente.E_Mail || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[200px]">
                      {cliente.Web || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[200px]">
                      {cliente.Direccion || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[200px]">
                      {cliente.Obs_Direccion_Empresa || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[200px]">
                      {cliente.Referencia || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Distrito || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Ciudad || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Cumpleaños || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Aniversario || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Skype || ' '}
                    </td>
                  </tr>
                ))
              }
            </tbody>

          </table>
        </div>

      </div>

    </main>
  )
}

export default ListarClientes
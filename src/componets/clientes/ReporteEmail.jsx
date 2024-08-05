import React, { useState } from 'react'
import ejemploData from '../../ejemplo.json'
function ReporteEmail() {
  const [selectedValue, setSelectedValue] = useState('');
  const [filterTiposDeClientes, setFilterTiposDeClientes] = useState('');
  const [filterStatusAtencion, setFilterStatusAtencion] = useState('');
  const [page, setPage] = useState(1);
  const [fAtencion, setFAtencion] = useState(true);
  const mesNumber = {
    "Enero": 1, "Febrero": 2, "Marzo": 3, "Abril": 4, "Mayo": 5, "Junio": 6,
    "Julio": 7, "Agosto": 8, "Septiembre": 9, "Octubre": 10, "Noviembre": 11, "Diciembre": 12
  };

  const paseDateStirng = (dataStr) => {
    const [dia, mes] = dataStr.split(' de ')
    const mesIndex = mesNumber[mes]
    return new Date(`${new Date().getFullYear()}-${mesIndex}-${dia.padStart(2, '0')}`);
  }
  // Función para manejar el cambio de selección
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const datos = ejemploData.clientes.ReporteEmail
  //  .sort((a, b) => {
  //     if (fAtencion) {
  //       // Orden ascendente
  //       const dateA = paseDateStirng(a.F_Atencion);
  //       const dateB = paseDateStirng(b.F_Atencion);
  //       return dateA - dateB;
  //     } else {
  //       // Orden descendente
  //       const dateA = paseDateStirng(a.F_Atencion);
  //       const dateB = paseDateStirng(b.F_Atencion);
  //       return dateB - dateA;
  //     }
  //   });

  const lidatos = 10;
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
      <div className="flex mb-2">
        <form className="grid w-full md:w-auto rounded-md bg-white shadow-lg p-2 gap-2 divide-y">
          <div className="grid lg:flex gap-2 ">
            <div className="grid md:flex gap-2  ">

              <button className="flex  items-center py-1 px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                <h3>AGREGAR <br />REQUERIMIENTO</h3>
              </button>

              <div className="sm:flex grid  gap-2 justify-end mx-auto">

                <div className="flex gap-1 sm:gap-2 items-center justify-start">
                  <input type="text" className=" py-1  bg-white border  border-[#969696] text-black text-sm rounded-md  block  px-2 focus:outline-none" />
                  <label htmlFor="" className='font-medium text-sm'> <button className="flex items-center py-1 px-2 rounded-md text-white gap-2 justify-center text-sm bg-[#0087c8]">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <h3>BUSCAR</h3>
                  </button>  </label>
                  <button className="hidden sm:flex items-center py-1 px-2 rounded-md text-white gap-1 justify-center text-sm bg-[#0087c8]">
                    <img className='w-[1em]' src="https://compina.net/soluciones/sistema_cmr_compipro/sistema_cmr/images/seleccionar.png" alt="" />
                    <h3>ACTUALIZAR</h3>
                  </button>
                </div>
                <button className="flex sm:hidden items-center py-1 px-2 rounded-md text-white gap-1 justify-center text-sm bg-[#0087c8]">
                  <img className='w-[1em]' src="https://compina.net/soluciones/sistema_cmr_compipro/sistema_cmr/images/seleccionar.png" alt="" />
                  <h3>ACTUALIZAR</h3>
                </button>
              </div>
            </div>
          </div>
          {/* 
        <div className="grid grid-cols-6 pt-2 gap-2">
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
        </div> */}
        </form>
      </div>
      <div className=' overflow-hidden'>
        {/*  scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent */}
        <div className=" relative overflow-x-auto shadow-md sm:rounded-lg lg:max-w-[83vw]" >
          <table className="w-full text-sm text-left rtl:text-right text-black overflow-y-auto ">
            <thead className="text-xs text-white uppercase bg-[#0087c8]">
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
                  <h4 className="text-center">Fecha_de_Envio</h4>
                </th>
                <th scope="col" className="px-6 py-3" >
                  <h4 className="text-center w-[200px]">
                    <div className="flex items-center justify-center">
                    Fecha_de_Lectura
                      {/* <a ><svg onClick={() => setFAtencion(!fAtencion)} className="cursor-pointer w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg></a> */}
                    </div>
                  </h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[200px]">compañia</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[100px] mx-auto">Gmail</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[200px]">Clics</h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="text-center w-[100px]">Fecha_de_Registro</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                charactersPaginated.map((cliente, index) => (
                  <tr key={index} className="bg-white border-b divide-x">
                    <td className="px-4 py-2 text-center gap-1 mt-1 flex">
                      <a href="#" className="whitespace-nowrap font-medium py-1 w-auto px-2 text-white bg-[#0087c8] rounded flex justify-center items-center gap-1">
                        Edit Cliente
                      </a>
                      <a href="#" className="font-medium py-1 w-auto px-2 text-white bg-[#cc2630] rounded flex justify-center items-center gap-2">
                        Editar <br />Requerimiento
                      </a>
                      <div href="#" className="font-medium py-1 w-auto text-white bg-[#09c510] rounded flex justify-center items-center gap-1">
                        <select id="countries" className=" border bg-transparent border-[#09c510] text-white text-sm rounded-md  block  px-2 focus:outline-none ">
                          <option className='bg-[#09c510]' value="" selected disabled>Seleccione</option>

                          <option className='bg-[#09c510]' value="idconsulta">PENDIENTE</option>
                          <option className='bg-[#09c510]' value="usuario">ATENDIDO</option>
                          <option className='bg-[#09c510]' value="usuario">SE DEJA DE ATENDER</option>
                        </select>
                      </div>
                    </td>
                    <th scope="row" className="px-4 py-2 text-center font-medium text-black whitespace-nowrap min-w-[80px]">
                      {cliente.id}
                    </th>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Fecha_de_Envio || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Fecha_de_Lectura || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[200px]">
                      {cliente.compañia || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Gmail || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Clics || ' '}
                    </td>
                    <td className="px-4 py-2 text-center min-w-[150px]">
                      {cliente.Fecha_de_Registro || ' '}
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

export default ReporteEmail
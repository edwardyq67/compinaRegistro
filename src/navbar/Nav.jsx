import React, { useEffect, useState } from 'react';

function Nav({ setMostrarPag }) {
    const [activeTab, setActiveTab] = useState('Inicio');
    const [activeClientesOption, setActiveClientesOption] = useState('Listar Clientes');
    const [activeStatusOption, setActiveStatusOption] = useState('Contacto inicial');
    const [activeTiposOption, setActiveTiposOption] = useState('Clientes potenciales');
    const [activeProvedoresOption, setActiveProvedoresOption] = useState('Listar provedores');
    const [activeLogisticaOption, setActiveLogisticaOption] = useState('Rutas');
    const [activeAdministracionOption, setActiveAdministracionOption] = useState('Facturacion');
    const [activeUsuarioOption, setActiveUsuarioOption] = useState('Nuevo');
    const [activeProgramadoOption, setActiveProgramadoOption] = useState('Enviar Email Compipro');
    const [activeFormularioOption, setActiveFormularioOption] = useState('Formulario');

    const isActive = (tab) => activeTab === tab;
    const isActiveClientes = (option) => activeClientesOption === option;
    const isActiveStatus = (option) => activeStatusOption === option;
    const isActiveTipos = (option) => activeTiposOption === option;
    const isActiveProvedores = (option) => activeProvedoresOption === option;
    const isActiveLogistica = (option) => activeLogisticaOption === option;
    const isActiveAdministracion = (option) => activeAdministracionOption === option;
    const isActiveUsuario = (option) => activeUsuarioOption === option;
    const isActiveProgramado = (option) => activeProgramadoOption === option;
    const isActiveFormulario = (option) => activeFormularioOption === option;

    useEffect(() => {
        if (activeTab === 'Inicio'|| activeTab === 'Documentos'|| activeTab === 'Inventario') {
            setMostrarPag(activeTab);
        } else if (activeTab === 'Clientes') {
            setMostrarPag(activeClientesOption);
        } else if (activeTab === 'Status de atencion') {
            setMostrarPag(activeStatusOption);
        } else if (activeTab === 'Tipos de Clientes') {
            setMostrarPag(activeTiposOption)
        } else if (activeTab === 'Provedores') {
            setMostrarPag(activeProvedoresOption)
        } else if (activeTab === 'Logistica') {
            setMostrarPag(activeLogisticaOption)
        } else if (activeTab === 'Administracion') {
            setMostrarPag(activeAdministracionOption)
        } else if (activeTab === 'Usuarios') {
            setMostrarPag(activeUsuarioOption)
        } else if (activeTab === 'Programar') {
            setMostrarPag(activeProgramadoOption)
        } else if (activeTab === 'Formulario Resmine') {
            setMostrarPag(activeFormularioOption)
        }
    }, [activeTab, activeFormularioOption, activeProgramadoOption, activeUsuarioOption, activeAdministracionOption, activeTiposOption, activeProvedoresOption, activeLogisticaOption, activeClientesOption, activeStatusOption, setMostrarPag]);
    return (
        <div className='rounded-r-lg bg-white w-full h-[100vh] px-2 pt-4'>
            <div className="flex items-center gap-2 mb-4">
                <img className='w-[30px] h-[30px]' src="https://www.peruyello.com/img/pe/s/1651164664_82416.jpg" alt="" />
                <h2 className='text-[#969696] font-bold text-[1.2em]'>COMPINA</h2>
            </div>
            {/* inicio */}
            <div
                onClick={() => setActiveTab('Inicio')}
                className={`flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-2 ${isActive('Inicio') ? 'bg-[#969696] text-white' : 'bg-white text-[#969696] hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-calendar-days`}></i>
                <h3 className={`font-semibold`}>Inicio</h3>
            </div>
            {/* clientes */}
            <div
                onClick={() => setActiveTab('Clientes')}
                className={`text-[1em] flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-1 ${isActive('Clientes') ? 'bg-[#969696] text-white' : 'text-[#969696] bg-white hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-users`}></i>
                <h3 className={`font-semibold`}>Clientes</h3>
            </div>
            {/* clienter options */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isActive('Clientes') ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="mb-2 ml-4">
                    <div
                        onClick={() => setActiveClientesOption('Listar Clientes')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveClientes('Listar Clientes') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Listar Clientes</h4>
                    </div>
                    <div
                        onClick={() => setActiveClientesOption('Requerimientos por atender')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveClientes('Requerimientos por atender') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Requerimientos por atender</h4>
                    </div>
                    <div
                        onClick={() => setActiveClientesOption('Cumpleaños / Aniversarios clientes')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveClientes('Cumpleaños / Aniversarios clientes') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Cumpleaños /<br />Aniversarios clientes</h4>
                    </div>
                    <div
                        onClick={() => setActiveClientesOption('Reporte email')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveClientes('Reporte email') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Reporte email</h4>
                    </div>
                    <div
                        onClick={() => setActiveClientesOption('Alertas')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveClientes('Alertas') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Alertas</h4>
                    </div>
                    <div
                        onClick={() => setActiveClientesOption('Solicitud de cuaderno catalogo')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveClientes('Solicitud de cuaderno catalogo') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Solicitud de cuaderno <br />catalogo</h4>
                    </div>
                </div>
            </div>
            {/* Status de atencion */}
            <div
                onClick={() => setActiveTab('Status de atencion')}
                className={`text-[1em] flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-1 ${isActive('Status de atencion') ? 'bg-[#969696] text-white' : 'text-[#969696] bg-white hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-tv`}></i>
                <h3 className={`font-semibold`}>Status de Atencion</h3>
            </div>
            {/* Status de atencion options */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isActive('Status de atencion') ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="mb-2 ml-4">
                    <div
                        onClick={() => setActiveStatusOption('Contacto inicial')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveStatus('Contacto inicial') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Contacto inicial</h4>
                    </div>
                    <div
                        onClick={() => setActiveStatusOption('Ingr. Cotizacion Compina y Compipro')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveStatus('Ingr. Cotizacion Compina y Compipro') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Ingr. Cotizacion Compina<br />y Compipro </h4>
                    </div>
                    <div
                        onClick={() => setActiveStatusOption('Retornar contacto')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveStatus('Retornar contacto') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Retornar contacto</h4>
                    </div>
                    <div
                        onClick={() => setActiveStatusOption('Ventas realizadas')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveStatus('Ventas realizadas') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Ventas realizadas</h4>
                    </div>
                    <div
                        onClick={() => setActiveStatusOption('Pendientes por cotizar')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveStatus('Pendientes por cotizar') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Pendientes por cotizar</h4>
                    </div>
                    <div
                        onClick={() => setActiveStatusOption('Clientes cotizados')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveStatus('Clientes cotizados') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Clientes cotizados</h4>
                    </div>
                    <div
                        onClick={() => setActiveStatusOption('Ventas no realizadas')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveStatus('Ventas no realizadas') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Ventas no realizadas</h4>
                    </div>
                    <div
                        onClick={() => setActiveStatusOption('Producto entregados')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveStatus('Producto entregados') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Producto entregados
                        </h4>
                    </div>
                </div>
            </div>
            {/* tipos de clientes */}
            <div
                onClick={() => setActiveTab('Tipos de Clientes')}
                className={`text-[1em] flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-1 ${isActive('Tipos de clientes') ? 'bg-[#969696] text-white' : 'text-[#969696] bg-white hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-address-book`}></i>
                <h3 className={`font-semibold`}>Tipos de Clientes</h3>
            </div>
            {/* tipos de clientes options */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isActive('Tipos de Clientes') ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="mb-2 ml-4">
                    <div
                        onClick={() => setActiveTiposOption('Clientes potenciales')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveTipos('Clientes potenciales') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Clientes potenciales</h4>
                    </div>
                    <div
                        onClick={() => setActiveTiposOption('Clientes ocacionales')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveTipos('Clientes ocacionales') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Clientes ocacionales</h4>
                    </div>
                    <div
                        onClick={() => setActiveTiposOption('Clientes frecuentes')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveTipos('Clientes frecuentes') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Clientes frecuentes</h4>
                    </div>
                    <div
                        onClick={() => setActiveTiposOption('Clientes tercerizados')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveTipos('Clientes tercerizados') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Clientes tercerizados</h4>
                    </div>
                    <div
                        onClick={() => setActiveTiposOption('Prospecto')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveTipos('Prospecto') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Prospecto</h4>
                    </div>
                    <div
                        onClick={() => setActiveTiposOption('Clientes no potencial')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveTipos('Clientes no potencial') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Clientes no potencial</h4>
                    </div>
                    <div
                        onClick={() => setActiveTiposOption('Malos clientes')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveTipos('Malos clientes') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Malos clientes</h4>
                    </div>
                </div>
            </div>
            {/* provedores */}
            <div
                onClick={() => setActiveTab('Provedores')}
                className={`text-[1em] flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-1 ${isActive('Provedores') ? 'bg-[#969696] text-white' : 'text-[#969696] bg-white hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-handshake`}></i>
                <h3 className={`font-semibold`}>Provedores</h3>
            </div>
            {/* provedores options */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isActive('Provedores') ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="mb-2 ml-4">
                    <div
                        onClick={() => setActiveProvedoresOption('Listar provedores')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveProvedores('Listar provedores') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Listar provedores</h4>
                    </div>
                    <div
                        onClick={() => setActiveProvedoresOption('Emitir requerimiento')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveProvedores('Emitir requerimiento') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Emitir requerimiento</h4>
                    </div>
                    <div
                        onClick={() => setActiveProvedoresOption('Orden de compra COMPINA')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveProvedores('Orden de compra COMPINA') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Orden de compra COMPINA</h4>
                    </div>
                    <div
                        onClick={() => setActiveProvedoresOption('Orden de compra COMPIPRO')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveProvedores('Orden de compra COMPIPRO') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Orden de compra COMPIPRO</h4>
                    </div>
                </div>
            </div>
            {/* Logistica */}
            <div
                onClick={() => setActiveTab('Logistica')}
                className={`text-[1em] flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-1 ${isActive('Logistica') ? 'bg-[#969696] text-white' : 'text-[#969696] bg-white hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-people-group`}></i>
                <h3 className={`font-semibold`}>Logistica</h3>
            </div>
            {/* Logistica options */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isActive('Logistica') ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="mb-2 ml-4">
                    <div
                        onClick={() => setActiveLogisticaOption('Rutas')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveLogistica('Rutas') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Listar provedores</h4>
                    </div>
                    <div
                        onClick={() => setActiveLogisticaOption('Productos')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveLogistica('Productos') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Productos</h4>
                    </div>
                    <div
                        onClick={() => setActiveLogisticaOption('Requerimiento cotizaciones')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveLogistica('Requerimiento cotizaciones') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Requerimiento cotizaciones</h4>
                    </div>
                    <div
                        onClick={() => setActiveLogisticaOption('Formato')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveLogistica('Formato') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Formato</h4>
                    </div>
                </div>
            </div>
            {/* administracion */}
            <div
                onClick={() => setActiveTab('Administracion')}
                className={`text-[1em] flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-1 ${isActive('Administracion') ? 'bg-[#969696] text-white' : 'text-[#969696] bg-white hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-plug`}></i>
                <h3 className={`font-semibold`}>Administracion</h3>
            </div>
            {/* administracion options */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isActive('Administracion') ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="mb-2 ml-4">
                    <div
                        onClick={() => setActiveAdministracionOption('Facturacion')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveAdministracion('Facturacion') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Facturacion</h4>
                    </div>
                    <div
                        onClick={() => setActiveAdministracionOption('Guía remisión')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveAdministracion('Guía remisión') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Guía remisión</h4>
                    </div>
                    <div
                        onClick={() => setActiveAdministracionOption('Cobranza')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveAdministracion('Cobranza') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Cobranza</h4>
                    </div>
                    <div
                        onClick={() => setActiveAdministracionOption('Cotizacion/Publicidad Cliente')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveAdministracion('Cotizacion/Publicidad Cliente') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Cotizacion /<br /> Publicidad Cliente</h4>
                    </div>
                </div>
            </div>
            {/* usuarios */}
            <div
                onClick={() => setActiveTab('Usuarios')}
                className={`text-[1em] flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-1 ${isActive('Usuarios') ? 'bg-[#969696] text-white' : 'text-[#969696] bg-white hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-user`}></i>
                <h3 className={`font-semibold`}>Usuarios</h3>
            </div>
            {/* Usuarios options */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isActive('Usuarios') ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="mb-2 ml-4">
                    <div
                        onClick={() => setActiveUsuarioOption('Nuevo')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveUsuario('Nuevo') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Nuevo</h4>
                    </div>
                    <div
                        onClick={() => setActiveUsuarioOption('Listar usuarios')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveUsuario('Listar usuarios') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Listar usuarios</h4>
                    </div>
                    <div
                        onClick={() => setActiveUsuarioOption('Listar asistencia')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveUsuario('Listar asistencia') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Listar asistencia</h4>
                    </div>
                </div>
            </div>
            {/* documento */}
            <div
                onClick={() => setActiveTab('Documentos')}
                className={`flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-2 ${isActive('Documentos') ? 'bg-[#969696] text-white' : 'bg-white text-[#969696] hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-folder-open`}></i>
                <h3 className={`font-semibold`}>Documentos</h3>
            </div>
            {/* Programar */}
            <div
                onClick={() => setActiveTab('Programar')}
                className={`text-[1em] flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-1 ${isActive('Programar') ? 'bg-[#969696] text-white' : 'text-[#969696] bg-white hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-cake-candles`}></i>
                <h3 className={`font-semibold`}>Programar</h3>
            </div>
            {/* programar options */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isActive('Programar') ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="mb-2 ml-4">
                    <h3 className='text-[1em] font-medium text-[#C3C3C3]'>Enviar Email</h3>
                    <div
                        onClick={() => setActiveProgramadoOption('Enviar Email Compipro')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveProgramado('Enviar Email Compipro') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Compipro</h4>
                    </div>
                    <div
                        onClick={() => setActiveProgramadoOption('Enviar Email Compipro Compina')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveProgramado('Enviar Email Compipro Compina') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Compina</h4>
                    </div>
                    <h3 className='text-[1em] font-medium text-[#C3C3C3]'>Status Enviados</h3>
                    <div
                        onClick={() => setActiveProgramadoOption('Status Enviados Compipro')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveProgramado('Status Enviados Compipro') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Compipro</h4>
                    </div>
                    <div
                        onClick={() => setActiveProgramadoOption('Status Enviados Compina')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveProgramado('Status Enviados Compina') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Compina</h4>
                    </div>
                    <h3 className='text-[1em] font-medium text-[#C3C3C3]'>Status Programados</h3>
                    <div
                        onClick={() => setActiveProgramadoOption('Status Programados Compipro')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveProgramado('Status Programados Compipro') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Compipro</h4>
                    </div>
                    <div
                        onClick={() => setActiveProgramadoOption('Status Programados Compina')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveProgramado('Status Programados Compina') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Compina</h4>
                    </div>
                </div>
            </div>
            {/* formulario resmine */}
            <div
                onClick={() => setActiveTab('Formulario Resmine')}
                className={`text-[1em] flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-1 ${isActive('Formulario Resmine') ? 'bg-[#969696] text-white' : 'text-[#969696] bg-white hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-filter-circle-dollar`}></i>
                <h3 className={`font-semibold`}>Formulario Resmine</h3>
            </div>
            {/* formulario resmine options */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isActive('Formulario Resmine') ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="mb-2 ml-4">
                    <div
                        onClick={() => setActiveFormularioOption('Formulario')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveFormulario('Formulario') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Formulario</h4>
                    </div>
                    <div
                        onClick={() => setActiveFormularioOption('Listado')}
                        className={`cursor-pointer w-full rounded-md px-2 py-1 mb-1 ${isActiveFormulario('Listado') ? 'bg-[#C3C3C3] text-white' : 'bg-white text-[#C3C3C3] hover:bg-[#C3C3C3] hover:text-white duration-150 transition-all'
                            }`}
                    >
                        <h4 className='text-[.9em] font-medium'>Listado</h4>
                    </div>
                </div>
            </div>
            {/* Inventario */}
            <div
                onClick={() => setActiveTab('Inventario')}
                className={`flex w-full rounded-md px-3 py-2 gap-2 cursor-pointer items-center mb-2 ${isActive('Inventario') ? 'bg-[#969696] text-white' : 'bg-white text-[#969696] hover:bg-[#969696] hover:text-white duration-150 transition-all'
                    }`}
            >
                <i className={`fa-solid fa-border-all`}></i>
                <h3 className={`font-semibold`}>Inventario</h3>
            </div>
        </div>
    );
}

export default Nav;

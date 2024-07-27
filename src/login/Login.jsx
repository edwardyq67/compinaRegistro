import React, { useState } from 'react'
import avatar from '../img/avatar.png'
import compina from '../img/compina.png'
function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='bg-gradient-to-r from-color1 to-color2 w-[100vw] h-[100vh] flex justify-center items-center'>
            <div className="gap-x-10 gap-y-5 justify-center max-w-[50vw] px-10 py-14 bg-white rounded-md border border-black relative grid grid-cols-2">
                <div className="absolute inset-x-0 top-[-50px] flex justify-center">
                    <img className=' w-[100px] h-[100px]' src={avatar} alt="Avatar" />
                </div>
                <div className="col-span-2 flex">
                    <img src="https://compina.net/soluciones/sistema_cmr_compipro/sistema_cmr/images/logo-compipro1.png" alt="" />
                </div>
                <div className="col-span-1 grid">
                    <div className="flex justify-start items-center">
                        <i className="fa-solid fa-user "></i>
                        <h2 className='text-[1em]'>
                            Usuario :
                        </h2>
                    </div>
                    <input className='border border-black rounded-md p-2 h-12' type="text" />
                </div>
                <div className="col-span-1 grid">
                    <div className="flex justify-start items-center">
                        <i className="fa-solid fa-user "></i>
                        <h2 className='text-[1em]'>
                            Contraseña :
                        </h2>
                    </div>
                    <div className="relative ">
                        <input
                            className='border border-black rounded-md p-2 h-12'
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                        />
                        <i
                            className={`fa-solid ${passwordVisible ? "fa-eye" : "fa-eye-slash"} absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer`}
                            onClick={togglePasswordVisibility}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

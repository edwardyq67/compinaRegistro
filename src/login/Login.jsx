import React, { useState } from 'react'
import avatar from '../img/avatar.png'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postThungSecion } from '../store/slices/secion.slice';


function Login({ ruta, setRutas }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    const submit = async (data) => {
        try {
            await dispatch(postThungSecion(data));
            setRutas("/Inicio");
            navigate("/Inicio");
        } catch (error) {
            console.error("Error durante el inicio de sesión:", error);
            alert("Hubo un error al iniciar sesión. Por favor, inténtelo de nuevo.");
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={`${ruta != '/' ? 'hidden' : "flex bg-gradient-to-r from-color1 to-color2 w-[100vw] h-[100vh] justify-center items-center"}`}>
            <div className="gap-x-10 gap-y-5 justify-center max-w-[50vw] px-10 py-14 bg-white rounded-md border border-black relative grid grid-cols-2">
                <div className="absolute inset-x-0 top-[-50px] flex justify-center">
                    <img className=' w-[100px] h-[100px]' src={avatar} alt="Avatar" />
                </div>
                <div className="col-span-2 flex">
                    <img src="https://compina.net/soluciones/sistema_cmr_compipro/sistema_cmr/images/logo-compipro1.png" alt="Compina" />
                </div>
                <div className="col-span-1 grid">
                    <div className="flex justify-start items-center">
                        <i className="fa-solid fa-user "></i>
                        <h2 className='text-[1em]'>
                            Usuario :
                        </h2>
                    </div>
                    <input {...register("usuario")} className='border border-black rounded-md p-2 h-12' type="text" />
                </div>
                <div className="col-span-1 grid">
                    <div className="flex justify-start items-center">
                        <i className="fa-solid fa-key "></i>
                        <h2 className='text-[1em]'>
                            Contraseña :
                        </h2>
                    </div>
                    <div className="relative">
                        <input
                            className='border border-black rounded-md p-2 h-12'
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            {...register("password")}
                        />
                        <i
                            className={`fa-solid ${passwordVisible ? "fa-eye" : "fa-eye-slash"} absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer`}
                            onClick={togglePasswordVisibility}
                        ></i>
                    </div>
                </div>
                <button type='submit' className='bg-color1 rounded text-white py-1 cursor-pointer'>
                    Entrar
                </button>
            </div>
        </form>
    )
}

export default Login;


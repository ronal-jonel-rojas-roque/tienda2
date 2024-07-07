import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/login.css'
import { MdOutlineContactMail } from "react-icons/md";
import { RiEyeCloseFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";


const LoginController = () => {
    const url = 'http://localhost:3001/usuarios/login'
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            Swal.fire({
                title: 'Advertencia',
                text: 'Por favor, completa todos los campos',
                icon: 'warning',
                timer: 1000,
                timerProgressBar: true,
            });
            return;
        }

        try {
            const response = await axios.patch(url, {
                correo: email,
                contraseña: password,
            });

            const data = response.data;
            if (response.status === 200) {
                localStorage.setItem('token', data.token);

                
                const userData = data.data.user;
                const userRole = userData.rol_id === 1 ? 'admin' : 'user';
                const userName = userData.nombres;

                Swal.fire({
                    title: 'Inicio de Sesión Exitoso',
                    text: `Bienvenido ${userName}`,
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                }).then(() => {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userData', JSON.stringify(userData));
                    localStorage.setItem('userRole', userRole);

                    if (userRole === 'admin') {
                        navigate('/dashboard');
                    } else {
                        navigate('/home');
                    }
                });
            } else {
                Swal.fire({
                    title: 'Error',
                    text: data.message || 'Correo o contraseña incorrectos',
                    icon: 'error',
                    timer: 2000,
                    timerProgressBar: true,
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema con el servidor',
                icon: 'error',
                timer: 2000,
                timerProgressBar: true,
            });
        }
    };
    // Verificar si el usuario ya está autenticado al montar el componente
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            const userRole = localStorage.getItem('userRole');
            if (userRole === 'admin') {
                navigate('/dashboard');
            } else {
                navigate('/home');
            }
        }
    }, [navigate]);
    return (
        <div>
            <div className="form-box">
                <form className="formulario__login formulario-ingresar" onSubmit={onSubmit}>
                    <h2>Iniciar Sesión</h2>
                    <div className="inputbox">
                        <MdOutlineContactMail className='icon-login' />
                        <input
                            type="email"
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.
                                value)} />
                        <label htmlFor="email">Correo</label>
                    </div>

                    <div className="inputbox">
                        {showPassword ? (
                            <FaEye className='icon-login' onClick={togglePasswordVisibility} />
                        ) : (
                            <RiEyeCloseFill className='icon-login' onClick={togglePasswordVisibility} />
                        )}
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            id='Contraseña'
                            onChange={(e) => setPassword(e.target.
                                value)} />
                        <label htmlFor="Contraseña">Contraseña</label>
                    </div>
                    <div className="forget">
                        <div className="label">
                            <div className="div-chec" id='dedic'>
                                <input type="checkbox" />
                                <span>Recordarme  </span>
                            </div>
                            <a href="#" id='dedic'>¿Olvidaste tu Contraseña?</a></div>
                    </div>
                    <div className="div-spacing"></div>

                    <button className="button" type="submit" >INGRESAR</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default LoginController;
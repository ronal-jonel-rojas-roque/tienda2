import React, { useEffect, useState } from 'react'
import '../styles/login.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import LoginController from '../controller/LoginController';
import RegisterController from '../controller/RegisterController';

const Login= () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 850);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 850);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setIsLoginVisible(true);
    } else {
      setIsLoginVisible(true);
    }
  }, [isDesktop]);


  const iniciarSesion = () => {
    setIsLoginVisible(true);
  };

  const register = () => {
    setIsLoginVisible(false);
  };


  return (
    <div className='login-contenedor'>
      <div className="contenedor__todo">
        <div className={`caja__trasera ${isLoginVisible ? 'active' : ''}`}>
          <div className="caja__trasera-login">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para entrar en la página</p>
            <button id="btn__iniciar-sesion" onClick={iniciarSesion}>Iniciar Sesión</button>
          </div>
          <div className="caja__trasera-register">
            <h3>¿Aún no tienes una cuenta?</h3>
            <p>Regístrate para que puedas iniciar sesión</p>
            <button id="btn__registrarse" onClick={register}>Regístrarse</button>
          </div>
        </div>

        {/* Formulario de Login y registro */}
        <div className={`contenedor__login-${isLoginVisible ? 'login' : 'register'}`} style={{ left: isDesktop ? (isLoginVisible ? '10px' : '410px') : '0px' }}>
          {isLoginVisible ? (
            <LoginController />
          ) : (
            <RegisterController />
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;
import React, { useEffect, useState } from 'react'
import { RiEyeCloseFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import axios from 'axios';

interface Gender {
  id: number;
  nombre: string;
}

export default function RegisterController() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const urlgenero = 'http://localhost:3001/genero'
  const [genders, setGenders] = useState<Gender[]>([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);


  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    if (password !== '') {
      setPasswordMatch(event.target.value === password);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  useEffect(() => {
    const fetchGenders = async () => {
      try {
        const response = await axios.get(urlgenero);
        if (response.status === 200) {
          setGenders(response.data.data);
        } else {
          console.error('Error fetching genders:', response.status);
        }
      } catch (error) {
        console.error('Error fetching genders:', error);
      }
    };

    fetchGenders();
  }, []);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  
  return (
    <div>
      <form className="formulario__login formulario-registrarse">
        <h2>Regístrarse</h2>
        <div className="inputbox-register">
          <input type="text" id='NombresLogin'/>
          <label htmlFor="NombresLogin">Nombres</label>
        </div>

        <div className="inputbox-register">
          <input type="text" id='ApellidosLogin'/>
          <label htmlFor="ApellidosLogin">Apellidos</label>
        </div>

        <div className="inputbox-register">
          <input type="text" id='CorreoLogin'/>
          <label htmlFor="Correo">Correo</label>
        </div>

        <div className="inputbox-register">
          {showPassword ? (
            <FaEye className='icon-login' onClick={togglePasswordVisibility} />
          ) : (
            <RiEyeCloseFill className='icon-login' onClick={togglePasswordVisibility} />
          )}
          <input type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} id='contraseñalogin'/>
          <label htmlFor="contraseñalogin">Contraseña</label>
        </div>

        <div className="inputbox-register">
          {showPassword2 ? (
            <FaEye className='icon-login' onClick={togglePasswordVisibility2} />
          ) : (
            <RiEyeCloseFill className='icon-login' onClick={togglePasswordVisibility2} />
          )}
          <input id='contraseñaloginrepita' type={showPassword2 ? "text" : "password"} value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <label htmlFor="contraseñaloginrepita">Repita su Contraseña</label>
        </div>
        {!passwordMatch && confirmPassword !== '' && <p className="error-password">Las contraseñas no coinciden</p>}

        <div className="inputbox-register-gender">
          <label htmlFor="gender">Sexo</label>
          <select
            id="gender"
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="" disabled>Seleccione su género</option>
            {genders.map((gender) => (
              <option key={gender.id} value={gender.nombre}>
                {gender.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="div-spacing"></div>
        <button className="button" type="submit" >REGISTRARSE</button>
      </form>
    </div>
  )
}

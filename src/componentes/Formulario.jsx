import React from 'react'
import {useState} from 'react'

import { useNavigate } from 'react-router-dom';



import imagenFondoForm from '../imagenes/fondoForm.jpg'
import AlertComp from './AlertComp.jsx'
import CerrarSesion from './CerrarSesion.jsx'
import './Formulario.css'
const Formulario = ({data,punter,setCaja,datosUsuario}) => {
  const navigate = useNavigate();   //redireccionamiento 1.0v


  const [usuario,setUsuario]=useState();
  const [contraseña,setconstraseña]=useState();
  // const [valorCheck,setValorCheck]=useState(false);
  const [cajaAlert,setCajaAlert]=useState();

  const LoginU=(e)=>{
    setUsuario(e.target.value)
    console.log(e.target.value);
  }
  const LoginP=(e)=>{
      setconstraseña(e.target.value)
      console.log(e.target.value);
  }
  // const handleCheckboxChange = () => {
    
  //   setValorCheck(!valorCheck);
  // };

  const verificarUsuario = () =>{
        
        
        let x =data.filter(elemento =>elemento.nombre==usuario && elemento.contraseña==contraseña)
        if(x==''){
          alert('usuario Equivocado')
          setCajaAlert(<AlertComp/>)
        }
        else{
          console.log('el usuario encontrado es: '+ x[0].nombre);
          punter(x[0])
          setCaja(<CerrarSesion datosUsuario={x[0]} setCaja={setCaja}/>);
          setCajaAlert();
          navigate('/proyectofinal');
        }
  }
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center  cajaFormulario'>
          {/*cajaBlanca*/}
      
          <form className='colorCustomR p-4 rounded-3'>
          <h1 className='text-center fw-bold'>Bienvenido</h1>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Usuario</label>
              <input type="email" onChange={LoginU} className="form-control" aria-describedby="emailHelp"/>
              <div className="form-text">Si no tiene cuenta inicie sesion con System 9129103</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" onChange={LoginP} className="form-control"/>
            </div>
            {/* <div className="mb-3 form-check">
             <input type="checkbox" className="form-check-input " checked={valorCheck} onChange={handleCheckboxChange}/> 
              <label className="form-check-label" for="exampleCheck1">Crear cuenta</label> 
            </div>  */}

            <button onClick={verificarUsuario} type="submit" className="btn btn-primary">Iniciar Sesion</button>
            {cajaAlert}
          </form>
          
    </div>
  )
}

export default Formulario

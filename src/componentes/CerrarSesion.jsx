import React from 'react'
import { Link } from 'react-router-dom';
import IniciarSesionC from './IniciarSesionC';
const CerrarSesion = ({datosUsuario,setCaja}) => {
    const CerrarSesion= ()=>{
        setCaja(<IniciarSesionC/>);
    }
  return (
    <div className='container-fluid'>
      <div className='container-fluid text-light'>
              <div className=''>
                <img className='redondearImgPerfil mb-4' src={datosUsuario.imagen}></img>
              </div>
              
                <div className='row mt-1'>
                  <div className='col-md-6 '>
                    <h6 className='text-end'>Usuario:</h6>
                  </div>
                  <div className='col-md-6'>
                    <h6 className='text-start'>{datosUsuario.nombre}</h6>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <h6 className='text-end'>Permisos:</h6>
                  </div>
                  <div className='col-md-6 '>
                    <h6 className='text-start'>{datosUsuario.permisos}</h6>
                  </div>
                </div>

                <div className='row mt-3 '>
                  <button  onClick={CerrarSesion} class="btn btn-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                      <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg> Cerrar Sesion
                  </button>
                </div>


              </div>
    </div>
  )
}

export default CerrarSesion

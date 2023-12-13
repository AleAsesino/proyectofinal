import React from 'react'
import './NavegarBarra.css'
import CerrarSesion from './CerrarSesion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IniciarSesionC from './IniciarSesionC';
//////////////////////////lo de abajo datousuario cambiar al valor actual/////////////////////////
const NavegarBarra = ({datosUsuario,cajaPerfil,setCaja}) => {
  

  return (
    <div className='container-fluid p-5 sticky-top d-flex align-items-center justify-content-center mt-5'>
      <div className='mt-5'>
            {/* <CerrarSesion datosUsuario={datosUsuario} setCaja={setCajaPerfil}/> */}
            {cajaPerfil}
            

            <div class="d-grid gap-2 p-2 mt-5">
                
                <button className="btn mt-4 btn-outline-success btn-lg" type="button"><Link className='text-decoration-none colortextE' to='/proyectofinal'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-house-door me-1 " viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                              </svg>  Inicio</Link>
                </button>
                

                <button className="btn mt-4 btn-outline-success btn-lg" type="button"><Link className='text-decoration-none colortextE' to='/Usuarios'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-box me-1" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                              </svg>  Usuarios</Link>
                </button>
                

                <button className="btn mt-4 btn-outline-success btn-lg" type="button"><Link className='text-decoration-none colortextE' to='/Perfil'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person-fill me-1 " viewBox="0 0 16 16">
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>  Creditos</Link>
                </button>
          </div>
    </div>       
  </div>
  )
}

export default NavegarBarra

///componente listo para recibir datos////////////////
import React from 'react'

import imagenPrueba from '../imagenes/La-Paz.jpg'
const departamento = ({dataDep}) => {
  return (
    <div className='container-fluid text-light'>
      <div className='container mt-5'>
      <h1 className='text-center'>{dataDep.nombre}</h1>
        {/* Llenar aqui el componente dinamico con*/}
        {/* Nombre departamento, descripcion y imagen */}
        <div className='row mt-5'>
          <div className='col-md-7'>
            <p className='p-5'>{dataDep.descripcionLarga1}</p>
          </div>
          <div className='col-md-5'>
            <img src={dataDep.imagenInicio} className='w-100'/>
          </div>
        </div>

        {/* llenar con imagen del plato, descripcion del plato, nombre plato*/}
        <div className='row mt-5'>
          <div className='col-md-5'>
            <img src={dataDep.imagenPlato} className='w-100'></img>
          </div>
          <div className='col-md-7'>
            <h2>{dataDep.tituloP}</h2>
            <p className='p-3'>{dataDep.descripcionLarga2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default departamento

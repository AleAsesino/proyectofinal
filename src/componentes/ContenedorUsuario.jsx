import React from 'react'

const ContenedorUsuario = ({dataU}) => {
  return (
    <div>
      <div className='container p-3'>
        <div className='row border p-3'>
            <h3 className='col-md-4'>
                Nombre: {dataU.nombre}
            </h3>
            <h3 className='col-md-4'>
                Contraseña: {dataU.contraseña}
            </h3>
            <h3 className='col-md-4'>
                Permisos: {dataU.permisos}
            </h3>
        </div>
      </div>
    </div>
  )
}

export default ContenedorUsuario

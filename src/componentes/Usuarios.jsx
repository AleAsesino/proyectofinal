import React from 'react'
import ContenedorUsuario from './ContenedorUsuario'
const Usuarios = ({Data}) => {
  return (
    <div className='container text-light mt-5'>
        <h1 className='text-center mb-5'>Usuarios Registrados</h1>
      {
        Data.map((valor,index)=>
            (<ContenedorUsuario dataU={valor}/>)
        )
      }

    </div>
  )
}

export default Usuarios

import React from 'react'

const AlertComp = () => {
  return (
    <div className='container-fluid'>

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Usuario no encontrado!</strong> Verifique sus datos ingresador.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>

    </div>
  )
}

export default AlertComp

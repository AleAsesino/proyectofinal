import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'
import imagenPrueba from '../imagenes/Beni.jpeg'
import imagenPrueba2 from '../imagenes/La-Paz.jpg' //
const Card = ({dep,punter}) => {
  const cambiarPunter = () =>{
    punter(dep)
    console.log(dep.id)
  }


  return (
    <div className='card bg-dark'>
      <div className='cajaImg'>
        <img className='CardImagenes' src={dep.imagenInicio}/>
      </div>
      <div className='card-body text-light '>
        <h4 className='card-title'>{dep.nombre}</h4>
        <p className='card-text text-secondary'>
            {dep.descripcion}
        </p>
        <a onClick={cambiarPunter} className='btn btn-outline-secondary rounded-0'><Link className='text-decoration-none text-light' to='/departamento'>Ver Mas..</Link></a>
      </div>
    </div>
  )
}

export default Card

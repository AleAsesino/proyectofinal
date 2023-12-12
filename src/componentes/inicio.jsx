import imagen1 from '../imagenes/plato-paceño.jpg';
import imagen2 from '../imagenes/Beni.jpeg'
import { Link } from 'react-router-dom';
const CajaInicio = () =>{
    return <div className='container-fluid p-2'>

            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><Link to='/menu'>Inicio</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><Link to='/departamento'>Departamentos</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Perfil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href='#'><Link to='/Login'>Iniciar Sesion</Link></a>
                </li>
            </ul>

    </div>
}
export default CajaInicio
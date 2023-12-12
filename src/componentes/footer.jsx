import React from 'react'
import UmsaLogo from '../imagenes/UmsaLogo.png'
import './footer.css'
const footer = () => {
  return (
    <div className='container-fluid cajaFinal p-2'>
      <div className='row m-0 p-0 mt-5 mb-5'>

        <div className='col-sm-4 p-5'>



          <div className='row cajaLogo'>
            <div className='col-xxl-5 text-center'>
              <img src={UmsaLogo}/>
            </div>

            <div className='col-xxl-7 '>
              <p className='text-center text5'>Umsa</p><br/>
              <p className='text-center'>Facultad de Ciencias Puras y Naturales</p>
            </div>
          </div>




        </div>








        <div className='col-sm-4 p-5  border-start border-end'>
          <p1>Hecho en: <br/>Bolivia-La Paz</p1><br/><br/>
          <p1>Para: <br/>La carrera de Informatica</p1><br/><br/>
          <p1>Materia: <br/></p1><p1>PROGRAMACION WEB II</p1>
        </div>







        <div className='col-sm-4 p-5'>
          <p1>Derechos Reservados<br/>Choque Gutierrez Manuel Alejandro</p1>
        </div>


      </div>




      

         
            
              <ul className='ul1'>
              <div class="row mt-5 mb-5">

              <div className='col-sm-1'></div>
              <div className='col-sm-2'>
                  <li className='li1'><a className='a1' href="https://github.com/AleAsesino"><i class="fa fa-arrows" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-git" viewBox="0 0 16 16">
                            <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"/>
                          </svg></i></a></li>
              </div>

              <div className='col-sm-2'>
                  <li className='li1'><a className='a1' href="https://www.facebook.com/?locale=es_LA"><i class="fa fa-btc" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                          </svg></i></a></li>
              </div>

              <div className='col-sm-2'>
                  <li className='li1'><a className='a1' href="https://twitter.com/"><i class="fa fa-globe" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                            </svg></i></a></li>
              </div>

              <div className='col-sm-2'>
                  <li className='li1'><a className='a1' href="https://youtube.com/@choquegutierrezmanuelaleja1251?si=ukErObtJTCsfrrrr"><i class="fa fa-home" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg></i></a></li>
              </div>

              <div className='col-sm-2'>
                  <li className='li1'><a className='a1' href="https://web.whatsapp.com/"><i class="fa fa-repeat" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg></i></a></li>
              </div>
              <div className='col-sm-1'></div>

              </div>
              </ul>
            
                



      </div>

  )
}

export default footer

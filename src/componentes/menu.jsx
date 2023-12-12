import React from 'react'
import './menu.css'
import Cards from './Cards'

const menu = ({datosImg, departamento1, departamento2, departamento3,punter}) => {
  
  return (
    <div className='container-fluid fondoP'>
                                                    
      <h1 className='tituloP center p-5 textCustomMenu'>Platos Tipicos de Bolivia</h1>






          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
            
            </div>




            <div class="carousel-inner">



              <div class="carousel-item active cajaC" >
                <img src={datosImg[0]} class="d-block w-100 imgC" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>La Paz</h5>
                  <p>
                    La Paz es la sede del gobierno y la capital administrativa de Bolivia. Ubicada a una altitud de alrededor de 3,650 metros sobre el nivel del mar, La Paz es una de las capitales más altas del mundo. 
                    Además de ser la capital política, comparte funciones gubernamentales con Sucre, la capital constitucional de Bolivia.
                  </p>
                </div>
              </div>



              <div class="carousel-item cajaC">
                <img src={datosImg[1]} class="d-block w-100 imgC" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Beni</h5>
                  <p>
                    El Beni es un departamento ubicado en el noreste de Bolivia, conocido por su rica biodiversidad, vastas llanuras y una mezcla cultural única. 
                  </p>
                </div>
              </div>



              <div class="carousel-item cajaC">
                <img src={datosImg[2]} class="d-block w-100 imgC" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Cochabamba</h5>
                  <p>
                    Cochabamba es una ciudad y un departamento ubicados en el centro de Bolivia. 
                    Conocida como la "Ciudad Jardín" debido a su clima templado y agradable, Cochabamba es una de las ciudades más grandes e importantes del país.
                  </p>
                </div>
              </div>


              <div class="carousel-item cajaC">
                <img src={datosImg[3]} class="d-block w-100 imgC" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Oruro</h5>
                  <p>
                    Oruro es una ciudad y departamento situado en la región occidental de Bolivia, famoso por su Carnaval, que es uno de los eventos culturales y folklóricos más importantes de Bolivia.
                  </p>
                </div>
              </div>

            

              <div class="carousel-item cajaC">
                <img src={datosImg[4]} class="d-block w-100 imgC" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Potosi</h5>
                  <p>
                    Potosí es una ciudad y departamento ubicado en el suroeste de Bolivia, conocido por su rica historia ligada a la minería y su importancia cultural. 
                  </p>
                </div>
              </div>

              <div class="carousel-item cajaC">
                <img src={datosImg[5]} class="d-block w-100 imgC" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Pando</h5>
                  <p>
                  Pando es conocido por su exuberante vegetación y su biodiversidad. La región está cubierta en gran parte por la selva amazónica.
                  </p>
                </div>
              </div>


              <div class="carousel-item cajaC">
                <img src={datosImg[6]} class="d-block w-100 imgC" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Santa Cruz</h5>
                  <p>
                  Santa Cruz es el principal centro económico de Bolivia y juega un papel crucial en el desarrollo del país. 
                  </p>
                </div>
              </div>



              <div class="carousel-item cajaC">
                <img src={datosImg[7]} class="d-block w-100 imgC" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Tarija</h5>
                  <p>
                  Tarija es conocida por su producción de vino y singani, una bebida alcohólica tradicional boliviana. 
                  La región cuenta con viñedos y bodegas que han contribuido al desarrollo de la vitivinicultura en Bolivia.
                  </p>
                </div>
              </div>



              <div class="carousel-item cajaC">
                <img src={datosImg[8]} class="d-block w-100 imgC" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Sucre</h5>
                  <p>
                  Sucre tiene una rica historia colonial que se refleja en su arquitectura. 
                  El centro histórico de Sucre ha sido declarado Patrimonio de la Humanidad por la UNESCO debido a sus numerosos edificios coloniales bien conservados. 
                  </p>
                </div>
              </div>


            </div>

  

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>





{/* Cards */}


          <div className='container-fluid contenedor-cartas'>
            <Cards titulo={'Los Andes'} data={departamento1} punter={punter} /> 
          </div>
          <div className='container-fluid contenedor-cartas'>
            <Cards titulo={'La Amazonía'} data={departamento2} punter={punter}/> 
          </div>
          <div className='container-fluid contenedor-cartas'>
            <Cards titulo={'El Chaco'} data={departamento3} punter={punter} /> 
          </div>


{/* collach de imagenes de bolivia arreglar */}


      <div className='container'>
        <h2 className='text-center textCustomCards p-5'>
          Conoce más de Bolivia!
        </h2>
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/Hduq6PkxKIk?si=i0nnh04r5jwiG8sD" title="YouTube video" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default menu

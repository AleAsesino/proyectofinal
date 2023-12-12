import React from 'react'


import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

// Import Swiper React components y imaganes 
import imgPython from '../imagenes/python.png'
import imgJava from '../imagenes/java.png'
import cShirp from '../imagenes/Cshirp.png'
import vue from '../imagenes/vue.png'
import unity from '../imagenes/unity.png'
import oracle from '../imagenes/oracle.png'
import bd from '../imagenes/SQL.png'







import Bostrap from '../imagenes/Bostrap.png'
import MiPerfil from '../imagenes/miperfil.png'
import ReactLogo from '../imagenes/reactLogo.png'
import './Perfil.css'
const Perfil = () => {
  return (
    <div className='container-fluid fondoComponentP'>
      <div className='row'>

        {/* contenedor imagen */}
        <div className='col-md-5 mt-5 d-flex align-items-center justify-content-center'>
            <img className='w-100' src={MiPerfil}></img>
        </div>
        {/* contenedor datos */}
        <div className='col-md-7 mt-5 p-3'>
            <h1>Manuel Alejandro Choque Gutierrez</h1>
    
            <h2>Sr.Null</h2>
            <h3 className='mt-5'>Tecnologias Usadas (Frameworks):</h3>
            <div className='row mt-5'>
                <div className='col-md-6  d-flex align-items-center justify-content-center'>
                <img className='w-25' src={ReactLogo}/>
                </div>
                <div className='col-md-6  d-flex align-items-center justify-content-center'> 
                    <img className='w-25' src={Bostrap}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                   <h2 className='text-center'>React.jsx</h2> 
                </div>
                <div className='col-md-6'>
                   <h2 className='text-center'>Boostrap</h2> 
                </div>
            </div>
            <h2 className='fw-bold mt-5'>Otras Tecnologias y Lenguajes:</h2>




            {/* Contenedor para los wipes */}
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={true}
           
            className="mySwiper"
        >
        <SwiperSlide className='p-3 d-flex align-items-center justify-content-center '>
          <img src={imgJava}/>
        </SwiperSlide>
        <SwiperSlide className='p-5 d-flex align-items-center justify-content-center'>
          <img src={imgPython} />
        </SwiperSlide>
        <SwiperSlide className='p-5 d-flex align-items-center justify-content-center'>
          <img src={cShirp} />
        </SwiperSlide>
        <SwiperSlide className='p-3 d-flex align-items-center justify-content-center'>
          <img src={unity} />
        </SwiperSlide>
        <SwiperSlide className='p-5 d-flex align-items-center justify-content-center'>
          <img src={vue} />
        </SwiperSlide>
        <SwiperSlide className='p-3 d-flex align-items-center justify-content-center'>
          <img src={bd} />
        </SwiperSlide>
      </Swiper>

            

            {/* fin del test del wipe */}
        </div>


      </div>


      
    </div>
  )
}

export default Perfil

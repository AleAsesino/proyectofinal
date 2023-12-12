import React from 'react'
import Card from './Card'
const Cards = ({titulo,data,punter}) => {
  return (
    
    <div className='container-fluid mt-5 '>
        <h1 className='text-center textCustomCards p-2'>{titulo}</h1>
        <div className='container d-flex justify-content-center align-items-center p-4'>
            <div className='row'>
                <div className='col-xl-4 p-2'>
                    <Card dep={data[0]} punter={punter}/>
                </div>
                <div className='col-xl-4 p-2'>
                    <Card dep={data[1]}  punter={punter}/>
                </div>
                <div className='col-xl-4 p-2'>
                    <Card dep={data[2]}  punter={punter}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards

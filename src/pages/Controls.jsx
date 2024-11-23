import React from 'react'
import Header from '../components/Header'
import Cont from '../assets/Control.jpg'
const Controls = () => {
  return (
    <div>
        <Header/>
        <img src={Cont} alt="" className='w-screen h-screen bg-cover align-middle'/>
    </div>
  )
}

export default Controls
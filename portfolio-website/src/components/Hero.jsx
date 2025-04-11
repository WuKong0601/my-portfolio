import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {letters, professionTexts, aboutText} from '../data/index'

const Hero = () => {
    const [hoveredLetter, setHoveredLetter] = useState(null)
    const [currentText, setCurrentText] = useState(professionTexts[0])
    const [isRotating, setIsRotating] = useState(false)
    let currentIndex = 0

    useEffect(() => {
        const interval = setInterval(() => {
            setIsRotating(true)
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % professionTexts.length
                setCurrentText(professionTexts[currentIndex])
                setIsRotating(false)
            }, 300)
        }, 5000)
        return () => clearInterval(interval)
        
    },[])
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center isolate'>
      <Navbar />
      <div className='flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 ms-0'>
        <h1 className='flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl ms:text-4xl text-3xl md:font-normal font-bolder text-yellow-500'>
          <span className='flex'>
            {letters.map((letter, index) => (
              <span 
                key={index} 
                className='inline-block md:w-38 w-32 xl:-mr-20 -mr-24 relative' onMouseEnter={() => setHoveredLetter(index)} onMouseLeave={() => setHoveredLetter(null)}
              >
                {letter.char}
                <img
                  src={letter.img}
                  alt={`Hover image ${index + 1}`}
                  className={`xl:h-36 h-24 absolute bottom-full -translate-x-1/2 ${letter.rotate} ${hoveredLetter === index ? 'visible' : 'invisible'}`} 
                />
              </span>
            ))}
          </span>
          <span className='xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden'>
            I'm {' '}
            <span className={`inline-block xl:w-[380px] md:w-[240px] w-[160] lg:ml-6 ml-2 font-extrabold transform origin-left transition-transform duration-300 ease-out ${isRotating ? 'rotate-[100deg]' : 'rotate-0'}`}>
            {currentText}
            </span>{' '}
            Developer
          </span>
        </h1>
        <button className='xl:w-[400px] md:w-[300px] w-[270px] bg-gray-200 md:py-1 py-0 md:px-4 px-2 xl:text-2xl md:text-xl text-base text-gray-900 tracking-widest rounded-r-4xl flex justify-between items-center md:mr-auto md:mx-0 mx-auto'>
          Read My Journey <i className='bx bx-book-open'></i>
        </button>
        <div className='lg:w-[600px] md:w-[500px] w-[350px] absolute left-1/2-translate-x-1/2 -z-10'>
        <img src="images/road.png" alt="Road Image" className='w-full ms-auto' />
        
        </div>
      </div>
    </div>
  )
}

export default Hero
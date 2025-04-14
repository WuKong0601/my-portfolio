import React from 'react'

import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme()
  return (
    <div className='w-full md:h-12 sm:h-14 h-18 flex justify-between 
        items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 z-50 bg-white dark:bg-gray-900
        transition-colors duration-500'>
        <div className='flex items-center sm:gap-x-4 gap-x-2'>
            <a href="#" className='md:text-2xl sm-text-xl text-lg '>
                WuKong
            </a>
            <i className={`${darkMode ? 'bx bx-sun' : 'bx bx-moon'} md:text-3xl sm:text-2xl text-xl text-gray-600 dark:text-gray-200 sm:ml-4 ml-2 cursor-pointer`}
            onClick={toggleDarkMode}
            ></i>

        </div>
        
        <div>
            <a 
                href="#"
                className='group lg:text-lg md:text-base text-sm font-light text-red-500 dark:text-yellow-500 
                lg:mr-12 mr-8 tracking-wide relative'>
                    Home
                <span className='absolute -bottom-1 left-0 w-full h-[1px] bg-red-500 dark:bg-yellow-500 
                transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300'></span>
            </a>

            <a 
                href="#"
                className='group lg:text-lg md:text-base text-sm font-light text-gray-600 dark:text-white 
                lg:mr-12 mr-8 tracking-wide relative'>
                    Services
                <span className='absolute -bottom-1 left-0 w-full h-[1px] bg-gray-600 dark:bg-white 
                transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300'></span>
            </a>

            <a 
                href="#"
                className='group lg:text-lg md:text-base text-sm font-light text-gray-600  dark:text-white 
                lg:mr-12 mr-8 tracking-wide relative'>
                Contact
                <span className='absolute -bottom-1 left-0 w-full h-[1px] bg-gray-600 dark:bg-white 
                transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300'></span>
            </a>
        </div>
    </div>
  )
}

export default Navbar

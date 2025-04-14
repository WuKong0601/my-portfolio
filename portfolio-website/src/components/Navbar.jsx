import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme()
    const [activeSection, setActiveSection] = useState('home')
    const isScrollingRef = useRef(false)

    useEffect(() => {
        const handleScroll = () => {
            if (isScrollingRef.current) return
            
            const scrollPosition = window.scrollY + 100
            const sections = ['home', 'services', 'contact']
            
            sections.forEach((sectionID) => {
                const element = document.getElementById(sectionID)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    const sectionTop = offsetTop
                    const sectionBottom = offsetTop + offsetHeight
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        if (activeSection !== sectionID) {
                            setActiveSection(sectionID)
                        }
                    }
                }
            })
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [activeSection])

    const handleNavClick = (e, sectionID) => {
        e.preventDefault()
        setActiveSection(sectionID)
        isScrollingRef.current = true
        const element = document.getElementById(sectionID)
        element?.scrollIntoView({ behavior: 'smooth' })
        
        setTimeout(() => {
            isScrollingRef.current = false
        }, 1000)
    }

    return (
        <div className='w-full md:h-12 sm:h-14 h-18 flex flex-col md:flex-row justify-center md:justify-between 
            items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 z-50 bg-white dark:bg-gray-900
            transition-colors duration-500'>
            <div className='flex items-center sm:gap-x-4 gap-x-2'>
                <a href="#" className='md:text-2xl sm:text-xl text-lg'>
                    WuKong
                </a>
                <i 
                    className={`${darkMode ? 'bx bx-sun' : 'bx bx-moon'} md:text-3xl sm:text-2xl text-xl text-gray-600 dark:text-gray-200 sm:ml-4 ml-2 cursor-pointer`}
                    onClick={toggleDarkMode}
                ></i>
            </div>
            
            <div>
                <a 
                    href="#home"
                    onClick={(e) => handleNavClick(e, 'home')}
                    className={`group lg:text-lg md:text-base text-sm font-light 
                    lg:mr-12 mr-8 tracking-wide relative 
                    ${activeSection === 'home' ? 'text-red-500 dark:text-yellow-500' : 'text-gray-600 dark:text-white'}`}
                >
                    Home
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] 
                    transform ${activeSection === 'home' ? 'scale-100' : 'scale-x-0 group-hover:scale-x-100'} 
                    group-hover:origin-left origin-right transition duration-300 
                    ${activeSection === 'home' ? 'bg-red-500 dark:bg-yellow-500' : 'bg-gray-600 dark:bg-white'}`}></span>
                </a>

                <a 
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className={`group lg:text-lg md:text-base text-sm font-light 
                    lg:mr-12 mr-8 tracking-wide relative 
                    ${activeSection === 'services' ? 'text-red-500 dark:text-yellow-500' : 'text-gray-600 dark:text-white'}`}
                >
                    Services
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] 
                    transform ${activeSection === 'services' ? 'scale-100' : 'scale-x-0 group-hover:scale-x-100'} 
                    group-hover:origin-left origin-right transition duration-300 
                    ${activeSection === 'services' ? 'bg-red-500 dark:bg-yellow-500' : 'bg-gray-600 dark:bg-white'}`}></span>
                </a>

                <a 
                    href="#contact"
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className={`group lg:text-lg md:text-base text-sm font-light 
                    lg:mr-12 mr-8 tracking-wide relative 
                    ${activeSection === 'contact' ? 'text-red-500 dark:text-yellow-500' : 'text-gray-600 dark:text-white'}`}
                >
                    Contact
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] 
                    transform ${activeSection === 'contact' ? 'scale-100' : 'scale-x-0 group-hover:scale-x-100'} 
                    group-hover:origin-left origin-right transition duration-300 
                    ${activeSection === 'contact' ? 'bg-red-500 dark:bg-yellow-500' : 'bg-gray-600 dark:bg-white'}`}></span>
                </a>
            </div>
        </div>
    )
}

export default Navbar
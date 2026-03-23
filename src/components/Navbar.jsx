import { BiMenu } from 'react-icons/bi';
import React, { useState } from 'react'
import { BiX } from 'react-icons/bi';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-4
        py-4 text-white backdrop-blur-md sm:px-6 md:px-10 md:py-6 md:justify-evenly'>
            <a href='#home' className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-2xl text-transparent opacity-80
            font-semibold transition-all duration-300 hover:opacity-100 sm:text-3xl '>Bunyad</a>

            <ul className='hidden md:flex gap-10'>
                <li>
                    <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Home
                    </a>
                </li>
                <li>
                    <a href='#tech' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Tech
                    </a>
                </li>
                <li>
                    <a href='#projects' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Projects
                    </a>
                </li>
                <li>
                    <a href='#contact' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Contact
                    </a>
                </li>

            </ul>

            <ul className='hidden md:flex gap-5'  >
                <li className='cursor-pointer text-xl opacity-70
                transition-all duration-300 hover:text-red-500
                hover:opacity-100'>
                    <a href='https://www.linkedin.com/in/bunyad-safarli-54a650236' target='_blank' rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                </li>

                <li className='cursor-pointer text-xl opacity-70
                transition-all duration-300 hover:text-red-500
                hover:opacity-100'>
                    <a href='https://github.com/Bunyad85' target='_blank' rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                </li>
                <li className='cursor-pointer text-xl opacity-70
                transition-all duration-300 hover:text-red-500
                hover:opacity-100'>
                    <a href='https://www.facebook.com/Shafarov/ ' target='_blank' rel="noopener noreferrer">
                        <BsFacebook />
                    </a>
                </li>
            </ul>

            {isOpen ? (
                <BiX className='block text-4xl md:hidden' onClick={menuOpen} />
            ) : (
                <BiMenu className='block text-4xl md:hidden' onClick={menuOpen} />
            )}

            {isOpen && (
                <div className={`fixed right-0 top-[73px] flex h-[calc(100vh-73px)] w-[78%] max-w-sm flex-col items-start justify-start gap-8 border-1
                border-gray-800 bg-black/90 p-6 sm:top-[81px] sm:h-[calc(100vh-81px)] sm:w-2/3 sm:p-8 ${isOpen ? "block" : "hidden"}`}>

                    <ul className='flex flex-col gap-8'>
                        <li>
                            <a href='#home' onClick={closeMenu} className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Home
                            </a>
                        </li>
                        <li>
                            <a href='#tech' onClick={closeMenu} className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Tech
                            </a>
                        </li>
                        <li>
                            <a href='#projects' onClick={closeMenu} className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Projects
                            </a>
                        </li>
                        <li>
                            <a href='#contact' onClick={closeMenu} className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Contact
                            </a>
                        </li>
                    </ul>


                    <ul className='flex flex-wrap gap-5'>
                        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100'>
                            <a href='https://www.linkedin.com/in/bunyad-safarli-54a650236' target='_blank' rel="noopener noreferrer">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100'>
                            <a href='https://github.com/Bunyad85' target='_blank' rel="noopener noreferrer">
                                <BsGithub />
                            </a>
                        </li>
                        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100'>
                            <a href='https://www.facebook.com/Shafarov/' target='_blank' rel="noopener noreferrer">
                                <BsFacebook />
                            </a>
                        </li>
                    </ul>


                </div>
            )
            }
        </nav >
    )
}

export default Navbar

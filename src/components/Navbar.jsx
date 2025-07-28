import { BiMenu } from 'react-icons/bi';
import React, { useState } from 'react'
import { BiX } from 'react-icons/bi';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16
        py-6 text-white backdrop-blur-md md:justify-evenly'>
            <a href='#home' className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80
            text-3xl font-semibold transition-all duration-300 hover:opacity-100 '>Portfolio</a>

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
                <BiX className='block md:hidden text-4xl' onClick={menuOpen} />
            ) : (
                <BiMenu className='block md:hidden text-4xl' onClick={menuOpen} />
            )}

            {isOpen && (
                <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1
                border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>

                    <ul className='flex flex-col gap-8'>
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
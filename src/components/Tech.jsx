import React from 'react'
import { BiLogoCss3, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { SiLinux, SiUbuntu } from 'react-icons/si'
import { motion } from "motion/react";

const Tech = () => {

    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div id='tech' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32'>
            <motion.h1
                variants={variants}
                initial="hidden"
                whileInView='visible'
                transition={{ duration: 0.5 }}


                className='text-4xl font-light text-white md:text-6xl'>Technologies</motion.h1>

            <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://www.w3schools.com/js/' target='blank' rel="noopener noreferrer">
                        <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]' /></a>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://www.w3schools.com/typescript/' target='blank' rel="noopener noreferrer">
                        <BiLogoTypescript className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]' /></a>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://react.dev/' target='blank' rel="noopener noreferrer">
                        <BiLogoReact className='cursor-pointer text-[80px] text-cyan-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]' /></a>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://tailwindcss.com/' target='blank' rel="noopener noreferrer">
                        <BiLogoTailwindCss className='cursor-pointer text-[80px] text-teal-400 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]' /></a>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://www.w3schools.com/nodejs/' target='blank' rel="noopener noreferrer">
                        <BiLogoNodejs className='cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]' /></a>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://git-scm.com/' target='blank' rel="noopener noreferrer">
                        <BiLogoGit className='cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]' /></a>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://github.com/' target='blank' rel="noopener noreferrer">
                        <BiLogoGithub className='cursor-pointer text-[80px] text-gray-400 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]' /></a>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://www.w3schools.com/html/' target='blank' rel="noopener noreferrer">
                        <BiLogoHtml5 className='cursor-pointer text-[80px] text-orange-400 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]' /></a>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://www.w3schools.com/mongodb/' target='blank' rel="noopener noreferrer">
                        <BiLogoMongodb className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' /></a>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://www.w3schools.com/css/' target='blank' rel="noopener noreferrer">
                        <BiLogoCss3 className='cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]' /></a>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView='visible'
                    transition={{ duration: 0.5 }}>
                    <a href='https://ubuntu.com/' target='blank' rel="noopener noreferrer">
                        <SiUbuntu className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]' /></a>
                </motion.div>
            </div>
        </div>
    )
}

export default Tech
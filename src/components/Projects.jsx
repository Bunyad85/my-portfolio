import React from 'react';
import { motion } from "motion/react";
import { FaTachometerAlt, FaCar } from "react-icons/fa";

const projects = [
    {
        title: "Car-Site-Task",
        description: "A responsive car website built with React, allowing users to browse and explore different vehicles.",
        image: <FaCar className="text-6xl text-yellow-500" />,
        link: "https://car-site-task.netlify.app/"
    },
    {
        title: "Dashboard",
        description: "Interactive admin dashboard built with React, Tailwind CSS, and Chart.js for data visualization.",
        image: <FaTachometerAlt className="text-6xl text-blue-500" />,
        link: "https://dashboardbundev.netlify.app/"
    },
    {
        title: "Car Listing Website",
        description: "A responsive car listing website where users can browse, search, and filter car ads.",
        image: <FaCar className="text-6xl text-green-500" />,
        link: "https://carzonefreetest.netlify.app/"
    }

];

const Projects = () => {
    return (
        <div id='projects' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-12 px-4 py-20 sm:gap-16 sm:px-6 sm:py-24 md:px-10'>
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className='text-4xl md:text-6xl font-light text-white'
            >
                Projects
            </motion.h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        target='_blank'
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className='flex flex-col items-center justify-start gap-4 rounded-xl bg-black/70 p-5 shadow-lg shadow-indigo-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600'
                    >
                        <div className='w-full h-40 flex items-center justify-center'>
                            {typeof project.image === "string" ? (
                                <img src={project.image} alt={project.title} className='rounded-md w-full h-40 object-cover' />
                            ) : (
                                project.image
                            )}
                        </div>
                        <h2 className='text-xl font-semibold text-white'>{project.title}</h2>
                        <p className='text-gray-400 text-sm text-center'>{project.description}</p>
                    </motion.a>
                ))}
            </div>
        </div>
    )
}

export default Projects;

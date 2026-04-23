import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            id="home"
            className="flex min-h-screen w-full items-center justify-center px-4 py-24 sm:px-6 md:px-16 md:py-28 lg:px-32"
        >
            <div className="flex flex-col items-center justify-center gap-10 text-white">

                {/* IMAGE */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        src="/image.png"
                        alt="profile"
                        className="w-[200px] cursor-pointer rounded-full
                        transition-all duration-300 hover:-translate-y-1 hover:scale-105
                        shadow-lg shadow-cyan-500/40
                        hover:shadow-blue-600/50
                        md:w-[200px]"
                    />
                </motion.div>

                {/* TEXT */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
                >
                    <h1 className="bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent text-6xl font-light">
                        Bunyad Safarli
                    </h1>

                    <h3 className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent text-2xl md:text-3xl">
                        Front End Developer
                    </h3>

                    {/* BUTTON */}
                    <button
                        onClick={() => setIsOpen((p) => !p)}
                        className="mb-4 text-sm text-blue-400 hover:underline"
                    >
                        {isOpen ? "Hide" : "About Me"}
                    </button>

                    {/* ABOUT */}
                    {isOpen && (
                        <p className="text-pretty text-sm text-gray-400 leading-relaxed md:text-base">
                            Frontend proqramcı olaraq React və TypeScript ilə müasir və istifadəçi dostu
                            interfeyslər hazırlayıram. Responsive dizayn, performans və təmiz kod prinsiplərinə
                            önəm verirəm.
                        </p>
                    )}
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
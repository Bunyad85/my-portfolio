import React from "react";
import {
    BiLogoCss3,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoMongodb,
    BiLogoNodejs,
    BiLogoReact,
    BiLogoTailwindCss,
    BiLogoTypescript,
} from "react-icons/bi";
import { SiUbuntu } from "react-icons/si";
import { motion } from "framer-motion";

const icons = [
    { icon: BiLogoJavascript, color: "text-yellow-400", link: "https://www.w3schools.com/js/" },
    { icon: BiLogoTypescript, color: "text-blue-500", link: "https://www.w3schools.com/typescript/" },
    { icon: BiLogoReact, color: "text-cyan-400", link: "https://react.dev/" },
    { icon: BiLogoTailwindCss, color: "text-teal-400", link: "https://tailwindcss.com/" },
    { icon: BiLogoNodejs, color: "text-green-400", link: "https://nodejs.org/" },
    { icon: BiLogoGithub, color: "text-gray-300", link: "https://github.com/" },
    { icon: BiLogoHtml5, color: "text-orange-400", link: "https://www.w3schools.com/html/" },
    { icon: BiLogoCss3, color: "text-blue-400", link: "https://www.w3schools.com/css/" },
    { icon: BiLogoMongodb, color: "text-green-500", link: "https://www.mongodb.com/" },
    { icon: SiUbuntu, color: "text-orange-500", link: "https://ubuntu.com/" },
];

const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Tech = () => {
    return (
        <div
            id="tech"
            className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
        >
            {/* TITLE */}
            <motion.h1
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                className="text-4xl font-light text-white md:text-6xl"
            >
                Technologies
            </motion.h1>

            {/* ICON GRID */}
            <div className="grid w-full grid-cols-2 place-items-center gap-10 p-5 md:flex md:flex-wrap md:justify-center">
                {icons.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <motion.a
                            key={i}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="transition-all duration-300 hover:-translate-y-3"
                        >
                            <Icon className={`text-[90px] ${item.color}`} />
                        </motion.a>
                    );
                })}
            </div>
        </div>
    );
};

export default Tech;
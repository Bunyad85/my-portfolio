import image from "/public/image.png";
import React from 'react'
import { motion } from "motion/react";
import { useState } from 'react';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
            <div className="flex flex-col items-center justify-center gap-10 text-white">
                <motion.div
                    initial={{ y: - 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}

                >
                    <img src={image} alt="" className="w-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900
            transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 
            md:w-[200px]" />
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}

                    className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
                    <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
            text-5xl font-light md:text-5xl ">Bunyad Safarli</h1>
                    <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent
            text-2xl md:text-3xl">Full Stack Developer</h3>

                    <button
                        onClick={() => setIsOpen(!isOpen)} className="mb-4 text-sm text-blue-400 hover:underline">
                        {isOpen ? "Hide" : "About Me"}
                    </button>

                    {isOpen && (
                        <p className="md:text-base text-pretty text-sm text-gray-400 leading-relaxed">Salam, mən Bunyad – texnologiyaya həvəsi olan və daim öyrənməyə çalışan bir full-stack veb proqramçıyam. Veb tətbiqlər yaratmaq mənim üçün sadəcə iş deyil, həm də bir yaradıcılıq formasıdır. İstifadəçi təcrübəsini ön planda tutan, funksional və təmiz kodlu layihələr hazırlamaqdan zövq alıram.

                            İşlərimdə əsasən React,TypeScript,Node.js və Express istifadə edirəm. Məlumatların idarəsi və saxlanmasında isə MongoDB ilə rahat və effektiv həllər tətbiq edirəm. Bu texnologiyalar vasitəsilə həm müasir dizayna sahib, həm də performanslı sistemlər hazırlamaq mümkündür.

                            Frontend və backend sahələrində işləmək mənə geniş baxış bucağı qazandırıb və hər iki tərəfin necə harmoniya içində işlədiyini dərindən anlamağa imkan verib. Layihələrdə məsuliyyəti üzərimə götürməkdən və çətinliklər qarşısında daha güclü olmağı öyrənmişəm.

                            Hədəfim – biliklərimi real layihələrdə tətbiq etmək, daha böyük komandaların bir parçası olmaq və gələcəkdə öz texnoloji məhsullarımı yaratmaqdır.</p>
                    )}


                </motion.div>
            </div>
        </div>
    )
}

export default Hero
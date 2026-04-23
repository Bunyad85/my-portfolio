import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 🔒 scroll lock
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    const links = [
        { href: "#home", label: "Home" },
        { href: "#tech", label: "Tech" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-4 py-4 text-white backdrop-blur-md sm:px-6 md:px-10 md:py-6 md:justify-evenly">

            {/* LOGO */}
            <a
                href="#home"
                className="bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-2xl text-transparent font-semibold opacity-90 hover:opacity-100 sm:text-3xl"
            >
                Bunyad
            </a>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex gap-10">
                {links.map((l, i) => (
                    <li key={i}>
                        <a
                            href={l.href}
                            className="opacity-70 hover:opacity-100 transition"
                        >
                            {l.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* DESKTOP SOCIAL */}
            <ul className="hidden md:flex gap-5">
                <li className="text-xl opacity-70 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                    <a
                        href="https://www.linkedin.com/in/bunyad-safarli-54a650236"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsLinkedin />
                    </a>
                </li>

                <li className="text-xl opacity-70 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                    <a
                        href="https://github.com/Bunyad85"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGithub />
                    </a>
                </li>

                <li className="text-xl opacity-70 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                    <a
                        href="https://www.facebook.com/Shafarov/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsFacebook />
                    </a>
                </li>
            </ul>

            {/* MOBILE BUTTON */}
            <button
                className="block text-4xl md:hidden"
                onClick={() => setIsOpen((p) => !p)}
            >
                {isOpen ? <BiX /> : <BiMenu />}
            </button>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="fixed right-0 top-[73px] z-40 flex h-[calc(100vh-73px)] w-[78%] max-w-sm flex-col gap-8 border border-gray-800 bg-black/90 p-6 sm:top-[81px] sm:h-[calc(100vh-81px)] sm:w-2/3">

                    {/* LINKS */}
                    <ul className="flex flex-col gap-8">
                        {links.map((l, i) => (
                            <li key={i}>
                                <a
                                    href={l.href}
                                    onClick={closeMenu}
                                    className="opacity-70 hover:opacity-100 transition"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* MOBILE SOCIAL */}
                    <ul className="flex gap-5">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/bunyad-safarli-54a650236"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsLinkedin className="text-xl opacity-70 hover:text-blue-500 transition" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/Bunyad85"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsGithub className="text-xl opacity-70 hover:text-gray-300 transition" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.facebook.com/Shafarov/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsFacebook className="text-xl opacity-70 hover:text-blue-600 transition" />
                            </a>
                        </li>
                    </ul>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
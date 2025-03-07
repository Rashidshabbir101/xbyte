"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "../../ui/button"
import { motion } from "framer-motion"
import React, { useState } from 'react'
import { FaSun, FaMoon, FaLinkedin, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar({ isDarkMode, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const menuItems = [
        { title: "Home", href: "/" },
        { title: "Who We Are", href: "/about" },
        { title: "Services", href: "/services" },
        { title: "How We Do", href: "/process" },

    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} shadow-md`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/Logo.png"
                            alt="Logo"
                            width={90}
                            height={90}
                            className="h-26 w-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link key={item.href} href={item.href} className="text-base font-medium hover:text-yellow-500 transition-all">
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Controls */}
                    <div className="flex items-center gap-5">
                        <Button
                            onClick={() => window.open("https://wa.me/+923255857101", "_blank")}
                            className="hidden md:block bg-yellow-400 text-white px-4 py-1 rounded shadow-md hover:bg-yellow-600 transition-all"
                        >
                            Quick call

                        </Button>

                        {/* Social Icons */}
                        <a href="https://linkedin.com/in/rashid-shabbir" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-500">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/RShabbir18600?t=tQi5ExmvVjM314r_WxHv3Q&s=09" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-500">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/__rashidshabbir/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-500">
                            <FaInstagram />
                        </a>

                        {/* Theme Toggle */}


                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-full bg-yellow-400 text-black hover:bg-yellow-500"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden flex flex-col items-center gap-4 mt-4 bg-white py-4 shadow-lg">
                        {menuItems.map((item) => (
                            <Link key={item.href} href={item.href} className="text-base hover:text-yellow-500 transition-all">
                                {item.title}
                            </Link>
                        ))}
                        <Button
                            onClick={() => window.open("https://wa.me/+923255857101", "_blank")}
                            className="bg-green-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition-all"
                        >
                            Drop message
                        </Button>
                    </div>
                )}
            </div>
        </motion.header>
    )
}
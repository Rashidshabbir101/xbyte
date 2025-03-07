"use client"

import { motion } from "framer-motion"
import Button from "../../ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

const changingWords = ["Innovation", "Success", "Technology", "Growth"]

export default function HeroSection() {
    const [currentWord, setCurrentWord] = useState(changingWords[0])
    let wordIndex = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            wordIndex = (wordIndex + 1) % changingWords.length;
            setCurrentWord(changingWords[wordIndex]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center text-center pt-32 relative overflow-hidden bg-gray-900 text-white">
            {/* Decorative Shields */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute left-0 top-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"
            />
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute right-0 bottom-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-4 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl font-extrabold leading-tight mb-6">
                        Your Gateway to the Future of <span className="text-yellow-400">{currentWord}</span>
                    </h1>
                    {/* <p className="text-xl text-gray-300 mb-8 max-w-2xl text-center">
                        We transform businesses through innovative digital solutions and cutting-edge technology, ensuring your
                        success in the digital era.
                    </p> */}
                    <Button
                        className="bg-yellow-400 text-black hover:bg-yellow-500 text-xl px-10 py-5 rounded-full shadow-lg transition-all"
                        onClick={() => window.location.href = "/services"} // Changed 'href' to 'onClick' for navigation
                    >
                        Get Started
                    </Button>
                    <p className="mt-6 text-lg text-gray-400 italic text-center">
                        "Innovating the Future, One Byte at a Time"
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

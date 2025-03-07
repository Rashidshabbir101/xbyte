"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
    return (
        <main className="pt-32">
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-4xl font-bold mb-6">Who We Are</h1>
                    <p className="text-xl text-gray-300 mb-12">
                        A team of passionate technologists dedicated to transforming businesses
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-300 mb-6">
                            To empower businesses with innovative technology solutions that drive growth and success in the digital
                            age.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                        <Image src="/ab.jpg" alt="Our Mission" width={300} height={200} className="rounded-lg px-4" />
                    </motion.div>
                </div>
            </section>
        </main>
    )
}


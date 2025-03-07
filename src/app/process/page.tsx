"use client"

import { motion } from "framer-motion";

export default function TimelineSection() {
    const steps = [
        {
            title: "Discovery Phase",
            description: "Understanding your needs and objectives",
        },
        {
            title: "Strategic Planning",
            description: "Developing the perfect roadmap",
        },
        {
            title: "Design & Development",
            description: "Bringing ideas to life",
        },
        {
            title: "Testing & Deployment",
            description: "Ensuring quality and performance",
        },
        {
            title: "Continuous Support",
            description: "Ongoing maintenance and updates",
        },
    ];

    return (
        <section className="py-20 bg-black/20 flex justify-center items-center">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-16"
                >
                    Empowering Your Tech Journey
                </motion.h2>

                <div className="relative flex flex-col items-center">
                    {/* Vertical Line */}
                    <div className="absolute w-1 bg-yellow-400/50 h-full left-1/2 transform -translate-x-1/2" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center mb-12 w-full"
                        >
                            <div className="w-8 h-8 rounded-full bg-yellow-400 mb-4 z-10" />
                            <div className="bg-black/30 p-6 rounded-lg max-w-md backdrop-blur-md">
                                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, ShoppingBag, Users, ShieldCheck } from "lucide-react";
import { Code2, Rocket, Shield } from "lucide-react"

export default function FeaturesSection() {
    const features = [
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "Custom Development",
            description: "Tailored solutions built with cutting-edge technology",
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Fast Deployment",
            description: "Quick and efficient implementation of your projects",
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Secure Solutions",
            description: "Enterprise-grade security for your applications",
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Website Development",
            description: "Modern, responsive, and high-performance websites tailored to your needs."
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "App Development",
            description: "Feature-rich mobile applications for iOS and Android with seamless user experience."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Social Media Solutions",
            description: "Engaging and optimized social media platforms to grow your online presence."
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "Custom Development",
            description: "Tailor-made software solutions crafted to meet unique business needs."
        },
        {
            icon: <ShoppingBag className="w-8 h-8" />,
            title: "E-Commerce Stores",
            description: "Scalable and secure online stores with smooth payment integration."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Authentic & Classic Services",
            description: "Reliable and top-quality digital services ensuring lasting impact."
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Innovating the Future, One Byte at a Time</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        We combine creativity with technical expertise to deliver outstanding digital solutions
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-black/20 p-6 rounded-lg backdrop-blur-sm hover:bg-black/30 transition-colors"
                        >
                            <div className="text-yellow-400 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}


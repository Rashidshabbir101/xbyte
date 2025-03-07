import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// Use if working with Next.js, otherwise use window.location

export default function Footer() {
    const [messageSent, setMessageSent] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setMessageSent(true);

        // Redirect to home page after 2 seconds
        setTimeout(() => {
            setMessageSent(false);
            router.push("/"); // Use window.location.href = "/" if not using Next.js
        }, 2000);
    };

    return (
        <footer className="bg-gray-900 text-white py-8 text-center relative">
            <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {/* Brand Info */}
                <div>
                    <h2 className="text-lg font-bold">BrandXByte</h2>
                    <p className="text-sm mt-1">Innovating the Future</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-md font-semibold">Quick Links</h3>
                    <ul className="mt-1 space-y-1">
                        <li><a href="/" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="/services" className="hover:text-yellow-400">Services</a></li>

                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-md font-semibold">Contact Us</h3>
                    <p className="mt-1">Phone: <a href="tel:+923255857101" className="hover:text-yellow-400">+92 325 5857101</a></p>
                    <p>Email: <a href="mailto:gmailbrandxbyte@gmail.com" className="hover:text-yellow-400">brandxbyte@gmail.com</a></p>
                    <p>Address: Lahore, Canal Road</p>
                </div>

                {/* Drop a Message */}
                <div>
                    <h3 className="text-md font-semibold">Drop a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Your Email" className="w-full px-3 py-1 mt-1 text-black rounded-md focus:ring-2 focus:ring-yellow-400" required />
                        <input type="text" placeholder="Your Message" className="w-full px-3 py-1 mt-2 text-black rounded-md focus:ring-2 focus:ring-yellow-400" required />
                        <button type="submit" className="mt-2 bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 w-full">Send</button>
                    </form>
                </div>
            </div>

            {/* Social Media & Copyright */}
            <div className="mt-6 text-center border-t border-gray-700 pt-4">
                <div className="flex justify-center space-x-3">
                    <a href="https://linkedin.com/in/rashid-shabbir" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-yellow-400"><FaLinkedin /></a>
                    <a href="https://x.com/RShabbir18600?t=tQi5ExmvVjM314r_WxHv3Q&s=09" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-yellow-400"><FaTwitter /></a>
                    <a href="https://www.instagram.com/__rashidshabbir/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-yellow-400"><FaInstagram /></a>
                </div>
                <p className="text-xs mt-3">&copy; {new Date().getFullYear()} BrandXByte. All Rights Reserved.</p>
            </div>

            {/* Success Message Popup */}
            {messageSent && (
                <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg animate-fade-in">
                    ✅ Message Sent Successfully!
                </div>
            )}
        </footer>
    );
}

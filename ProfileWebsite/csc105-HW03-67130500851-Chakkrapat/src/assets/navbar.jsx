import Home from "../pages/home.jsx";
import AboutMe from "../pages/aboutme.jsx";
import Gallery from "../pages/gallery.jsx";
import React, {useState} from "react";

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    return (
        <div className="font-sans">
            <header className="bg-gray-200 py-4">
                <nav className="container mx-auto px-4">
                    <ul className="flex space-x-4">
                        <li className="font-bold">Keshi</li>
                        <li>
                            <button onClick={() => setActiveSection('home')} className="hover:text-gray-700">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('about')} className="hover:text-gray-700">
                                About Me
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveSection('gallery')} className="hover:text-gray-700">
                                Gallery
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-gray-700 bg-black text-white font-bold py-0.1 px-0.1 rounded">
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            {/*<main>*/}
            {/*    {activeSection === 'home' && <Home />}*/}
            {/*    {activeSection === 'about' && <AboutMe />}*/}
            {/*    {activeSection === 'gallery' && <Gallery />}*/}
            {/*</main>*/}
        </div>
    )
}

export default Navbar;
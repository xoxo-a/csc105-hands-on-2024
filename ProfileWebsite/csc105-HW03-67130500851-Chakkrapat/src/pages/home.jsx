import React from 'react';

function Home() {
    return (
        <section className="bg-white py-8 md:py-16 flex-col">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">Casey Luong (Keshi)</h1>
                        <p className="text-black font-bold mb-4">I'm a Singer, Composer, Producer</p>
                        <p className="text-gray-600 mb-4"></p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/keshimusic" className="text-gray-500 hover:text-gray-700">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png" alt="Facebook" style={{ width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
                            </a>
                            <a href="https://www.instagram.com/keshi/" className="text-gray-500 hover:text-gray-700">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{ width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
                            </a>
                            <a href="https://x.com/keshimusic" className="text-gray-500 hover:text-gray-700">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/027/395/710/small_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png" alt="X" style={{ width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
                            </a>
                        </div>
                        <button className="bg-black text-white font-bold py-2 px-4 rounded mt-4">
                            My Portfolio
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://dynamicmedia.livenationinternational.com/s/p/d/976b0f94-9365-4fae-bf18-48cef1b62cfc.jpeg"
                            alt="Keshi"
                            className="rounded-lg shadow-md w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
import React from 'react';

function AboutMe() {
    return (
        <section className="bg-gray-100 py-16 flex-col">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">About Me</h2>
                <div className="md:flex md:items-center md:gap-8">
                    <div className="md:w-1/3">
                        <img
                            src="https://www.thaiticketmajor.com/variety/img_content/imgeditor/Press%20Photo%204%20(Angella%20Choe)_0.jpg"
                            alt="Keshi - About Me"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Singer, Composer & Producer</h3>
                        <p className="text-gray-600 mb-4">
                            Casey Thai Luong (born November 4, 1994),[1] known professionally as Keshi, is an American singer, songwriter, record producer, and multi-instrumentalist. He is best known for his songs "UNDERSTAND", "LIMBO", "beside you" and “Soft Spot”. He released his debut album Gabriel in 2022 and his sophomore album Requiem in 2024: Prior to that, he had released six EPs. (“if you're not the one for me who is”, “good days”, “THE REAPER”, “skeletons”, “bandaids” and “always”)                        </p>
                        <p className="text-gray-600 mb-4">
                            ...
                        </p>
                        <button className="bg-black text-white font-bold py-2 px-4 rounded">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
import React from 'react';

function Gallery() {
    const images = [
        'https://i8.amplience.net/i/naras/Keshi_Press_Photo_Credit_Angella_Choe',
        'https://res.theconcert.com/c_thumb/8e0a8ef5707ea80f95686808e4736aef7/1.jpg',
        'https://www.nme.com/wp-content/uploads/2023/07/keshi-epilogue-tour-hong-kong-credit-rick-kern-getty-images.jpg',
        'https://www.innnews.co.th/wp-content/uploads/2021/09/Keshi-%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B5-2.jpg',
        'https://today-obs.line-scdn.net/0h7CBgKMeaaGx_HnjscRYXO0dIZB1MeHJlXX4lCF0ZMAwCMns8RX47D1MZMkBbe3huXywjC1NMMlgFfik9Rw/w644',
        'https://s.isanook.com/jo/0/ud/488/2441049/keshi.jpg',
    ];

    return (
        <section className="bg-white py-16 flex-col">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="shadow-md rounded-lg overflow-hidden">
                            <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
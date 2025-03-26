import React, { useRef, useState } from 'react';

const testimonials = [
    {
        name: 'Zack Carrizo',
        feedback: "ZeptorAI’s AI Pill is a pure time-saver! It booked 20 solar appointments for us in a single day. My team is amazed! It used to take us a whole week to do that before. Now it’s quick and awesome. We love it!",
    },
    {
        name: 'Edward Woods',
        feedback: "ZeptorAI’s agent is amazing! It handles over 90% of our calls perfectly and answers questions right away. Only the tough ones go to my team. Our replies are so fast now, and customers are loving it!",
    },
    {
        name: 'Rebecca Mackay',
        feedback: "ZeptorAI’s AI just helped me close a deal! It kept following up with a lead I forgot about. Recently, they reached out, ready to install solar panels. I did nothing, and now I’ve got a huge win lined up!",
    },
    {
        name: 'Dylan Hughes',
        feedback: "This AI Pill is a total game-changer! It books way more appointments than my reps ever could. Even better, leads think it’s a real person! It’s smooth, natural, and converting like crazy!",
    },
    {
        name: 'John Grieves',
        feedback: "Hey, ZeptorAI’s AI Pill is incredible! It qualifies leads perfectly, so I only deal with serious buyers and sellers. No more time lost on dead leads. It’s saving me hours every week!",
    },
];

export default function Testimonials() {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(1); // Start from center

    const scrollToIndex = (index) => {
        const container = containerRef.current;
        if (container) {
            const cardWidth = window.innerWidth < 768 ? container.offsetWidth / 1.16 : container.offsetWidth / 3;
            container.scrollTo({
                left: (index - 1) * cardWidth, // Center the clicked card
                behavior: 'smooth',
            });
            setCurrentIndex(index);
        }
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto h-80 my-40">
            <h2 className='text-gray-50 text-5xl font-medium text-center my-10'>Testimonials</h2>
            {/* Card Container */}
            <div
                ref={containerRef}
                className="flex justify-center gap-5 overflow-hidden scroll-smooth"
            >
                {/* Adding Clone Cards for Infinite Feel */}
                {[testimonials[testimonials.length - 1], ...testimonials, testimonials[0]].map((testimonial, index) => (
                    <div
                        key={index}
                        style={{
                            background: `linear-gradient(to bottom right, #31D11C -150.4%, #000000 91.66%)`
                        }}
                        className={`flex-none w-[80%] md:w-1/3 p-4 h-60 rounded-2xl border border-green-light`}
                    >
                        <p className="text-sm md:text-lg text-white/70 mb-4">"{testimonial.feedback}"</p>
                        <h3 className="text-lg md:text-xl text-white/70 font-normal md:font-semibold">{testimonial.name}</h3>
                    </div>
                ))}
            </div>

            {/* Circular Buttons */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`w-4 h-4 rounded-full transition ${currentIndex === index ? 'bg-green-light' : 'bg-green-dark'}`}
                    />
                ))}
            </div>
        </div>
    );
}
import { useState } from 'react';

export default function Accordion({ data }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full px-5 md:px-0 max-w-6xl mx-auto">
            {data.map((item, index) => (
                <div key={index} className="mb-5">
                    {/* Accordion Header */}
                    <div
                        className="flex justify-between items-center py-6 px-4 bg-[#0D1F0A] border border-green-light rounded-t-lg cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h2 className="text-white text-sm md:text-base font-semibold">{item.title}</h2>
                        <button className="text-white text-xl">
                            {openIndex === index ? '−' : '+'}
                        </button>
                    </div>

                    {/* Accordion Content */}
                    {openIndex === index && (
                        <div className="p-4 bg-green-dark border border-green-light text-white rounded-b-lg">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
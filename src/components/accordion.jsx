import { Minus, Plus } from 'lucide-react';
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
                        className={`flex justify-between items-center py-6 px-4 bg-[#0D1F0A] border ${openIndex === index && 'border-b-0 rounded-b-none'} border-green-light rounded-lg cursor-pointer`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <h2 className="text-white text-sm md:text-base font-semibold">{item.title}</h2>
                        <button className="text-white text-xl">
                            {openIndex === index ? <Minus className='border border-green-light rounded-full text-green-light p-1 size-6' /> : <Plus className='border border-green-light rounded-full text-green-light p-1 size-6' />}
                        </button>
                    </div>

                    {/* Accordion Content */}
                    {openIndex === index && (
                        <div className="p-4 bg-[#0D1F0A] border border-t-0 border-green-light text-white rounded-lg rounded-t-none">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
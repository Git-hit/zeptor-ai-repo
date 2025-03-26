import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const links = [
        {
            title: 'Solution',
            link: '#solution',
        },
        {
            title: 'About Us',
            link: '#about-us',
        },
    ];

    return (
        <div className="bg-[#030C01] lg:pb-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 relative">
                <header className="flex items-center justify-between py-4 md:py-8">
                    <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                        <img src="/Zeptor AI Logo.svg" width={150} alt="Zeptor AI" />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden gap-6 lg:flex">
                        {links?.map((item, index) => (
                            <a key={index} href={item.link} className="text-base font-medium text-gray-50 transition-all duration-150 hover:bg-green-light hover:text-slate-900 active:text-slate-900 rounded py-1.5 px-2">
                                {item.title}
                            </a>
                        ))}
                    </nav>

                    {/* Action Buttons */}
                    <div className="hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
                        <a href="#" className="inline-block rounded-lg bg-green-dark hover:bg-green-light transition-all duration-150 border border-green-light px-8 py-3 text-center text-sm font-semibold text-gray-50 hover:text-slate-900 md:text-base">Get started</a>
                    </div>

                    {/* Mobile Menu Button */}
                    {/* <button type="button" onClick={toggleMenu} className="inline-flex items-center gap-2 rounded-lg bg-[#0B2F05] text-white px-2.5 py-2 text-sm font-semibold md:text-base lg:hidden border to-r">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d={isMenuOpen ? 'M4 5h12M4 10h12M4 15h12' : 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'} clipRule="evenodd" />
                        </svg>
                    </button> */}
                    <button type='button' onClick={toggleMenu} className='lg:hidden'>
                        <div className='h-full w-full rounded-xl bg-gradient-to-tr justify-center items-center from-[#3ED42A] to-[#BABABA]'>
                            <div className='bg-[#0B2F05] inline-flex items-center gap-2 rounded-xl text-white px-2.5 py-2 text-sm font-semibold md-text-base lg:hidden mx-[1px] my-[1px]'>
                                {isMenuOpen ? <X /> : <Menu />}
                            </div>
                        </div>
                    </button>
                </header>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="absolute border-b left-0 w-full border-green-light bg-[#030C01] lg:hidden mt-4 flex flex-col items-center gap-4">
                        {['Home', 'Pricing', 'About'].map((item) => (
                            <a key={item} href="#" className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                                {item}
                            </a>
                        ))}
                        <div className="flex justify-center mb-5 font1">
                            <button className="bg-border-green px-2 md:px-5 py-3 md:py-4 rounded text-xs md:text-base cursor-pointer transition-all duration-150 hover:shadow-2xl shadow-green-light">Get started</button>
                        </div>
                    </nav>
                )}
            </div>
        </div>
    );
}
import { motion } from "motion/react";

export default function Footer() {
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

    const socials = [
        {
            title: 'TikTok',
            link: 'https://www.tiktok.com/@zeptorai',
            icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <rect width="50" height="50" fill="#111111" rx="8" />
                <path fill="#31D11C" d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
            </svg>
        },
        {
            title: 'Instagram',
            link: 'https://www.instagram.com/zeptorai',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
                <rect width="50" height="50" fill="#111111" rx="8" />
                <path fill="#31D11C" d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
            </svg>
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/company/zeptorai',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
                <rect width="50" height="50" fill="#111111" rx="8" />
                <path fill="#31D11C" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
            </svg>

        },
    ];

    const policies = [
        {
            title: 'Terms Of Service',
            link: '#',
        },
        {
            title: 'Privacy Policy',
            link: '#',
        },
    ]
    return (
        <motion.footer 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111111]"
        >
            <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="col-span-full md:col-span-1"
                    >
                        <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                            <img src="/Zeptor AI Logo.svg" width={150} alt="Zeptor AI" />
                        </a>
                        <p className="mt-3 text-lg md:text-xs sm:text-sm text-white/70">abcbrojo@gmail.com</p>
                        <p className="mt-3 text-lg md:text-xs sm:text-sm text-white/70">Madan Mohan Silk Mill Com, Sonawala Cross Rd No. 2, Goregaon (East)</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="col-span-full lg:col-span-2 flex md:justify-center"
                    >
                        <div className="mt-3 flex flex-col gap-7 text-base">
                            {links.map((item, index) => (
                                <a key={index} className="inline-flex gap-x-2 text-gray-50 hover:underline" href={item.link}>{item.title}</a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="col-span-full lg:col-span-2 flex flex-col md:items-end gap-5"
                    >
                        <p className="hidden md:inline-flex gap-x-2 text-gray-50 text-lg font-medium">Contact</p>
                        <div className="flex gap-1">
                            {socials.map((social, index) => (
                                <a key={index} className="inline-block text-green-light" target="_blank" href={social.link}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="pt-5 mt-5 border-t border-gray-200"
                >
                    <div className="flex justify-between items-center">
                        <p className="text-base md:text-xs sm:text-sm text-white/70">© 2023 S01arvoice A1. All rights reserved.</p>
                        <div className="flex gap-4 text-sm">
                            {policies.map((policy, index) => (
                                <a key={index} className="text-white/70 hover:underline" href={policy.link}>{policy.title}</a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}
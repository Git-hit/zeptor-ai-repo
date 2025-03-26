import { ArrowDownRight } from "lucide-react";
import '../index.css';
import { motion } from "motion/react";

export default function Hero() {
    return (
        <div>
            {/* Attention Banner */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center mt-10 lg:mt-0 text-white space-x-4 border border-border-green w-fit mx-auto px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base"
            >
                <ArrowDownRight />
                <p>Attention Solar Companies</p>
            </motion.div>

            {/* Main Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex text-center text-white text-lg md:text-3xl mx-12 mt-4 md:mx-16 lg:mx-52 xl:mx-60 xl:text-4xl 2xl:mx-64 2xl:text-5xl"
            >
                <h1>
                    Increase your <span className="text-border-green"> booking rate by 30% + closing rate by 16.6% </span>
                    through processing leads into <span className="text-border-green">solar qualified appointments 24*7</span>
                    from just <span className="text-border-green">1/6th of your usual cost </span>
                    using our AI <span className="text-border-green">appointment-setting pills.</span>
                </h1>
            </motion.div>

            {/* Subtext */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-12 mt-6 flex text-center text-neutral-400 text-xs md:text-base md:mx-28 lg:mx-52 xl:mx-72 2xl:mx-[30rem]"
            >
                <p>
                    Upgrade your outdated team with our AI-powered pills and boost your team's power by 10X through installing our plug-and-play pills.
                </p>
            </motion.div>

            {/* Video Section */}
            <div className="justify-center items-center flex mt-10 relative">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-[80%] md:w-[60%] flex justify-center"
                >
                    <iframe className="relative z-[2] w-[80%] md:h-[500px] lg:h-[300px]"
                        src="https://www.youtube.com/embed/SVRH-pBw0cc"
                        title="Aakash Gupta | Angry Young Man | Full Stand-up Comedy Special"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute rounded-full w-1/2 md:w-[60%] h-1/4 md:h-full z-[1] bg-border-green blur-[4rem] opacity-25"
                />
            </div>
            <div className="flex justify-center items-center my-10 font1">
                <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(49, 209, 28, 0.4)" }}
                    className="flex bg-[#00000030] p-3 rounded-lg cursor-pointer"
                >
                    <div className="m-[-5px] flex bg-gradient-to-t from-[#32D11D52] cursor-pointer to-white rounded-lg">
                        <button className="bg-border-green px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-base my-[2px] cursor-pointer transition-all duration-150">Claim a custom pill for your business at $0</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
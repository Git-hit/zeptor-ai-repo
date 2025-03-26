import { motion } from 'motion/react';

export default function CTA() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-5 flex flex-col gap-10 p-5 md:px-40 md:py-10 max-w-6xl md:mx-auto my-28 border-t border-green-light/20 bg-gradient-to-b from-[#111111] to-green-light/20 rounded-lg"
        >
            <h2 className="text-gray-50 text-2xl md:text-5xl text-center leading-normal">Ready to install the update to get 10X your team's power?</h2>
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
        </motion.div>
    )
}
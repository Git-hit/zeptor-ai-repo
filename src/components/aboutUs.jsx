import { motion } from 'framer-motion';

export default function AboutUs() {
    return (
        <motion.div 
            id="about-us" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-10 max-w-6xl mx-auto my-10 md:my-40"
        >
            <h2 className='text-gray-50 text-2xl md:text-5xl font-medium text-center my-10'>About Us</h2>
            <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/70 text-sm md:text-lg text-center px-5 md:px-0"
            >
                At ZeptorAI, we’re AI automation experts building smart Pills. Think next-level AI
                voice agents and AI systems for solar companies. We craft custom solutions and
                processes or plug our Pills into your company’s internal flow, like CRM and stuff way
                more advanced than that. Our goal is to make your work smoother, help you snag more
                deals, and skip the tech hassles or hefty staff costs. With us, you’re not missing out on
                chances. You’re getting fast, clear communication to boost your business.
            </motion.p>
        </motion.div>
    )
}
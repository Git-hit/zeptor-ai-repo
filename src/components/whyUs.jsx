import { motion } from "framer-motion";

export default function WhyUs() {
    const cards = [
        {
            icon: '/Hand SVG.svg',
            title: 'Seamless Setup',
            desc: 'A plug-and-play system that takes 0 effort one time to fit in your lead generation process and qualifies leads on autopilot without lifting a finger.',
        },
        {
            icon: '/Badge SVG.svg',
            title: 'Exclusive Qualified Leads',
            desc: 'Engineered by our elite team of developers and AI experts, it matches the performance of VAs, sales reps, and in-house teams, often performing even better.',
        },
        {
            icon: '/Savings SVG.svg',
            title: 'Big Savings',
            desc: 'Save over $30,000+ every year instead of hiring sales reps and teams, with unlimited power for qualified leads where the sky’s truly the limit.',
        }
    ]

    return (
        <div className="my-14 md:my-36 flex flex-col gap-7 max-w-6xl mx-auto">
            <h2 className="text-center text-gray-50 text-2xl px-6 md:px-0 md:text-5xl font-medium">Why Trust Us to Qualify Your Solar Leads?</h2>
            <p className="text-center text-sm px-6 md:px-0 md:text-lg text-white/70">Through proven insights, we’ve uncovered a truth, top marketing leaders don’t waste time or money on VAs, sales reps, or teams for lead qualification, instead dominating with AI to convert raw and dead leads into appointments, yet many struggle, spending thousands, and that’s where our system comes in with three key qualities.</p>
            <div className="flex flex-col md:flex-row gap-5 md:justify-between items-center">
                {cards?.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="flex flex-col gap-5 px-5 md:px-0 min-h-[200px]"
                    >
                        <div className="flex items-center gap-3">
                            <img className="bg-green-dark border border-green-light rounded-md px-4 py-3 size-12" src={card.icon} alt={`Pill ${index + 1}`} />
                            <p
                                className="text-base text-gray-50 px-3 py-2.5 w-full relative overflow-hidden"
                                style={{
                                    borderRadius: "6px",
                                    background: "linear-gradient(to right, #31D11C -122.4%, #030C01 91.66%)",
                                    padding: "2px 2.5px", // Adjust border thickness
                                }}
                            >
                                <span
                                    className="bg-gradient-to-r from-green-dark to-[#030C01]"
                                    style={{
                                        display: "block",
                                        // background: `linear-gradient(76.51deg, #31D11C 28.89%, #030C01 69.79%)`, // Inner background
                                        borderRadius: "4px", // Inner radius to match
                                        padding: "10px 12px",
                                        maskImage: "linear-gradient(#fff, #fff)",
                                        WebkitMaskImage: "linear-gradient(#fff, #fff)",
                                    }}
                                >
                                    {card.title}
                                </span>
                            </p>
                        </div>
                        <p className="text-white/70 text-sm md:text-base">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center items-center my-10 font1">
                <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(49, 209, 28, 0.4)" }}
                    className="flex bg-[#00000030] p-3 rounded-lg cursor-pointer"
                >
                    <div className="m-[-5px] flex bg-gradient-to-t from-[#32D11D52] to-white rounded-lg">
                        <button className="bg-border-green px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-base my-[2px] transition-all duration-150">Claim a custom pill for your business at $0</button>
                    </div>
                </motion.div>
            </div>
        </div >
    )
}
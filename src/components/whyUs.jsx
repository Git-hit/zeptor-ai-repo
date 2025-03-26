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
                    <div key={index} className="flex flex-col gap-5 px-5 md:px-0">
                        <div className="flex items-center gap-3">
                            <img className="bg-green-dark border border-green-light rounded-md p-3 size-12" src={card.icon} alt={`Pill ${index + 1}`} />
                            <p
                                className="text-base text-gray-50 px-3 py-2.5 w-full"
                                style={{
                                    border: `1px solid`,
                                    borderRadius: `6px`,
                                    borderImageSource: `linear-gradient(76.51deg, #31D11C 28.89%, #030C01 69.79%)`,
                                    borderImageSlice: 1,
                                    background: `linear-gradient(to right, #31D11C -122.4%, #000000 91.66%)`,
                                }}
                            >
                                {card.title}
                            </p>
                        </div>
                        <p className="text-white/70 text-sm md:text-base">{card.desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center my-10 font1">
                <button className="bg-border-green px-2 md:px-5 py-3 md:py-4 rounded text-xs md:text-base cursor-pointer transition-all duration-150 hover:shadow-2xl shadow-green-light">Claim a custom pill for your bussiness at $0</button>
            </div>
        </div >
    )
}
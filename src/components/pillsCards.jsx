export default function PillsCards() {
    const cards = [
        {
            title: 'Pill 1',
            icon: '/Pill Green.png',
            desc: 'No more losing customers to slow support! Our AI Pill 1, a voice agent that works on the phone, helps your solar company by grabbing customers in under 10 seconds to answer questions and fix problems, copying your preferred person’s voice and tone while swapping out 90% of the old support team to pick qualified leads and book appointments quick. You get happy customers and more sales, fast as that!',
        },
        {
            title: 'Pill 2',
            icon: '/Pill White.png',
            desc: 'No more paying pricey sales reps or wasting dead leads! Our AI Pill 2, a cold calling voice agent, helps your solar company fast by replacing cold calling teams, calling new leads to book qualified appointments, while turning dead leads from old lists into qualified appointments. You get more customers at lesser cost and high results, effective as that!',
        },
        {
            title: 'Pill 3',
            icon: '/Pill White.png',
            desc: 'Missed appointments killing sales? Our AI Pill 3, a follow-up voice agent, ensures a 99.9% show-up rate for your solar company, calling and emailing customers to confirm bookings with timely reminders, cutting no-shows to keep the pipeline smooth. Every appointment stays locked in, clean as that!',
        },
        {
            title: 'Pill +',
            icon: '/Pill Green.png',
            desc: 'Our Pill Plus delivers a custom solution for your solar company, built for your requests and scenarios to fit your process, cool as that!',
        }
    ]
    return (
        <div id="solution" className="mt-20 md:mt-28">
            <h2 className="text-gray-50 text-4xl font-semibold text-center">Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 md:mt-20 p-5 md:p-0 max-w-7xl mx-auto">
                {cards?.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            background: `linear-gradient(322.05deg, #31D11C -122.4%, #000000 91.66%)`
                        }}
                        className="border border-green-light rounded-lg text-gray-50 flex flex-col gap-5 p-3 md:p-10 col-span-1 h-full min-h-[300px]"
                    >
                        <div className="flex items-center gap-3">
                            <img className="bg-green-dark border border-green-light rounded-md p-2 size-12" src={card.icon} alt={`Pill ${index + 1}`} />
                            <p className="text-3xl font-semibold">{card.title}</p>
                        </div>
                        <p className="text-sm md:text-base">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default function CTA() {
    return (
        <div className="mx-5 flex flex-col gap-10 p-5 md:px-40 md:py-10 max-w-6xl md:mx-auto my-28 border-t border-green-light/20 bg-gradient-to-b from-[#111111] to-green-light/20 rounded-lg">
            <h2 className="text-gray-50 text-2xl md:text-5xl text-center leading-normal">Ready to install the update to get 10X your team's power?</h2>
            <div className="flex justify-center md:my-10 font1">
                <button className="bg-border-green px-2 md:px-5 py-3 md:py-4 rounded text-xs md:text-base cursor-pointer transition-all duration-150 hover:shadow-2xl shadow-green-light">Claim a custom pill for your bussiness at $0</button>
            </div>
        </div>
    )
}
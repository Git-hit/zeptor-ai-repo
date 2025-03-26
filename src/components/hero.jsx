import { ArrowDownRight } from "lucide-react";
import '../index.css'

export default function Hero() {
    return (
        <div>
            <div className="flex justify-center items-center mt-10 lg:mt-0 text-white space-x-4 border border-border-green w-fit mx-auto px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base">
                <div>
                    <ArrowDownRight />
                </div>
                <div>
                    <p className="">
                        Attention Solar Companies
                    </p>
                </div>
            </div>
            <div className="flex text-center text-white text-lg md:text-3xl mx-12 mt-4 md:mx-16 lg:mx-40 xl:mx-60 xl:text-4xl 2xl:mx-64 2xl:text-5xl">
                <h1>
                    Increase your <span className="text-border-green"> booking rate by 30% + closing rate by 16.6% </span> through processing leads into <span className="text-border-green">solar qualified appointments 24*7</span> from just <span className="text-border-green">1/6th of your usual cost </span> using our AI <span className="text-border-green">appointment-setiing pills.</span>
                </h1>
            </div>
            <div className="mx-12 mt-6 flex text-center text-neutral-400 text-xs md:text-base md:mx-28 lg:mx-52 xl:mx-72 2xl:mx-[30rem]">
                <p>
                    Upgrade your outdated team with our AI-powered pills and boost your teams's power by 10X through installing our plug-and-play pills.
                </p>
            </div>
            <div className="justify-center items-center flex mt-10 relative">
                <div className="w-[80%] md:w-[60%]">
                    {/* <img src="/Hero Image.svg" alt="Hero Image" className="relative z-[2] w-full" /> */}
                    <iframe className="relative z-[2] w-full md:h-[500px]" src="https://www.youtube.com/embed/SVRH-pBw0cc" title="Aakash Gupta | Angry Young Man | Full Stand-up Comedy Special" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="absolute rounded-full w-1/2 md:w-[60%] h-1/4 md:h-full z-[1] bg-border-green blur-[4rem] opacity-75"></div>
            </div>
            <div className="flex justify-center my-10 font1">
                <button className="bg-border-green px-2 md:px-5 py-3 md:py-4 rounded text-xs md:text-base cursor-pointer transition-all duration-150 hover:shadow-2xl shadow-green-light">Claim a custom pill for your bussiness at $0</button>
            </div>
        </div>
    )
}
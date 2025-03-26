import AboutUs from "../components/aboutUs";
import CTA from "../components/cta";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import PillsCards from "../components/pillsCards";
import SmoothScroll from "../components/smoothScrool";
import Testimonials from "../components/testimonials";
import VAPI from "../components/vapi-assistant";
import WhyUs from "../components/whyUs";

export default function Landing() {
    return (
        <SmoothScroll>
            <title>Zeptor AI</title>
            <div className="relative bg-[#030C01]">
                <Navbar />
                <Hero />
                <PillsCards />
                <WhyUs />
                <Testimonials />
                <AboutUs />
                <FAQ />
                <CTA />
                <Footer />
                <VAPI />
            </div>
        </SmoothScroll>
    )
}
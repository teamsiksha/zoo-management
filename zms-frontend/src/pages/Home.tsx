import { About } from "@/components/custom/About"
import { Features } from "@/components/custom/Features"
import { Footer } from "@/components/custom/Footer"
import Header from "@/components/custom/Header"
import HeroSection from "@/components/custom/HeroSection"
import Programmes from "@/components/custom/Programmes"
import SimpleMap from "@/components/custom/SimpleMap"

const Home = () => {
    return (
        <div className="w-full bg-amber-50">
            <Header />
            <div className="mt-16">
                <HeroSection />
                <About />
                <Features />
                <Programmes />
                <SimpleMap latitude={28.60457} longitude={77.24522} />
                <Footer />
            </div>
        </div>
    )
}

export default Home

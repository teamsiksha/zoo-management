import { Images } from "@/assets/Images";
import { Button } from "@/components/ui/button";
import { Calendar, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Images.heroImage})` }}
      >
        <div className="absolute inset-0 bg-[rgba(0,128,0,0.5)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            India's #1
            <span className="block text-orange-400">Wildlife Sanctuary</span>
          </h1>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Experience the majesty of Royal Bengal Tigers at National Zoological Park.
            Home to over 400 species of wildlife in their natural habitat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book-ticket">
              <Button variant="hero" size="lg" className="bg-orange-400 cursor-pointer text-white">
                <Calendar className="h-5 w-5" />
                Book Your Tickets
              </Button>
            </Link>
            <Link to="/my-tickets">
              <Button variant="booking" size="lg" className="bg-green-700  cursor-pointer" >
                <Ticket className="h-5 w-5" />
                View Tickets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
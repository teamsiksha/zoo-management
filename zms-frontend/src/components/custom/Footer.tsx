import { Images } from "@/assets/Images";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault(); // stop default anchor behavior

        if (window.location.pathname !== "/") {
            // Navigate to home page first
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }, 50); // small delay to let page render
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <footer className="bg-[var(--primary-color)] text-primary-foreground py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src={Images.logo2} alt="logo" height={40} width={40} />
                            <h3 className="text-xl font-bold">National Zoological Park</h3>
                        </div>
                        <p className="text-primary-foreground/80 mb-6">
                            India's premier wildlife sanctuary offering unforgettable tiger safaris
                            and conservation experiences since 1980.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" onClick={(e) => handleScroll(e, "About")} className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
                            <li><a href="#features" className="text-primary-foreground/80 hover:text-accent transition-colors">Safari Packages</a></li>
                            <li><Link to="/book-ticket" className="text-primary-foreground/80 hover:text-accent transition-colors">Book Tickets</Link></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Conservation</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Tiger Safari</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Photography Tours</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Educational Programs</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Group Bookings</a></li>
                            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Accommodation</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-primary-foreground/80">
                                        National Zoological Park<br />
                                        Mathura Road, Near Purana Qila, Pragati Maidan, New Delhi, Delhi 110003, India
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-accent" />
                                <p className="text-primary-foreground/80">+91 98765 43210</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-accent" />
                                <p className="text-primary-foreground/80">info@nzp.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 pt-8 text-center">
                    <p className="text-primary-foreground/60">
                        © 2024 National Zoological Park. All rights reserved. | Wildlife tourism supporting conservation.
                    </p>
                </div>
            </div>
        </footer>
    );
};
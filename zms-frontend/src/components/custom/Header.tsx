import { Images } from "@/assets/Images";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
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
        <header className="fixed top-0 w-full bg-amber-50  border-b border-border z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={Images.logo2} alt="logo" height={40} width={40} />
                    <Link to="/" onClick={(e) => handleScroll(e, "hero")} >
                        <h1 className="text-2xl font-bold text-[hsl(var(--primary-color))]">National Zoological park</h1>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-[hsl(var(--primary-color))] transition-colors">
                        About
                    </a>
                    <a href="#features" onClick={(e) => handleScroll(e, "features")} className="hover:text-[hsl(var(--primary-color))] transition-colors">
                        Features
                    </a>
                    <a href="#programmes" onClick={(e) => handleScroll(e, "programmes")} className="hover:text-[hsl(var(--primary-color))] transition-colors">
                        Our Programmes
                    </a>
                    <Link to="/book-ticket" className="hover:text-[hsl(var(--primary-color))] transition-colors">
                        Book Tickets
                    </Link>
                    <Link to="/my-tickets" className="hover:text-[hsl(var(--primary-color))] transition-colors">
                        View Tickets
                    </Link>

                </nav>

                <Button variant="admin" size="sm" className="hover:bg-[var(--primary-color)] bg-[hsl(var(--secondary-color))] cursor-pointer" onClick={() => navigate("/signin")}>
                    <Shield className="h-4 w-4" />
                    Admin Portal
                </Button>
            </div>
        </header>
    );
};
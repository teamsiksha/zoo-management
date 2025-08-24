import { Images } from "@/assets/Images";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("token"));
        const onStorage = () => setIsLoggedIn(!!localStorage.getItem("token"));
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/");
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }, 50);
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
                        <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[hsl(var(--primary-color))]">
                            National Zoological Park
                        </h1>                    </Link>
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

                {isLoggedIn ? (
                    <div className="flex gap-3">
                        <Button
                            variant="admin"
                            size="sm"
                            className="hover:bg-[var(--primary-color)] bg-[var(--secondary-color)] cursor-pointer"
                            onClick={() => navigate("/dashboard")}
                        >
                            Dashboard
                        </Button>
                        <Button
                            variant="admin"
                            size="sm"
                            className="hover:bg-red-400 text-red-500 cursor-pointer"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button
                        variant="admin"
                        size="sm"
                        className="hover:bg-[var(--primary-color)] bg-[var(--secondary-color)] cursor-pointer"
                        onClick={() => navigate("/signin")}
                    >
                        <Shield className="h-4 w-4" />
                        Admin Portal
                    </Button>
                )}
            </div>
        </header>
    );
};
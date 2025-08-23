import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Camera,
    Binoculars,
    Mountain,
    Sunrise,
    Users,
    Shield,
    Clock,
    Award
} from "lucide-react";

export const Features = () => {
    const features = [
        {
            icon: Camera,
            title: "Professional Wildlife Photography",
            description: "Guided photography tours with expert naturalists to capture the perfect shot of tigers and wildlife.",
            highlight: "95% Tiger Sighting Success"
        },
        {
            icon: Binoculars,
            title: "Expert Naturalist Guides",
            description: "Experienced local guides with deep knowledge of animal behavior and park geography.",
            highlight: "Certified Wildlife Experts"
        },
        {
            icon: Mountain,
            title: "Historic Delhi Fort",
            description: "Explore the UNESCO World Heritage site dating back to the 10th century within the park.",
            highlight: "1000+ Years Old"
        },
        {
            icon: Sunrise,
            title: "Multiple Safari Timings",
            description: "Choose from morning, evening, or full-day safari experiences to maximize wildlife encounters.",
            highlight: "6 Zones Available"
        },
        {
            icon: Users,
            title: "Family-Friendly Experience",
            description: "Safe and educational wildlife experiences designed for visitors of all ages.",
            highlight: "Child-Safe Vehicles"
        },
        {
            icon: Shield,
            title: "Conservation Education",
            description: "Learn about our tiger conservation efforts and how tourism supports wildlife protection.",
            highlight: "Award-Winning Program"
        }
    ];

    return (
        <section id="features" className="pt-20 bg-amber-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        World-Class Safari
                        <span className="text-primary"> Experiences</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Discover why millions choose NZP for the ultimate wildlife adventure.
                        Our premium services ensure unforgettable encounters with nature.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-gray-50 hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border-0 group"
                        >
                            <div className="mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="h-6 w-6 text-[hsl(var(--primary-color))]" />
                                </div>
                                <span className="inline-flex ml-2 px-3 py-1 text-xs font-medium rounded-full text-[hsl(var(--accent-color))] bg-orange-100">
                                    {feature.highlight}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
};
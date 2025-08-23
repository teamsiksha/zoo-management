import { Images } from "@/assets/Images";
import { Card } from "@/components/ui/card";
import { Trophy, Users, MapPin, Star } from "lucide-react";

export const About = () => {
    const stats = [
        { icon: Trophy, value: "#1", label: "Wildlife Sanctuary in India" },
        { icon: Users, value: "500K+", label: "Annual Visitors" },
        { icon: MapPin, value: "1,334", label: "Square Kilometers" },
        { icon: Star, value: "4.8/5", label: "Visitor Rating" },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Why NZP is India's
                        <span className="text-[hsl(var(--primary-color))]"> Premier Wildlife Destination</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Established in 1980, National Zoological Park has become a symbol of successful tiger conservation
                        and sustainable wildlife tourism in India.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <Card key={index} className="p-6 text-center bg-gray-50 hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                            <stat.icon className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--primary-color))]" />
                            <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                            <div className="text-muted-foreground">{stat.label}</div>
                        </Card>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src={Images.wildlife}
                            alt="Wildlife at NZP"
                            className="rounded-2xl shadow-nature w-full h-[400px] object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-foreground">
                            A Conservation Success Story
                        </h3>

                        <div className="space-y-4 text-muted-foreground">
                            <p className="text-lg leading-relaxed">
                                Home to the magnificent Royal Bengal Tigers, NZP has successfully increased
                                its tiger population from just 20 in the 1970s to over 75 today, making it one of
                                the best places in the world to spot tigers in their natural habitat.
                            </p>

                            <p className="text-lg leading-relaxed">
                                Our park combines ancient history with wildlife conservation, featuring the
                                stunning 10th-century Delhi Fort and diverse ecosystems that support
                                over 400 species of flora and fauna.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-[hsl(var(--secondary-color))]">
                                <div className="text-2xl font-bold text-[hsl(var(--primary-color))]">75+</div>
                                <div className="text-sm text-muted-foreground">Royal Bengal Tigers</div>
                            </div>
                            <div className="p-4 rounded-lg bg-[hsl(var(--secondary-color))]">
                                <div className="text-2xl font-bold text-[hsl(var(--primary-color))]">400+</div>
                                <div className="text-sm text-muted-foreground">Species of Wildlife</div>
                            </div>
                            <div className="p-4 rounded-lg bg-[hsl(var(--secondary-color))]">
                                <div className="text-2xl font-bold text-[hsl(var(--primary-color))]">40+</div>
                                <div className="text-sm text-muted-foreground">Years of Conservation</div>
                            </div>
                            <div className="p-4 rounded-lg bg-[hsl(var(--secondary-color))]">
                                <div className="text-2xl font-bold text-[hsl(var(--primary-color))]">95%</div>
                                <div className="text-sm text-muted-foreground">Tiger Sighting Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
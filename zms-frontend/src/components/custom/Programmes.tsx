import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Images } from "@/assets/Images";

interface CardItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

const cardData: CardItem[] = [
    {
        id: 1,
        image: Images.volunteer,
        title: "Volunteership Program",
        description: "Join hands with local communities to protect endangered species and restore habitats."
    },
    {
        id: 2,
        image: Images.internship,
        title: "Ocean Internship Programs",
        description: "Participate in ocean cleanup projects and remove plastic waste from marine ecosystems."
    },
    {
        id: 3,
        image: Images.breeding,
        title: "Conservation Breeding",
        description: "Support breeding initiatives to save threatened species and increase biodiversity."
    },
    {
        id: 4,
        image: Images.research,
        title: "Research and Monitoring",
        description: "Conduct scientific research to monitor wildlife populations and environmental health."
    },
    {
        id: 5,
        image: Images.exchange,
        title: "Animal Exchange",
        description: "Facilitate ethical animal relocation programs to enhance conservation and care."
    },
    {
        id: 6,
        image: Images.rescue,
        title: "Rescue and Rewilding",
        description: "Rescue injured wildlife and reintroduce them to safe, natural habitats."
    },];

const Programmes: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Create extended array for seamless infinite scrolling
    // Add all cards at the beginning and end for smooth looping
    const extendedCardData = [...cardData, ...cardData, ...cardData];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // When we reach the end of the second set, reset to the beginning of the first set
        if (currentIndex >= cardData.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(cardData.length);
                setTimeout(() => {
                    setIsTransitioning(true);
                }, 50);
            }, 500);
        }
        // When we go below the first set, jump to the end of the second set
        else if (currentIndex < cardData.length) {
            setIsTransitioning(true);
        }
    }, [currentIndex]);

    return (
        <div id="programmes" className="w-full text-center pt-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
                Our Programmes
            </h2>
            <div className="overflow-hidden">
                <div
                    className="flex"
                    style={{
                        transform: `translateX(-${currentIndex * (350 + 16)}px)`, // 350px card width + 16px gap
                        transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
                    }}
                >
                    {extendedCardData.map((card, index) => (
                        <Card
                            key={`${card.id}-${Math.floor(index / cardData.length)}-${index}`}
                            className="flex-shrink-0 mr-4 mt-8"
                            style={{ width: "350px" }}
                        >
                            <div className="w-full h-[250px] overflow-hidden rounded-t-lg">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-4">
                                <h3 className="text-green-600 font-semibold text-lg mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-700 text-sm mb-10">{card.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Programmes;
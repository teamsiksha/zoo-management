import React from "react";

interface SimpleMapProps {
    latitude: number;
    longitude: number;
    zoom?: number;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ latitude, longitude, zoom = 15 }) => {
    const mapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

    return (
        <div style={{ width: "100%", height: "400px" }} className="text-center mt-24 mb-16">
            <h1 className="text-5xl font-bold text-black mb-7">Find Us Here</h1>
            <iframe
                title="location-map"
                width="100%"
                height="100%"
                frameBorder="0"
                src={mapSrc}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default SimpleMap;

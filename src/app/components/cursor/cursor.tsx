"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
const Cursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="fixed pointer-events-none transition-transform duration-75"
            style={{
                left: position.x,
                top: position.y,
                transform: "translate(-50%, -50%)",
            }}
        >
            <Image
                src="/fav.png" // Make sure the cursor image is inside the public folder
                alt="Custom Cursor"
                width={32} height={32}
            />
        </div>
    );
};

export default Cursor;
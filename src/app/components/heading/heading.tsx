"use client";

import React, { useState, useEffect } from "react";
import "./heading.css";


const GradientText: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(35 * 24 * 60 * 60); 

    useEffect(() => {
        if (timeLeft <= 0) return; // Stop when time reaches zero

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval); 
    }, [timeLeft]);

    
    

    return (
        <div className="backg">
            {/* <img src="./logo.jpeg" alt="logo" width={200} height={100}/>  */}
            <div className="content">
                <h1 className="text">Vayudoot 25</h1>
                
            </div>
        </div>
    );
};

export default GradientText;
"use client"
import React, { useEffect, useRef, useState } from "react";

interface AutoPlayVideoProps {
    src: string;
    poster?: string;
    width?: string | number;
    height?: string | number;
}

const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({ src, poster, width = 1180, height = 600 }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Play the video when at least 50% is visible
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            if (isVisible) {
                videoElement.play().catch((error) => {
                    console.error("Error playing video:", error);
                });
            } else {
                videoElement.pause();
            }
        }
    }, [isVisible]);

    return (
        <div style={{ margin: "5rem 0 0 0", display: "flex", justifyContent: "center" }}>
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                controls
                muted
                loop
                playsInline
                style={{
                    width: typeof width === "number" ? `${width}px` : width,
                    height: typeof height === "number" ? `${height}px` : height,
                    borderRadius: "8px",
                }}
            />
        </div>
    );
};
export default AutoPlayVideo
"use client"


import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

interface TimelinePoint {
    id: number
    title: string
    period: string
    description: string
    image: string
}

const timelineData: TimelinePoint[] = [
    {
        id: 1,
        title: "Registration Open",
        period: "25 February - 15 March",
        description: "The forms for the registrations are live.",
        image: "/form.jpeg",
    },
    {
        id: 2,
        title: " Main Competition",
        period: "18 April - 19 April",
        description: "Main days of competition",
        image: "/competition.jpg",
    },
    {
        id: 3,
        title: "Result",
        period: "18 April - 19 April",
        description: "Results are anounced",
        image: "/winner.png",
    },
    
]

function TimelineCard({
    point,
    isLeft,
    position,
}: {
    point: TimelinePoint
    isLeft: boolean
    position: "first" | "middle" | "last"
}) {
    const positionClasses = {
        first: "sm:left-0 sm:translate-x-0",
        middle: "sm:-translate-x-1/2",
        last: "sm:right-0 sm:translate-x-0",
    }

    const mobileClasses = "left-1/2 translate-x-[-50%]"

    return (
        <div
            className={`absolute z-20 w-72 
            ${window.innerWidth < 640 ? mobileClasses : positionClasses[position]}
            top-full mt-4 transition-all duration-300 ease-in-out`}
        >
            <div className="bg-gray-900 rounded-lg shadow-xl p-4 border border-gray-700">
                <img
                    src={point.image || "/placeholder.svg"}
                    alt={point.title}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="text-xl font-bold text-white mb-1">{point.title}</h3>
                <p className="text-white text-sm mb-2">{point.period}</p>
                <p className="text-white text-sm">{point.description}</p>
            </div>
        </div>
    )
}

function Timeline() {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);

            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    const [activePoint, setActivePoint] = useState<number | null>(null)
    const controls = useAnimation()
    const timelineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible")
                }
            },
            { threshold: 0.2 },
        )

        if (timelineRef.current) {
            observer.observe(timelineRef.current)
        }

        return () => {
            if (timelineRef.current) {
                observer.unobserve(timelineRef.current)
            }
        }
    }, [controls])

    const handlePointClick = (pointId: number) => {
        setActivePoint(activePoint === pointId ? null : pointId)
    }

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    const getPositionType = (index: number) => {
        if (index === 0) return "first"
        if (index === timelineData.length - 1) return "last"
        return "middle"
    }

    return (
        <div ref={timelineRef} className="min-h-[40rem] max-sm:min-h-[55rem] mb-[5rem] bg-black relative overflow-hidden px-4 sm:px-0">
            {/* Grid Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: "2rem 2rem",
                }}
            ></div>

            <motion.div
                className="relative max-w-4xl mx-auto py-20"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <motion.h1 className="text-4xl sm:text-7xl font-bold text-white mb-2" variants={itemVariants}>
                    Roadmap
                </motion.h1>
                

                {/* Timeline Container */}
                <div className="relative">
                    {/* Desktop Timeline Line */}
                    <svg className="absolute w-full h-32 hidden sm:block" preserveAspectRatio="none">
                        <motion.path
                            d="M 0,50 Q 200,100 400,50 T 750,50"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            className="path-line"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    </svg>

                    {/* Mobile Timeline Line */}
                    <div className="absolute left-1/2 h-full w-0.5 bg-white transform -translate-x-1/2 sm:hidden" />

                    {/* Timeline Points Container */}
                    <div className="relative h-[500px] sm:h-[300px]">
                        {timelineData.map((point, index) => {
                            const mobilePosition = `${index * 33 + 15}%`
                            // Adjusted positions for better visibility
                            const positions = [
                                { left: "0%", top: "50px" },
                                { left: "50%", top: "0px" },
                                { left: "90%", top: "50px" }, // Changed from 100% to 90%
                            ]

                            return (
                                <motion.div
                                    key={point.id}
                                    className="absolute group"
                                    style={{
                                        left: windowWidth < 640 ? "50%" : positions[index].left,
                                        top: windowWidth < 640 ? mobilePosition : positions[index].top,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    variants={itemVariants}
                                >
                                    <button
                                        onClick={() => handlePointClick(point.id)}
                                        className={`w-6 h-6 bg-black rounded-full border-4 border-white relative
                                            transition-all duration-300 ease-in-out
                                            ${activePoint === point.id ? "scale-150" : "scale-100"}`}
                                    >
                                        <div
                                            className={`absolute inset-0 bg-white rounded-full 
                                            transition-all duration-300 ease-in-out
                                            ${activePoint === point.id ? "scale-75" : "scale-50"}`}
                                        />
                                    </button>
                                    {activePoint === point.id && (
                                        <TimelineCard point={point} isLeft={index % 2 === 0} position={getPositionType(index)} />
                                    )}
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Timeline

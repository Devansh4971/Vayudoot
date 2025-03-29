"use client"

import GradientText from "../heading/heading"
import { useRouter } from "next/navigation"
import { ClassValue } from 'clsx';


export default function Hero() {
    const Router = useRouter()
    return (
        <main className="bg-black text-white xl:bg-black 2xl:bg-black">
            <div className="container mx-auto px-4">
                <section className=" font-inter">
                    <section className="mb-16 md:mb-12">
                        <div className="min-h-screen flex items-center justify-center p-4">
                            <section className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
                                <div className="text-center">
                                    <h1 className="font-extrabold text-neutral-300 text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                                        VAYUDOOT 2025
                                    </h1>
                                </div>
                                <div className="w-full text-center">
                                    <p className="font-inter font-semibold text-gray-400 text-base sm:text-lg md:text-2xl lg:text-4xl">
                                        PAN India Drone Competition
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className="flex flex-col gap-y-5 sm:flex-row justify-center items-center  sm:space-y-0 sm:space-x-4 ">
                            
                            <button
                                onClick={(e) => window.open("/R1.pdf", "_blank")}
                                className="w-full px-[7rem] sm:w-auto  py-3 font-bold text-xl  rounded-md bg-white text-black hover:bg-gray-200 transition-colors"
                            >
                                Rulebook
                            </button>
                            <button
                                onClick={(e) => Router.push("https://forms.gle/Y2YXGXPYFUwNuSzVA")}
                                className="w-full px-[7rem] sm:w-auto  py-3 font-bold text-xl md:hidden lg:hidden rounded-md bg-white text-black hover:bg-gray-200 transition-colors"
                            >
                                Register
                            </button>
                        </div>
                    </section>
                    

                    <section className=" mt-[5rem] mb-16 md:mb-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-2 mb-8">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">IMPACT BY THE NUMBERS</h2>
                                
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[10rem]">
                                {[
                                    { value: "₹10,00,000+", label: "CUMULATIVE STARTUP FUND " },
                                    { value: "₹50,000+", label: "CUMULATIVE PRIZE POOL " },
                                    { value: "50+", label: "COMPETITORS" },
                                    { value: "10+", label: "SPONSORS" },
                                    { value: "5,000+", label: "Footfall" },
                                    {value:"20+",label:"Industry Experts"}
                                    

                                ].map((item, index) => (
                                    <div key={index} className="space-y-2 ">
                                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">{item.value}</div>
                                        <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="mb-16 md:mb-24">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-8">
                                We Believe in the Power of Competition
                            </h2>
                            {[
                                "Without a target you'll miss every time. Vayudoot has clear, objective and measurable goals and at their most powerful capture the imaginations of people all over the world inspiring everyone into action.",
                                "The world needs crazy ideas. Solutions can come from anyone, anywhere on the planet; engineers, scientists, garage tinkerers, entrepreneurs, innovators, citizen scientists and high school students have embraced the spirit of competition, won millions of rupees in prize purses and helped shape a better future for all.",
                                "Every one of us has the power to make a difference. Follow us on socials and enter your email to stay up to date with the latest competition news and bite-size content.",
                            ].map((paragraph, index) => (
                                <p key={index} className="font-semibold text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
        </main>
    )
}


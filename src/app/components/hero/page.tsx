"use client"
import { Info } from "lucide-react"

export default function Hero() {
    return (
        <main className="bg-black text-white">
            <div className="container mx-auto px-4">
                <section className="pt-10 font-inter">
                    <section className="mb-16 md:mb-24">
                        <div className="text-center">
                            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-white pt-5 font-Manrope">
                                VAYUDOOT
                            </h1>
                        </div>
                        <div className="mt-8 md:mt-10 max-w-3xl mx-auto">
                            <p className="font-inter font-semibold text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                                Our mission is to inspire and equip the next generation of engineers and innovators to push the
                                boundaries of drone technology. Through hands-on competition, collaboration, and real-world
                                problem-solving, we aim to foster creativity, technical excellence, and a spirit of innovation.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
                            
                            <button
                                onClick={(e) => window.open("/dummy.pdf", "_blank")}
                                className="w-full px-[7rem] sm:w-auto  py-3 font-bold text-xl  rounded-md bg-white text-black hover:bg-gray-200 transition-colors"
                            >
                                Rulebook
                            </button>
                        </div>
                    </section>

                    <section className="mb-16 md:mb-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-2 mb-8">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">IMPACT BY THE NUMBERS</h2>
                                <Info className="w-6 h-6 text-blue-600" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                                {[
                                    { value: "₹10,00,000+", label: "CUMULATIVE STARTUP FUND LAUNCHED" },
                                    { value: "₹50,000+", label: "CUMULATIVE PRIZE POOL LAUNCHED" },
                                    { value: "50+", label: "COMPETITORS" },
                                    { value: "10+", label: "SPONSORS" },
                                    { value: "30", label: "STATES" },
                                ].map((item, index) => (
                                    <div key={index} className="space-y-2">
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
                                WE BELIEVE IN POWER OF COMPETITION
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


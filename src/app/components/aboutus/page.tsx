import Navbar from "../navbar/page"
import { Crown,Gem,PersonStanding } from "lucide-react"
export default function AboutUs(){
    return(
        <main>
            <div>
                <Navbar></Navbar>
                <section>
                    <div className="text-center">
                        <h2 className="text-[1.1rem] mt-[5rem] font-semibold">
                            About Us
                        </h2>
                        <h2 className="text-[3rem] mt-4 font-bold font-inter">
                            Pioneering drone development <br></br> and research since 2008
                        </h2>
                        <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 font-inter">
                            <div className="max-w-7xl mx-auto">
                                {/* Main Heading */}
                                <h2 className="text-3xl  mt-[5rem] md:text-5xl lg:text-6xl font-bold text-center mb-16 ">
                                    What sets us apart
                                </h2>

                                {/* Features Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                                    {/* Excellence Card */}
                                    <div className="bg-[#333333] hover:scale-110 p-6 rounded-2xl shadow-lg border border-gray-800">
                                        <div className="mb-4">
                                            <Gem className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-4 text-white">
                                            Excellence in action
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            We pioneered drone research and development and haven't stopped innovating since. We combine powerful capabilities with intuitive design, making expert research accessible to all.
                                        </p>
                                    </div>

                                    {/* Expertise Card */}
                                    <div className="bg-[#333333] p-6 rounded-2xl shadow-lg border border-gray-800">
                                        <div className="mb-4">
                                            <Crown className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-4 text-white">
                                            Expertise that empowers
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Behind every drone there is extensive research expertise and customer collaboration. We don't just provide tools—we help you uncover the insights that drive exceptional experiences.
                                        </p>
                                    </div>

                                    {/* Inclusive Card */}
                                    <div className="bg-[#333333] p-6 rounded-2xl shadow-lg border border-gray-800">
                                        <div className="mb-4">
                                            <PersonStanding className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-4 text-white">
                                            Inclusive by design
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Great research should be possible for everyone. We're committed to making user research more accessible, whether you're conducting your first study or scaling research across an enterprise.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}
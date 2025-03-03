"use client"
import Footer from "../footer/page";
import Navbar from "../navbar/page";

export default function guidelines() {
    return (
        <main>
            <div>
                <section>
                    <Navbar></Navbar>
                </section>
                <section className="w-full h-[45vh] flex mt-12">
                    <section className="w-[40%]  h-full flex  justify-center">
                        <h1 className="font-bold text-[3rem]  pt-5 text-white max-sm:ml-[4rem] font-Manrope">Guidelines</h1>
                    </section>
                    <section className='md:w-[50%] h-full flex  justify-center'>
                        <p className='font-semibold text-gray-400 text-[1.5rem]   pt-5 max-sm:hidden font-manrope pr-10'>
                            To ensure a fair, safe, and engaging experience for all participants, the following guidelines have been established.
                            These rules cover eligibility, drone specifications, competition categories, safety protocols, and scoring criteria.
                        </p>
                    </section>
                </section>
                <section>
                    <section className="w-[80%]  mt-5 ml-[6.5rem]">
                        <h1 className="font-bold text-[2.5rem] " >General Rules and Eligibility</h1>
                    </section>
                    <section className="w-[70%] ml-28 space-y-8 mt-5 text-gray-400   flex-col  justify-center">
                        <h2 className="font-semibold text-[1.5rem]">1. The competition is open to  teams (max 4-6 members)</h2>
                        <h2 className="font-semibold text-[1.5rem]">2. Participants must be students of the college.</h2>
                        <h2 className="font-semibold text-[1.5rem]">3. Teams must register before the deadline; late registrations will not be accepted.</h2>
                        <h2 className="font-semibold text-[1.5rem]">4. Drones must be powered by electric motors only (no fuel-powered drones).</h2>

                    </section>

                </section>
                <section className="mt-[5rem]">
                    <section className="w-[80%]  mt-5 ml-[6.5rem]">
                        <h1 className="font-bold text-[2.5rem] ">Drone Specifications & Safety Regulations</h1>
                    </section>
                    <section className="w-[70%] ml-28 space-y-8 mt-5 flex-col  justify-center">
                        <h2 className=" font-semibold text-gray-400 text-[1.5rem]">1. Maximum drone weight: 2 kg (including battery and payload).</h2>
                        <h2 className=" text-gray-400 text-[1.5rem]">2. Allowed drone types: Quadcopters, Hexacopters, Fixed-wing (if space allows).</h2>
                        <h2 className=" text-gray-400 text-[1.5rem]">3. Battery power limit: 4S (14.8V) for racing drones; higher voltage requires approval.</h2>
                        <h2 className=" text-gray-400 text-[1.5rem]">4. Every drone must have a failsafe mechanism (auto-land or return-to-home) in case of signal loss.</h2>

                    </section>

                </section>
                <section className="mt-[5rem]">
                    <section className="w-[50%]  mt-5 ml-[6.5rem]">
                        <h1 className="font-bold text-[2.5rem] ">Arena and Flight Conditions</h1>
                    </section>
                    <section className="w-[70%] ml-28 space-y-8 mt-5 flex-col  justify-center">
                        <h2 className=" font-semibold text-gray-400 text-[1.5rem]">1. The event will take place in an outdoor/indoor designated flight zone.</h2>
                        <h2 className=" font-semibold text-gray-400 text-[1.5rem]">2. Maximum altitude: 20 meters (to avoid airspace violations).</h2>
                        <h2 className=" font-semibold text-gray-400 text-[1.5rem]">3. No-fly zones will be marked to ensure spectator and participant safety.</h2>
                        <h2 className=" font-semibold text-gray-400 text-[1.5rem]">4. If weather conditions (strong wind, rain) make flying unsafe, rounds may be postponed.</h2>

                    </section>

                </section>

                <section className="mt-[5rem]">
                    <section className="w-[50%]  mt-5 ml-[6.5rem]">
                        <h1 className="font-bold text-[2.5rem] ">Scoring & Judging Criteria</h1>
                    </section>
                    <section className="w-[70%] ml-28 space-y-8 mt-5 flex-col  justify-center">
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">1. Speed (for race and obstacle challenges).</h2>
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">2. Precision & Stability (for payload delivery and autonomous flight).</h2>
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">3. Bonus points for innovative designs and modifications..</h2>


                    </section>

                </section>
                <section className="mt-[5rem]">
                    <section className="w-[50%]  mt-5 ml-[6.5rem]">
                        <h1 className="font-bold text-[2.5rem] "> Safety & Emergency Protocols</h1>
                    </section>
                    <section className="w-[70%] ml-28 space-y-8 mt-5 flex-col  justify-center">
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">1. Pre-flight safety checks are mandatory before every attempt.</h2>
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">2. Participants must wear goggles, gloves, and safety gear if required.</h2>
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">3. Only designated pilots and staff are allowed in the flight area.</h2>
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">4. In case of a crash, the pilot must immediately disarm the drone.</h2>
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">5. A first aid station will be available for emergencies.</h2>

                    </section>

                </section>
                <section className="mt-[5rem]">
                    <section className="w-[50%]  mt-5 ml-[6.5rem]">
                        <h1 className="font-bold text-[2.5rem] ">Code of Conduct & Ethics</h1>
                    </section>
                    <section className="w-[70%] ml-28 space-y-8 mt-5 flex-col  justify-center">
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">1. Tampering with other drones will result in immediate disqualification.</h2>
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">2. Unsportsmanlike behavior, arguing with judges, or disrupting the event is not allowed.</h2>
                        <h2 className="font-semibold text-gray-400 text-[1.5rem] ">3. Drones must comply with DGCA drone regulations (if applicable).</h2>
                    </section>

                </section>
                <section className="mt-[5rem] ml-[5rem]">
                    <p className="md:pr-[10rem] shrink font-xl">The  <a onClick={(e)=>window.open("/dummy.pdf","_blank")} className="font-bold">Rulebook</a> is attached in the given pdf.  Please make sure to read the attached documents carefully before the competition. Failure to comply with the rules may result in penalties or disqualification.</p>
                    <section className="flex space-x-10 mt-10 mb-[5rem]">
                        
                        <button onClick={(e)=>window.open("/R1","_blank")}className="h-[3rem] w-[25rem] font-bold text-xl rounded-md flex items-center justify-center p-5 bg-white text-black">
                            Rulebook
                        </button>
                    </section>

                </section>
                <section>
                    <Footer></Footer>
                </section>
            </div>
        </main>
    )
}
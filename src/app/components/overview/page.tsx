"use client"
import React from 'react';
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import DirectorMessage from './direc-msg';
import CountdownTimer from '../lib/countdown';

const judges = [
    {
        name: "Mahendra Kumar Gupta",
        title: "CEO,Inurture Incubation Foundation",
        image:"/mkg.jpeg"
    },
    {
        name: "Dr. Anoop Pandey",
        title:"Head,Orbits Consulting",
        image:"/ap.jpeg"
    },
    {
        name: "Dr. R.S. Raman",
        title: "HOD,Mechanical Engineering Department",
        image: "/hod-mech.jpg"
    },
    {
        name: " Dr. Abhishek Saxena",
        title: "Associate Professor",
        image: "/saxena.jpg"
    },{
        name:"Rakesh Gupta",
        title:"Orbits Consulting",
        image:"/rakesh.jpg"
    }
];

export default function Overview() {

    return (
        <main className="overflow-x-hidden">
            <Navbar />

            {/* Hero Image */}
            

            {/* Explore Section */}
            <section>
                <h1 className="text-3xl md:text-4xl lg:text-5xl mt-4 font-bold font-inter py-8 text-center text-gray-300">
                    Organized by
                </h1>
                <section className='w-full mt-4 h-[20rem] flex '>
                    <section className='w-[50%]  flex items-center justify-center'>
                        <img  className="w-[50%] h-[50%]  rounded-sm" src="/logo-fin.png" alt="abes logo" />
                    </section>
                    <section className='font-inter w-[50%] text-[1.25rem] font-bold flex justify-center items-center text-center'>
                        <p className='pr-[5rem] pl-[5rem]'>Equipped with many ‘Centers of Excellence’, the college encourages its students to participate in a creative exploration of knowledge involving hands-on activities, which provide ‘learning by doing’, an environment far different from exam-centric learning. </p>
                    </section>
                </section>



            </section>
           

            <section className="w-full px-4 md:px-8 lg:px-0 py-8 md:py-10 lg:h-[40vh] flex flex-col lg:flex-row">
                <section className="w-full font-inter lg:w-[30%] max-sm:space-y-2 leading-8 lg:ml-[10rem] mb-8 lg:mb-0">
                    <p className="font-bold text-2xl max-sm:text-[3rem] md:text-3xl lg:text-[3rem] pt-4 md:pt-[2.5rem]">EXPLORE.</p>
                    <p className="font-bold text-2xl max-sm:text-[3rem] md:text-3xl lg:text-[3rem] pt-1 md:pt-[1.25rem]">INNOVATE.</p>
                    <p className="font-bold text-2xl max-sm:text-[3rem] md:text-3xl lg:text-[3rem] pt-1 md:pt-[1.25rem]">PIONEER.</p>
                </section>
                <section className="w-full lg:w-[50%] lg:ml-[5rem]">
                    <div className="flex items-center justify-start">
                        
                        <p className="font-bold max-sm:text-[3rem] text-3xl md:text-4xl lg:text-[4rem] pt-2 md:pt-[1.5rem]">₹50,000</p>
                    </div>
                    <div>
                        <p className="mt-7 text-gray-400 font-bold text-xl md:text-[2rem] pl-2 md:pl-[1.5rem]">Prize Pool</p>
                    </div>
                    <div>
                        <p className="font-syncopate  md:text-[1.55rem] leading-8 text-gray-400  md:text-base pl-2 md:pl-[1.5rem] mt-4">
                            The 50,000 Vayudoot is two-month competition with the goal of making breakthrough in the design and development of the Drones.
                        </p>
                    </div>
                </section>
            </section>

            {/* How to Win Section */}
            <section className="w-full px-4 md:px-8 lg:px-0 py-8 md:py-10 lg:h-[40vh] flex flex-col lg:flex-row">
                <section className="w-full lg:w-[30%] lg:ml-[10rem] mb-8 lg:mb-0">
                    <p className="font-bold text-2xl md:text-3xl lg:text-[2rem] pt-4 md:pt-[2.5rem]">HOW TO WIN</p>
                </section>
                <section className="w-full lg:w-[50%] lg:ml-[5rem]">
                    <p className="font-inter  text-gray-400 text-sm md:text-base pl-2 md:pl-[1.5rem]">
                        The winning team will develop novel technologies to rapidly and comprehensively adapt to the designed hurdles and the challenges provided.
                        <br className="hidden md:block" /><br className="hidden md:block" />
                        For the final testing, teams must be able to pass all the hurdles and conquer the challenges in the record time.
                        <br className="hidden md:block" /><br className="hidden md:block" />
                        Teams also need to show the scalability of their technology and producing insights to meet the prize criteria and effectively disrupt the current development and design of drones.
                    </p>
                </section>
            </section>

            {/* Contact Section */}
            <section className="w-full px-4  md:px-8 lg:px-0 py-8 md:py-10 lg:h-[40vh] flex flex-col lg:flex-row">
                <section className="w-full lg:w-[30%] lg:ml-[10rem] mb-8 lg:mb-0">
                    <p className="font-bold text-2xl md:text-3xl lg:text-[2rem] pt-4 md:pt-[2.5rem]">Contact Us</p>
                </section>
                <section className="w-full lg:w-[50%] lg:ml-[5rem]">
                    <p className="font-inter  text-gray-400 text-sm md:text-base pl-2 md:pl-[1.5rem]">
                        We welcome teams throughout all the phases of the competition, whether you want to help recruit teams, support team's success, help scale winning solutions, or assist with testing operations.
                    </p>
                    <div className="pl-2 md:pl-[1.5rem] mt-6 md:mt-[2.5rem]">
                        <button className="w-full md:w-[15rem] h-10 md:h-[2.5rem] flex items-center justify-center font-bold text-black hover:text-white bg-white hover:bg-blue-950 rounded-lg transition-colors">
                            Contact Us
                        </button>
                    </div>
                </section>
            </section>
            <section>
                <CountdownTimer></CountdownTimer>
            </section>
            {/* director testimony */}
            <section className='space-y-1'>
                <h1 className="text-3xl md:text-4xl lg:text-5xl mt-4 font-bold py-8 text-center text-gray-300">
                    Message from the Director
                </h1>
                <DirectorMessage
                    imageUrl="/director.jpg"
                    message="This event showcases our dedication to cutting-edge technology, providing a platform for aspiring minds to push the limits of aerial robotics. We look forward to witnessing groundbreaking innovations and teamwork that will shape the future of drone technology. Best wishes to all participants—may your drones soar to new heights!"
                    
                />
                <p className='text-right pr-[5rem]'>Director,ABES Engineering College</p>



            </section>


            {/* Judges Section */}
            <section className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 tracking-tight">Competition Coordinators</h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {judges.map((judge, index) => (
                            <div key={index} className="group">
                                <div className="aspect-w-1 aspect-h-1 mb-4">
                                    <img
                                        src={judge.image}
                                        alt={judge.name}
                                        className="w-full rounded-sm h-[280px] object-cover  hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                                <h2 className="text-lg md:text-xl font-semibold mb-2">{judge.name}</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">{judge.title}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </section>

            <Footer />
        </main>
    );
}
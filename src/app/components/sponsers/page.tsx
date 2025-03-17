"use client"
import Footer from '../footer/page';
import Navbar from '../navbar/page';
import SponsorCard from './sponsercard';
import { useRouter } from 'next/navigation';
const sponsors = [
    {
        name: 'AICTE-IDEA Lab',
        imageUrl:'/idea_lab1.png',
        websiteUrl: 'https://www.meity.gov.in/',
        
    },
    {
        name: 'MeitY Startup Hub',
        imageUrl:'/startup.png',
        websiteUrl: 'https://www.meity.gov.in/',
        
    },
    {
        name: 'StartinUP',
        imageUrl:'/up.png',
        websiteUrl: 'https://startinup.up.gov.in/',
        
    },
    {
        name: 'DST Nidhi',
        imageUrl: '/dst.png',
        websiteUrl: 'https://nidhi.dst.gov.in/',
        
    }
];
export default function sponser() {
    const Router=useRouter();
    return (
        <main>
            <div>
                <section>
                    <Navbar></Navbar>
                </section>
                <section className='w-full h-[45vh] flex mt-12 '>
                    <section className='w-[50%]  h-full flex  justify-center'>
                        <h1 className='font-bold text-[3rem] pt-5 text-white font-Manrope'> Partners</h1>
                    </section>
                    <section className='w-[50%]  h-full flex  justify-center'>
                        <p className='font-light max-sm:hidden shrink text-[1.5rem] pt-5 text-white font-manrope pr-10'>
                            Our generous Partners and Benefactors support each competition by providing prize pool and operational funding as well as contributing mentorship and industry knowledge.
                        </p>

                    </section>

                </section>
                <section>
                    <div className="min-h-screen  p-4 sm:p-6 md:p-8">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                {sponsors.map((sponsor) => (
                                    <SponsorCard
                                        key={sponsor.name}
                                        name={sponsor.name}
                                        imageUrl={sponsor.imageUrl}
                                        websiteUrl={sponsor.websiteUrl}
                                        
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex items-center justify-center mt-[5rem]'>
                    <p className='font-bold text-[3rem]'>Partner with Us</p>
                    
                </section>
                <section className='flex items-center mb-[2rem] gap-5 justify-center mt-6'>
                    <button onClick={(e) => Router.push("https://forms.gle/u6tEcAjQFYovdiHS7")} className="h-[3rem] w-[25rem] font-bold text-xl rounded-md flex items-center justify-center p-5 bg-white text-black">
                        Become a sponsor
                    </button>
                    <button  onClick={(e)=>window.open("/Spon_brochure.pdf","blank")} className="h-[3rem] w-[25rem] font-bold text-xl rounded-md flex items-center justify-center p-5 bg-white text-black">
                        Sponsership Brochure
                    </button>
                </section>
                <section>
                    <Footer></Footer>
                </section>
            </div>
        </main>
    )
}
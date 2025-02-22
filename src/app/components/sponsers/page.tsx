import Footer from '../footer/page';
import Navbar from '../navbar/page';
import SponsorCard from './sponsercard';
const sponsors = [
    {
        name: 'Ministry of Electronic and Information Technology',
        imageUrl:'/electronic.png',
        websiteUrl: 'https://www.meity.gov.in/',
        description: 'Supporting Partner'
    },
    {
        name: 'MeitY Startup Hub',
        imageUrl:'/startup.png',
        websiteUrl: 'https://www.meity.gov.in/',
        description: 'Supporting Partner'
    },
    {
        name: 'StartinUP',
        imageUrl:'/up.png',
        websiteUrl: 'https://startinup.up.gov.in/',
        description: 'Supporting Partner'
    },
    {
        name: 'DST Nidhi',
        imageUrl: '/dst.png',
        websiteUrl: 'https://nidhi.dst.gov.in/',
        description: 'Supporting Partner'
    }
];
export default function sponser() {
    return (
        <main>
            <div>
                <section>
                    <Navbar></Navbar>
                </section>
                <section className='w-full h-[45vh] flex mt-12 '>
                    <section className='w-[50%]  h-full flex  justify-center'>
                        <h1 className='font-bold text-[3rem] pt-5 text-white font-Manrope'>Prize Partners</h1>
                    </section>
                    <section className='w-[50%]  h-full flex  justify-center'>
                        <p className='font-light max-sm:hidden shrink text-[1.5rem] pt-5 text-white font-manrope pr-10'>
                            Our generous Partners and Benefactors support each competition by providing prize purse and operational funding as well as contributing mentorship and industry knowledge.
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
                                        description={sponsor.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex items-center justify-center mt-[5rem]'>
                    <p className='font-bold text-[3rem]'>Partner with Us</p>
                    
                </section>
                <section className='flex items-center mb-[2rem] justify-center mt-6'>
                    <button className="h-[3rem] w-[25rem] font-bold text-xl rounded-md flex items-center justify-center p-5 bg-white text-black">
                        Partner with Us
                    </button>
                </section>
                <section>
                    <Footer></Footer>
                </section>
            </div>
        </main>
    )
}
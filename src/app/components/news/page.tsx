import Footer from "../footer/page";
import Navbar from "../navbar/page";
import NewsCard from "./newscard";
const news = [
    {
        name: 'Registrations are live now',
        imageUrl: '/form.jpeg',
        websiteUrl: '',
        description: 'Teams can register now for the competition.'
    },
   
];
export default function News(){
    return(
        <main>
            <div>
                <section>
                    <section>
                        <Navbar></Navbar>
                    </section>
                    <section className="max-sm:flex max-sm:items-center max-sm:justify-center">
                        <h1 className='max-sm:flex max-sm:items-center max-sm:justify-center shrink font-bold text-[3rem] md:ml-[10rem] pt-5 text-white font-Manrope'>News + Updates</h1>
                    </section>
                    <section>
                        <div className="min-h-screen  p-4 sm:p-6 md:p-8">
                            <div className="max-w-6xl mx-auto">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                    {news.map((sponsor) => (
                                        <NewsCard
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
                    <section>
                        <Footer></Footer>
                    </section>
                    
                </section>
            </div>
        </main>
    )
}
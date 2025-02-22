import Footer from "../footer/page";
import Navbar from "../navbar/page";
import TeamCard from "./teamcard";
const sponsors = [
    {
        name: 'ABES Engineering College',
        imageUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400',
        websiteUrl: 'https://aspire.com',

    },
    {
        name: 'IIT Delhi',
        imageUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400',
        websiteUrl: 'https://alana.org',

    },
    {
        name: 'IIT Bombay',
        imageUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400',
        websiteUrl: 'https://ana.co.jp',

    },
    {
        name: 'IIT Madras',
        imageUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400',
        websiteUrl: 'https://amazon.com',

    }
];

export default function Teams() {
    return (
        <main>
            <div>
                <section>
                    <Navbar></Navbar>
                </section>
                <section>
                    <section className="w-[100%]  h-full flex  justify-center">
                        <h1 className="font-bold text-[3rem] pt-5 text-white font-Manrope">Qualified Teams</h1>
                    </section>
                    <section>
                        <div className="min-h-screen  p-4 sm:p-6 md:p-8">
                            <div className="max-w-6xl mx-auto">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                    {sponsors.map((sponsor) => (
                                        <TeamCard
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
                    <Footer></Footer>


                </section>
            </div>
        </main>
    )
}
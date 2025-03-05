import Navbar from "../navbar/page"
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
                    </div>
                </section>

            </div>
        </main>
    )
}
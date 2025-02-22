import CountdownTimer from "./components/lib/countdown";

import Footer from "./components/footer/page";
import Hero from "./components/hero/page";
import Timeline from "./components/lib/timeline";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <main>

      <div>
        <section>
          <section>
            <Navbar></Navbar>
          </section>
          <section>
            <Hero></Hero>
          </section>
          <section>
            <Timeline></Timeline>
          </section>
          <section>
            <CountdownTimer></CountdownTimer>
          </section>
          <section>
            <Footer></Footer>
          </section>
        </section>

      </div>
    </main>
  );
}

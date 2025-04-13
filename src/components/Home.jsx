import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './NavBar';
import TechStack from './Techstack';

export default function Home() {
    return (
        <>
            {/* <Head>
                <title>Lakshmi Chaitanya | Frontend Developer</title>
                <meta name="description" content="Portfolio of Lakshmi Chaitanya - Frontend Developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <main className=" text-white scroll-smooth">
                <Header />
                {/* <Navbar /> */}
                <section id="hero">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="techStack">
                    <TechStack />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
        </>
    );
}

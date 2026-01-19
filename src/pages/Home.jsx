import NavHero from "../sections/NavHero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
    return (
        <div className="w-full sm:w-10/12 mx-auto z-10">
            <NavHero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
}

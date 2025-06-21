import { StarBackground } from "../Components/StarBackgrouond"
import { ThemeToggle } from "../Components/ThemeToggle"
import { Navbar } from "../Components/Navbar"
import { MainSection } from "../Components/MainSection"
import { AboutSection } from "../Components/AboutSection"
import { SkillsSection } from "../Components/SkillsSection"
import { Projects } from "../Components/Projects"
import { ContactSection } from "../Components/ContactSection"
import {Footer} from "../Components/Footer"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* Theme toggle */}
        <ThemeToggle />
        {/* Background effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Content */}
        <main>
            <MainSection />
            <AboutSection />
            <SkillsSection />
            <Projects />
            <ContactSection />
        </main>
        {/* footer */}
        <Footer />
    </div>
}
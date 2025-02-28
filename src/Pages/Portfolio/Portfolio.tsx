import TopSection from "./components/Sections/TopSection.tsx";
import AboutMeSection from "./components/Sections/AboutMeSection.tsx";
import WorkExperienceSection from "./components/Sections/WorkExperience/WorkExperienceSection.tsx";
import ProjectsSection from "./components/Sections/Projects/ProjectsSection.tsx";
import Footer from "./components/Sections/Footer.tsx";

export default function Portfolio() {
    return (
        <div className="bg-[#212529] mx-auto max-w-5xl py-4" style={{boxShadow: "0 0 1em 1em #292E33"}}>
            <TopSection/>

            <main>
                <AboutMeSection/>
                <WorkExperienceSection/>
                <ProjectsSection/>
                <Footer/>
            </main>
        </div>
    );
}
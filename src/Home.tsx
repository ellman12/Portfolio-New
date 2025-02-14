import TopSection from "./components/Sections/TopSection.tsx";
import AboutMeSection from "./components/Sections/AboutMeSection.tsx";
import WorkExperienceSection from "./components/Sections/WorkExperience/WorkExperienceSection.tsx";

export default function Home() {
    return (
        <div className="bg-[#212529] mx-auto max-w-5xl py-4" style={{boxShadow: "0 0 1em 1em #292E33"}}>
            <TopSection/>

            <main>
                <AboutMeSection/>
                <WorkExperienceSection/>
            </main>
        </div>
    );
}
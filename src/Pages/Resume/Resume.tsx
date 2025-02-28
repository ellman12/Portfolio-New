import TopSection from "./components/Sections/TopSection.tsx";
import SkillsSection from "./components/Sections/SkillsSection.tsx";


export default function Resume() {
    return (<div className="bg-[#212529] py-8 px-4 mx-auto" style={{width: "8.5in", height: "11in"}}>
        <title>Elliott DuCharme Resume</title>

        <TopSection/>
        <SkillsSection/>
    </div>);
}
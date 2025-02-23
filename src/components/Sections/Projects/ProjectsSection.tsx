import Section from "../Section.tsx";
import CodeIcon from "@mui/icons-material/Code";
import Projects from "./Projects.ts";
import SectionTimeline from "../../Timeline/SectionTimeline.tsx";
import ProjectDisplay from "./ProjectDisplay.tsx";
import ScrollOnceAnimation from "../../ScrollOnceAnimation.tsx";

export default function ProjectsSection() {
    return (
        <Section icon={<CodeIcon/>} title="Projects">
            <ScrollOnceAnimation>
                <p className="mb-6 mx-2 md:mx-8">I've developed {Projects.length} personal projects over the years, all of which I'm very proud of. I love making new projects and learning new things along the way.</p>
            </ScrollOnceAnimation>

            <SectionTimeline>
                {Projects.sort((a, b) => a.startDate > b.startDate ? 1 : -1).map((project, index) => (
                    <ProjectDisplay key={project.name} project={project} lastItem={index === Projects.length - 1}/>
                ))}
            </SectionTimeline>
        </Section>
    );
};


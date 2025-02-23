import Section from "../Section.tsx";
import CodeIcon from "@mui/icons-material/Code";
import Projects, {Project} from "./Projects.ts";
import SectionTimeline from "../../Timeline/SectionTimeline.tsx";
import ProjectDisplay from "./ProjectDisplay.tsx";
import ScrollOnceAnimation from "../../ScrollOnceAnimation.tsx";
import {useState} from "react";

export default function ProjectsSection() {
    const [expandedProjects, setExpandedProjects] = useState<Project[]>([]);

    function handleProjectClick(project: Project, add: boolean) {
        if (add)
            setExpandedProjects([...expandedProjects, project]);
        else
            setExpandedProjects(expandedProjects.filter(p => p.name !== project.name));
    }

    return (
        <Section icon={<CodeIcon/>} title="Projects" disablePaddingX={expandedProjects.length > 0}>
            <ScrollOnceAnimation>
                <p className="mb-6 mx-2 md:mx-8">I've developed {Projects.length} personal projects over the years, all of which I'm very proud of. I love making new projects and learning new things along the way. Click any of the projects below to learn more.</p>
            </ScrollOnceAnimation>

            <SectionTimeline>
                {Projects.sort((a, b) => a.startDate > b.startDate ? 1 : -1).map((project, index) => (
                    <ProjectDisplay key={project.name} expandedProjects={expandedProjects} handleProjectClick={handleProjectClick} project={project} lastItem={index === Projects.length - 1}/>
                ))}
            </SectionTimeline>
        </Section>
    );
};


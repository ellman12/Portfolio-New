import Section from "../Section.tsx";
import CodeIcon from "@mui/icons-material/Code";
import Projects, {Project} from "./Projects.ts";
import ProjectDisplay from "./ProjectDisplay.tsx";

export default function ProjectsSection() {
    return (
        <Section icon={<CodeIcon/>} title="Projects">
            <p className="mb-6 mx-2 md:mx-8">I've developed {Projects.length} personal projects over the years, all of which I'm very proud of. I love making new projects and learning new things along the way.</p>

            <div className="flex flex-col gap-4">
                {Projects.map((project: Project) => <ProjectDisplay key={project.name} project={project}/>)}
            </div>
        </Section>
    );
};


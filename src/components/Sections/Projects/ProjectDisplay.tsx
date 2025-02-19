import {FC, useState} from "react";
import {Project} from "./Projects.ts";
import SectionTimelineItem from "../../Timeline/SectionTimelineItem.tsx";

interface Props {
    project: Project;
    lastItem: boolean;
}

const ProjectDisplay: FC<Props> = ({project, lastItem}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div onClick={() => setExpanded(!expanded)}>
            <SectionTimelineItem startDate={project.startDate.toLocaleDateString()} endDate={project.endDate?.toLocaleDateString() ?? "Present"} title={project.name} color="primary" lastItem={lastItem}>
                <div className="flex flex-col gap-4">
                    <div dangerouslySetInnerHTML={{__html: project.briefDesc}}/>

                    {expanded && <div dangerouslySetInnerHTML={{__html: project.longDesc}}/>}

                    {/* a image slideshow and the alt text is shown below each one */}

                </div>
            </SectionTimelineItem>
        </div>
    );
};

export default ProjectDisplay;

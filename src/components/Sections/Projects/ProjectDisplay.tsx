import {FC, useState} from "react";
import {Project} from "./Projects.ts";
import SectionTimelineItem from "../../Timeline/SectionTimelineItem.tsx";
import ProjectCarousel from "./ProjectCarousel.tsx";
import H3 from "../../H3.tsx";
import ScrollOnceAnimation from "../../ScrollOnceAnimation.tsx";

interface Props {
    project: Project;
    lastItem: boolean;
}

const ProjectDisplay: FC<Props> = ({project, lastItem}) => {
    const [expanded, setExpanded] = useState(false);

    const dateOptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };

    return (
        <div onClick={() => setExpanded(!expanded)}>
            <ScrollOnceAnimation>
                {!expanded && <SectionTimelineItem startDate={project.startDate.toLocaleDateString(undefined, dateOptions)} endDate={project.endDate?.toLocaleDateString(undefined, dateOptions) ?? "Present"} title={project.name} color="primary" lastItem={lastItem} expanded={expanded}>
					<div className={`flex flex-col gap-4`}>
						<div className="text-sm md:text-base" dangerouslySetInnerHTML={{__html: project.briefDesc}}/>
					</div>
				</SectionTimelineItem>}
            </ScrollOnceAnimation>

            {expanded && <div className="bg-[#101114] flex flex-col gap-4 my-4 p-4">
				<H3>{project.name}</H3>

				<div dangerouslySetInnerHTML={{__html: project.briefDesc}}/>

                {expanded && <div dangerouslySetInnerHTML={{__html: project.longDesc}}/>}

                {expanded && <ProjectCarousel project={project}/>}
			</div>}
        </div>
    );
};

export default ProjectDisplay;

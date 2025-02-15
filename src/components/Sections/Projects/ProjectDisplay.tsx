import {FC} from "react";
import {Project} from "./Projects.ts";

interface Props {
    project: Project;
}

const ProjectDisplay: FC<Props> = ({project}) => {
    return (
        <div className="flex flex-col gap-4 border border-white p-4">
            <h3 className="text-xl">{project.name}</h3>

            <div dangerouslySetInnerHTML={{__html: project.longDesc}}/>

        {/* a image slideshow and the alt text is shown below each one */}
        </div>
    );
};

export default ProjectDisplay;

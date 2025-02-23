import {FC, useState} from "react";
import {Project} from "./Projects.ts";
import SectionTimelineItem from "../../Timeline/SectionTimelineItem.tsx";
import ProjectCarousel from "./ProjectCarousel.tsx";
import H3 from "../../H3.tsx";
import ScrollOnceAnimation from "../../ScrollOnceAnimation.tsx";
import {AnimatePresence, motion} from "framer-motion";

interface Props {
    project: Project;
    expandedProjects: Project[];
    handleProjectClick: (projects: Project, add: boolean) => void;
    lastItem: boolean;
}

const ProjectDisplay: FC<Props> = ({project, handleProjectClick, expandedProjects, lastItem}) => {
    const [step, setStep] = useState<"closed" | "expanding" | "expanded" | "closing">("closed");

    const initMaxHeight = 50;

    const dateOptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };

    return (
        <div>
            <ScrollOnceAnimation>
                {step === "closed" && <SectionTimelineItem onClick={() => {setStep("expanding"); handleProjectClick(project, true)}} startDate={project.startDate.toLocaleDateString(undefined, dateOptions)} endDate={project.endDate?.toLocaleDateString(undefined, dateOptions) ?? "Present"} title={project.name} color="primary" lastItem={lastItem} expanded={step !== "closed"}>
					<div className={`flex flex-col gap-4`}>
						<div className="text-sm md:text-base" dangerouslySetInnerHTML={{__html: project.briefDesc}}/>
					</div>
				</SectionTimelineItem>}
            </ScrollOnceAnimation>

            <AnimatePresence initial={false}>
                {step !== "closed" && <motion.div
					key={project.name}
					initial={{maxHeight: initMaxHeight}}
					animate={step === "expanding" || step === "expanded" ? {maxHeight: 1000} : {maxHeight: initMaxHeight}}
					onClick={() => {
                        if (step === "expanding" && expandedProjects.find(p => p.name === project.name) !== undefined) {
                            handleProjectClick(project, false);
                        } else
                            setStep("closing");
                    }}
					transition={{duration: 0.6, ease: "easeInOut"}}
					exit={{maxHeight: initMaxHeight}}
					onAnimationComplete={() => {
                        if (step === "expanding")
                            setStep("expanded");
                        else if (step === "expanded")
                            setStep("closing");
                        else if (step === "closing") {
                            handleProjectClick(project, false);
                            setStep("closed");
                        }
                    }}
					className={`bg-[#101114] overflow-hidden flex flex-col gap-4 my-4 p-4`}
				>
					<H3>{project.name}</H3>

					<div dangerouslySetInnerHTML={{__html: project.briefDesc}}/>

					<div dangerouslySetInnerHTML={{__html: project.longDesc}}/>

                    {<ProjectCarousel project={project}/>}
				</motion.div>}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDisplay;

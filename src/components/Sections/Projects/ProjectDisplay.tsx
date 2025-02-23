import {FC, useState} from "react";
import {Project} from "./Projects.ts";
import SectionTimelineItem from "../../Timeline/SectionTimelineItem.tsx";
import ProjectCarousel from "./ProjectCarousel.tsx";
import H3 from "../../H3.tsx";
import ScrollOnceAnimation from "../../ScrollOnceAnimation.tsx";
import {motion} from "framer-motion";

interface Props {
    project: Project;
    lastItem: boolean;
}

const ProjectDisplay: FC<Props> = ({project, lastItem}) => {
    const [step, setStep] = useState<"closed" | "expanding" | "expanded" | "closing">("closed");

    const initScaleY = 0.4;

    const dateOptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };

    function getAnimation() {
        if (step === "expanding" || step === "expanded")
            return {scaleY: 1};
        else if (step === "closing")
            return {scaleY: 0};
        else if (step === "closed")
            return {scaleY: 0};
    }

    return (
        <div>
            <ScrollOnceAnimation>
                {step === "closed" && <SectionTimelineItem onClick={() => setStep("expanding")} startDate={project.startDate.toLocaleDateString(undefined, dateOptions)} endDate={project.endDate?.toLocaleDateString(undefined, dateOptions) ?? "Present"} title={project.name} color="primary" lastItem={lastItem} expanded={step !== "closed"}>
					<div className={`flex flex-col gap-4`}>
						<div className="text-sm md:text-base" dangerouslySetInnerHTML={{__html: project.briefDesc}}/>
					</div>
				</SectionTimelineItem>}
            </ScrollOnceAnimation>

            {step !== "closed" && <motion.div
				initial={{scaleY: initScaleY}}
				animate={getAnimation()}
				onClick={() => setStep("closing")}
				transition={{duration: 0.3, ease: "easeInOut"}}
				onAnimationComplete={() => {
                    if (step === "expanding")
                        setStep("expanded");
                    else if (step === "expanded")
                        setStep("closing");
                    else if (step === "closing")
                        setStep("closed");
                }}
				className={`bg-[#101114] origin-top flex flex-col gap-4 my-4 p-4`}
			>
				<H3>{project.name}</H3>

				<div dangerouslySetInnerHTML={{__html: project.briefDesc}}/>

                {<div dangerouslySetInnerHTML={{__html: project.longDesc}}/>}

                {<ProjectCarousel project={project}/>}
			</motion.div>}
        </div>
    );
};

export default ProjectDisplay;

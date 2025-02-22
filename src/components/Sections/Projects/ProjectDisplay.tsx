import {FC, useState} from "react";
import {Project} from "./Projects.ts";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";
import {motion} from "framer-motion";
import ScrollOnceAnimation from "../../ScrollOnceAnimation.tsx";

interface Props {
    project: Project;
    lastItem: boolean;
}

const ProjectDisplay: FC<Props> = ({project, lastItem}) => {
    const [step, setStep] = useState(0);

    return (
        <ScrollOnceAnimation>
            <TimelineItem onClick={() => setStep(step > 0 ? 0 : 1)}>
                <TimelineOppositeContent className={step === 2 ? "shrink" : ""}>
                    <motion.div
                        initial={{opacity: 1}}
                        animate={step >= 1 ? {opacity: 0, flexGrow: 0, padding: 0} : {opacity: 1, flexGrow: 0.28}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="inline-flex flex-row items-center flex-wrap sm:flex-nowrap"
                        onAnimationComplete={() => {
                            if (step === 1)
                                setStep(2);
                        }}
                    >
                        <span className="text-nowrap">{project.startDate.toLocaleDateString()}—</span>
                        <span className="text-nowrap">{project.endDate?.toLocaleDateString() ?? "Present"}</span>
                    </motion.div>
                </TimelineOppositeContent>
                <TimelineSeparator className={step === 2 ? "shrink" : ""}>
                    <TimelineDot color={"primary"}/>
                    {lastItem ? <></> : <TimelineConnector/>}
                </TimelineSeparator>
                <TimelineContent>
                    <div className="mb-4">
                        <p className="font-bold">{project.name}</p>

                        <div className="pl-2">
                            <div className={`flex flex-col gap-4`}>
                                <div dangerouslySetInnerHTML={{__html: project.briefDesc}}/>

                                {step === 3 && <div dangerouslySetInnerHTML={{__html: project.longDesc}}/>}
                            </div>
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </ScrollOnceAnimation>
    );
};

export default ProjectDisplay;

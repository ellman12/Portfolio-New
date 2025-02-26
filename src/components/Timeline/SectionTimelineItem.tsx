import {ComponentProps, FC, ReactNode, useState} from "react";
import {OverridableStringUnion} from "@mui/types";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineDotPropsColorOverrides, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";
import {motion} from "framer-motion";

type Props = {
    startDate: string;
    endDate: string;
    title: string;
    color: OverridableStringUnion<"primary" | "secondary" | "error" | "warning" | "info" | "success", TimelineDotPropsColorOverrides>;
    lastItem?: boolean;
    children: ReactNode;
    expandedChildren?: ReactNode;
} & Omit<ComponentProps<typeof TimelineDot>, "color">;

const SectionTimelineItem: FC<Props> = ({startDate, endDate, title, lastItem = false, color, children, expandedChildren = <></>}) => {
    const [step, setStep] = useState<"closed" | "widening" | "extending">("closed");

    function onClick() {
        if (step === "closed")
            setStep("widening")
        else if (step === "extending")
            setStep("closed")
    }

    return (
        <TimelineItem onClick={onClick}>
            <motion.div
                initial={{width: 240}}
                animate={step !== "closed" ? {width: 0} : {width: 240}}
                transition={{duration: 0.5, ease: "easeInOut"}}
                className="text-nowrap object-contain overflow-clip"
            >
                <TimelineOppositeContent>
                    <span className="text-nowrap">{startDate}—</span>
                    <span className="text-nowrap">{endDate}</span>
                </TimelineOppositeContent>
            </motion.div>

            <motion.div
                initial={{opacity: 1, width: 12}}
                animate={step !== "closed" ? {opacity: 0, width: 0} : {opacity: 1, width: 12}}
                transition={{duration: 0.5, ease: "easeInOut"}}
                className="flex"
                onAnimationComplete={() => {
                    if (step === "widening")
                        setStep("extending");
                }}
            >
                <TimelineSeparator>
                    <TimelineDot color={color}/>
                    {lastItem ? <></> : <TimelineConnector/>}
                </TimelineSeparator>
            </motion.div>

            <TimelineContent style={{padding: step !== "closed" ? 0 : "", objectFit: "contain", overflow: "hidden"}}>
                <motion.div
                    initial={{backgroundColor: "#00000000"}}
                    animate={step !== "closed" ? {backgroundColor: "#000000", padding: 16} : {backgroundColor: "#00000000"}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    className={`${step !== "closed" ? "p-0 my-4" : ""}`}
                >
                    <div className="mb-4">
                        <p className="font-bold text-sm md:text-base">{title}</p>

                        <div className="md:pl-2">
                            {children}
                        </div>
                    </div>

                    <motion.div
                        className={`object-contain overflow-hidden max-w-full flex flex-col gap-4 ${step !== "closed" ? "my-4 px-2" : ""}`}
                        initial={{maxHeight: 0}}
                        animate={step === "extending" ? {maxHeight: 1000} : {maxHeight: 0}}
                        onClick={() => {
                        }}
                        transition={{duration: 0.6, ease: "easeInOut"}}
                        exit={{maxHeight: 0}}
                        onAnimationComplete={() => {
                        }}
                    >
                        {expandedChildren}
                    </motion.div>
                </motion.div>
            </TimelineContent>
        </TimelineItem>
    );
};

export default SectionTimelineItem;
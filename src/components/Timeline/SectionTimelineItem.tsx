import {ComponentProps, FC, ReactNode} from "react";
import {OverridableStringUnion} from "@mui/types";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineDotPropsColorOverrides, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";
import {motion} from "framer-motion";

type Props = {
    startDate: string;
    endDate: string;
    title: string;
    onClick?: () => void;
    color: OverridableStringUnion<"primary" | "secondary" | "error" | "warning" | "info" | "success", TimelineDotPropsColorOverrides>;
    expanded?: boolean;
    lastItem?: boolean;
    children: ReactNode;
} & Omit<ComponentProps<typeof TimelineDot>, "color">;

const SectionTimelineItem: FC<Props> = ({startDate, endDate, title, onClick = () => {}, expanded = false, lastItem = false, color, children}) => {
    return (
        <TimelineItem onClick={onClick}>
            <motion.div
                initial={{width: 240}}
                animate={expanded ? {width: 0} : {width: 240}}
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
                animate={expanded ? {opacity: 0, width: 0} : {opacity: 1, width: 12}}
                transition={{duration: 0.8, ease: "easeInOut"}}
                className="flex"
            >
                <TimelineSeparator>
                    <TimelineDot color={color}/>
                    {lastItem ? <></> : <TimelineConnector/>}
                </TimelineSeparator>
            </motion.div>

            <TimelineContent style={expanded ? {padding: 0} : {}}>
                <motion.div
                    initial={{backgroundColor: "#00000000"}}
                    animate={expanded ? {backgroundColor: "#000000", padding: 16} : {backgroundColor: "#00000000"}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    className={`${expanded ? "p-0 my-4" : ""}`}
                >
                    <div className="mb-4">
                        <p className="font-bold text-sm md:text-base">{title}</p>

                        <div className="md:pl-2">
                            {children}
                        </div>
                    </div>
                </motion.div>
            </TimelineContent>
        </TimelineItem>
    );
};

export default SectionTimelineItem;
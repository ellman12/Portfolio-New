import {ComponentProps, FC, ReactNode} from "react";
import {OverridableStringUnion} from "@mui/types";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineDotPropsColorOverrides, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";
import ScrollOnceAnimation from "../ScrollOnceAnimation.tsx";

type Props = {
    startDate: string;
    endDate: string;
    title: string;
    color: OverridableStringUnion<"primary" | "secondary" | "error" | "warning" | "info" | "success", TimelineDotPropsColorOverrides>;
    expanded?: boolean;
    lastItem?: boolean;
    children: ReactNode;
} & Omit<ComponentProps<typeof TimelineDot>, "color">;

const SectionTimelineItem: FC<Props> = ({startDate, endDate, title, expanded = false, lastItem = false, color, children}) => {
    return (
        <ScrollOnceAnimation>
            <TimelineItem className={`${expanded ? "inline" : "flex"}`}>
                {!expanded && <TimelineOppositeContent>
					<div className="inline-flex flex-row items-center flex-wrap sm:flex-nowrap">
						<span className="text-nowrap">{startDate}—</span>
						<span className="text-nowrap">{endDate}</span>
					</div>
				</TimelineOppositeContent>}
                {!expanded && <TimelineSeparator>
                    <TimelineDot color={color}/>
                    {lastItem ? <></> : <TimelineConnector/>}
                </TimelineSeparator>}
                <TimelineContent>
                    <div className="mb-4">
                        <p className="font-bold">{title}</p>

                        <div className="pl-2">
                            {children}
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </ScrollOnceAnimation>
    );
};

export default SectionTimelineItem;
import {ComponentProps, FC, ReactNode} from "react";
import {OverridableStringUnion} from "@mui/types";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineDotPropsColorOverrides, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";

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
        <TimelineItem className={`${expanded ? "my-4" : ""}`} onClick={onClick}>
            {!expanded && <TimelineOppositeContent>
				<div className="inline-flex flex-row justify-end md:items-center flex-wrap md:flex-nowrap text-xs lg:text-base">
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
                    <p className="font-bold text-sm md:text-base">{title}</p>

                    <div className="md:pl-2">
                        {children}
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
};

export default SectionTimelineItem;
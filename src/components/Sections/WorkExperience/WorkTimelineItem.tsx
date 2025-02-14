import {ComponentProps, FC, ReactNode} from "react";
import {OverridableStringUnion} from "@mui/types";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineDotPropsColorOverrides, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";

type Props = {
    dateRange: string;
    title: string;
    color: OverridableStringUnion<"primary" | "secondary" | "error" | "warning" | "info" | "success", TimelineDotPropsColorOverrides>;
    lastItem?: boolean;
    children: ReactNode;
} & Omit<ComponentProps<typeof TimelineDot>, "color">;

const WorkTimelineItem: FC<Props> = ({dateRange, title, lastItem = false, color, children}) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent className="text-nowrap">{dateRange}</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color={color}/>
                {lastItem ? <></> : <TimelineConnector/>}
            </TimelineSeparator>
            <TimelineContent>
                <div className="mb-4">
                    <p className="font-bold">{title}</p>

                    <div className="pl-2">
                        {children}
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
};

export default WorkTimelineItem;
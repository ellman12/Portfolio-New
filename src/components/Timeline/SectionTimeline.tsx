import {FC, ReactNode} from "react";
import {Timeline, timelineOppositeContentClasses} from "@mui/lab";

interface Props {
    children: ReactNode;
}

const SectionTimeline: FC<Props> = ({children}) => {
    return (
        <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]: {flex: 0.28}}}>
            {children}
        </Timeline>
    );
}

export default SectionTimeline;

import Section from "../Section.tsx";
import WorkIcon from "@mui/icons-material/Work";
import {Timeline, timelineOppositeContentClasses} from "@mui/lab";
import WorkTimelineItem from "./WorkTimelineItem.tsx";

export default function WorkExperienceSection() {
    return (
        <Section icon={<WorkIcon/>} title="Work Experience">
            <p className="mb-4 mx-2 md:mx-8">My professional experience is primarily React, TypeScript, and Tailwind, while my personal projects primarily involve C# and PostgreSQL. I am working on expanding my professional experience out into these areas.</p>

            <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]: {flex: 0.28}}}>
                <WorkTimelineItem dateRange="May 2022 – May 2023" title="Software Engineer Intern — Daktronics" color="primary">
                    <p>Tested new software and hardware versions for digital signage using Azure DevOps.</p>
                    <p>Communicated issues with members of the appropriate teams when issues arose.</p>
                    <p>Contributed to Orion, a C# web app for automating test cases years in the making.</p>
                </WorkTimelineItem>

                <WorkTimelineItem dateRange="June 2023 – Present" title="Software Engineer — KBR" lastItem={true} color="success">
                    <p>Rewrote FEWS NET website with React, Next.js, TS, and Tailwind.</p>
                    <p>Assisted with testing before release and helped resolve issues identified during testing.</p>
                    <p>Currently working on SWIM, an internal React app for managing employees</p>
                </WorkTimelineItem>
            </Timeline>
        </Section>
    );
}

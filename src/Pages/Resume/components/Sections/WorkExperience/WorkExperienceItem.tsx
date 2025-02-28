import {FC, ReactNode} from "react";
import H3 from "../../H3.tsx";

interface Props {
    title: string;
    location: string;
    company: string;
    startDate: string;
    endDate: string;
    children: ReactNode;
}

const WorkExperienceItem: FC<Props> = ({title, location, company, startDate, endDate, children}) => {
    return (
        <div className="flex flex-col mb-4">
            <div className="flex flex-row items-center justify-between">
                <H3>
                    <b>{title}</b>
                </H3>

                <p>{location}</p>
            </div>

            <div className="flex flex-row items-center justify-between">
                <p>{company}</p>
                <p>{startDate}–{endDate}</p>
            </div>

            <ul className="ml-6 list-disc">
                {children}
            </ul>
        </div>
    );
};

export default WorkExperienceItem;

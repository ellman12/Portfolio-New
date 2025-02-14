import {FC, ReactNode} from "react";
import H2 from "../H2.tsx";

interface Props {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}

const Section: FC<Props> = ({icon, title, children}) => {
    return (
        <section id="about-me" className="border-t-2 border-white px-4 pt-4 pb-8 flex flex-col">
            <div className="flex flex-row items-center gap-4 mb-6">
                {icon}
                <H2>{title}</H2>
            </div>

            {children}
        </section>
    );
};

export default Section;
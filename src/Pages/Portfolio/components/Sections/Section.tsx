import {FC, ReactNode} from "react";
import H2 from "../H2.tsx";

interface Props {
    icon: ReactNode;
    title: string;
    disablePaddingX?: boolean;
    children: ReactNode;
}

const Section: FC<Props> = ({icon, title, disablePaddingX = false, children}) => {
    const sidePadding = "px-1 sm:px-2 lg:px-4 ";

    return (
        <section id={title.toLowerCase().replace(" ", "-")} className="border-t-2 border-white pt-4 pb-8 flex flex-col">
            <div className={`flex flex-row items-center gap-4 mb-6 ${sidePadding}`}>
                {icon}
                <H2>{title}</H2>
            </div>

            <div className={`${disablePaddingX ? "" : sidePadding}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
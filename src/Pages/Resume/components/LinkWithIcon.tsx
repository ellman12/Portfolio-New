import {FC, ReactNode} from "react";

interface Props {
    href: string;
    icon: ReactNode;
    children: ReactNode;
}

const LinkWithIcon: FC<Props> = ({href, icon, children}) => {
    return (
        <a style={{color: "cornflowerblue"}} className="flex flex-row items-center gap-2 hover:cursor-pointer hover:underline" href={href}>
            {children}
            {icon}
        </a>
    );
};

export default LinkWithIcon;

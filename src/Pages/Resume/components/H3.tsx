import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const H3: FC<Props> = ({children, className = ""}) => <h2 className={`text-lg ${className}`}>{children}</h2>

export default H3;

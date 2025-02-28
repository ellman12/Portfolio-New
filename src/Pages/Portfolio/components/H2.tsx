import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const H2: FC<Props> = ({children}) => <h2 className="text-2xl">{children}</h2>

export default H2;

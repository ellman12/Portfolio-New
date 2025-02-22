import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const H3: FC<Props> = ({children}) => <h2 className="text-xl">{children}</h2>

export default H3;

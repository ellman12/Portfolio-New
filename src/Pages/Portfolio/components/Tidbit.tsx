import {FC, ReactNode} from "react";

interface Props {
    icon: ReactNode;
    children: ReactNode;
}

const Tidbit: FC<Props> = ({icon, children}) => {
    return (
        <div className="flex flex-row items-center gap-4">
            {icon}
            {children}
        </div>
    );
};

export default Tidbit;
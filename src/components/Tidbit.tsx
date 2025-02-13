import {FC, ReactNode} from "react";

interface Props {
    icon: ReactNode;
    text: string;
}

const Tidbit: FC<Props> = ({icon, text}) => {
    return (
        <div className="flex flex-row items-center gap-4">
            {icon}
            {text}
        </div>
    );
};

export default Tidbit;
import {FC} from "react";

interface Props {
    src: string;
    alt: string;
}

const CarouselItem: FC<Props> = ({src, alt}) => {
    return <img src={`Images/${src}`} alt={alt}/>;
};

export default CarouselItem;

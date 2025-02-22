import {FC} from "react";

interface Props {
    src: string;
    alt: string;
}

const CarouselItem: FC<Props> = ({src, alt}) => {
    return <div className="flex flex-col">
        <img src={`Images/${src}`} alt={alt}/>
        <p className="text-white mt-2">{alt}</p>
    </div>;
};

export default CarouselItem;

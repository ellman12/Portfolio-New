import {FC, ReactNode} from "react";
import {motion} from "framer-motion";

interface Props {
    children: ReactNode;
}

const ScrollOnceAnimation: FC<Props> = ({children}) => (
    <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.7}}
    >
        {children}
    </motion.div>
);

export default ScrollOnceAnimation;

import {motion} from 'framer-motion';

export function RedTriangle({animateTriangle}) {

    return (
        <svg 
            className="absolute bottom-0 right-0 z-[-10] flex flex-col align-bottom" 
            width='500'
            height='357'
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path 
                initial={{d: "M380 1000 L500 400 H0 L870 200Z"}}
                animate={
                    animateTriangle
                    ? {d: "M500 1000 L500 400 H0 L500 0Z"}
                    : {d: "M380 1000 L500 400 H0 L870 200Z"}
                }
                exit={{d: "M380 1000 L500 400 H0 L870 200Z"}}
                transition={{duration: 1, ease: 'easeInOut'}}
                fill="#DB6232" 
                fillOpacity="0.29"/>
        </svg>
    )
}
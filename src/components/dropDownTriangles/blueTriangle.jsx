import {motion} from 'framer-motion';

export function BlueTriangle({animateTriangle}) {

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
                transition={{duration: 0.75, ease: 'easeInOut', delay: 0.25}}
                fill="#B7EDD2" 
                fillOpacity="0.51"/>
        </svg>
    )
}
import {motion} from 'framer-motion';

export function GreenTriangle({animateTriangle}) {

    return (
        <svg 
            className={`absolute bottom-0 right-0 ${animateTriangle && 'z-[-10]'} z-[-10] flex flex-col align-bottom`}
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
                fill="#AFDA54" 
                fillOpacity="0.44"/>
        </svg>
    )
}
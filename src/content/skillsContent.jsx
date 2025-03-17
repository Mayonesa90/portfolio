import {motion} from 'motion/react'
import {useState} from 'react'

export function SkillsContent(){

    const [frontend, setFrontend] = useState(false)
    const [backend, setBackend] = useState(false)
    const [uiux, setUiux] = useState(false)
    const [hoverFrontend, setHoverFrontend] = useState(false)
    const [hoverBackend, setHoverBackend] = useState(false)
    const [hoverUiux, setHoverUiux] = useState(false)

    const toggleOpen = (title) => {
        setFrontend((prev) => title === "FRONTEND" ? !prev : false);
        setBackend((prev) => title === "BACKEND" ? !prev : false);
        setUiux((prev) => title === "UIUX" ? !prev : false)
    }

    return (
        <motion.section 
            className="flex flex-wrap flex-row-reverse place-content-between max-w-xl gap-7 relative overflow-hidden min-h-[300px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 1 }}
            transition={{ duration: 0 }}
        >   
        <ul className='flex flex-col gap-5 font-Lato font-extra-bold italic text-xl mt-16'>
            <li className='flex gap-2 place-content-end'>
                {hoverFrontend && '<'} 
                <motion.h2 
                    onMouseEnter={()=>setHoverFrontend(true)}
                    onMouseLeave={()=>setHoverFrontend(false)}
                    transition={{ duration: 1, ease: 'easeOut'}}
                    className={`h-min hover:cursor-pointer ${frontend && 'underline'}` }
                    onClick={()=>toggleOpen('FRONTEND')}
                >
                    FRONTEND
                </motion.h2>
            </li>
            <li className='flex gap-2 place-content-end'>
                {hoverBackend && '<'} 
                <motion.h2 
                    onMouseEnter={()=>setHoverBackend(true)}
                    onMouseLeave={()=>setHoverBackend(false)}
                    transition={{ duration: 1, ease: 'easeOut'}}
                    className={`h-min hover:cursor-pointer ${backend && 'underline'}` }
                    onClick={()=>toggleOpen('BACKEND')}
                >
                    BACKEND
                </motion.h2>
            </li>
            <li className='flex gap-2 place-content-end'>
                {hoverUiux && '<'}
                <motion.h2 
                    onMouseEnter={()=>setHoverUiux(true)}
                    onMouseLeave={()=>setHoverUiux(false)}
                    transition={{ duration: 1, ease: 'easeOut'}}
                    className={`h-min hover:cursor-pointer ${uiux && 'underline'}` }
                    onClick={()=>toggleOpen('UIUX')}
                >
                    UI/UX
                </motion.h2>
            </li>
        </ul>
       
    
            <motion.section className='flex flex-row-reverse w-screen '>
                {/* Frontend */}
                <motion.ul
                    className='absolute right-36 top-1 flex flex-col gap-2'
                    initial={frontend ? {opacity: 0} : {opacity: 0}}
                    animate={frontend ? {opacity: 1} : {opacity: 0}}
                    exit={frontend ? {opacity: 0} : {opacity: 0}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Typescript</li>
                    <li>WCAG</li>
                    <li>Responsive Design</li>
                    <li>TailwindCSS</li>
                </motion.ul>

                {/* BACKEND */}
                <motion.ul
                    className='absolute right-36 top-1 flex flex-col gap-2'
                    initial={backend ? {opacity: 0} : {opacity: 0}}
                    animate={backend ? {opacity: 1} : {opacity: 0}}
                    exit={backend ? {opacity: 0} : {opacity: 0}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>SQL/NoSQL</li>
                    <li>PHP</li>
                    <li>AWS Cloudwatch</li>
                    <li>AWS DynamoDB</li>
                    <li>AWS Lambda</li>
                    <li>AWS API Gateway</li>
                    <li>RESTful API</li>
                </motion.ul>

                {/* UI/UX */}
                <motion.ul
                    className='absolute right-36 top-1 flex flex-col gap-2'
                    initial={uiux ? {opacity: 0} : {opacity: 0}}
                    animate={uiux ? {opacity: 1} : {opacity: 0}}
                    exit={uiux ? {opacity: 0} : {opacity: 0}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <li>Interactive protypes Figma</li>
                    <li>Adobe Illustrator</li>
                </motion.ul>

            </motion.section>

        </motion.section>
       
    )
}
import {motion} from 'motion/react'
import {useState} from 'react'

export function SkillsContent(){

    const [frontend, setFrontend] = useState(false)
    const [backend, setBackend] = useState(false)
    const [uiux, setUiux] = useState(false)
    const [globalStateManagement, setGlobalStateManagement] = useState(false)
    const [hoverFrontend, setHoverFrontend] = useState(false)
    const [hoverBackend, setHoverBackend] = useState(false)
    const [hoverUiux, setHoverUiux] = useState(false)
    const [hoverGlobalStateManagement, setHoverGlobalStateManagement] = useState(false)

    const toggleOpen = (title) => {
        setFrontend((prev) => title === "FRONTEND" ? true : false);
        setBackend((prev) => title === "BACKEND" ? true : false);
        setUiux((prev) => title === "UIUX" ? true : false);
        setGlobalStateManagement((prev) => title === "GLOBALSTATEMANAGEMENT" ? true : false);
    };

    const toggleHover = (title, boolean) => {
        if (boolean) {
            // When hovering, temporarily disable any clicked section
            setFrontend(title === "FRONTEND");
            setBackend(title === "BACKEND");
            setUiux(title === "UIUX");
            setGlobalStateManagement(title === "GLOBALSTATEMANAGEMENT");
        } else {
            // When leaving, restore the clicked section
            setFrontend((prev) => prev || title === "FRONTEND");
            setBackend((prev) => prev || title === "BACKEND");
            setUiux((prev) => prev || title === "UIUX");
            setGlobalStateManagement((prev) => prev || title === "GLOBALSTATEMANAGEMENT");
        }
    };

    return (
        <motion.section 
            className="font-Lato flex flex-row-reverse place-content-between max-w-xl gap-7 relative overflow-x-hidden min-h-[320px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 1 }}
            transition={{ duration: 0 }}
        >   
        <ul className='flex flex-col gap-5 font-Lato italic font-extra-bold text-lg w-fit pl-3 my-auto'>
            <li className='flex gap-2 place-content-end text-gray-800 hover:text-black'>
                {hoverFrontend && '<'} 
                <motion.h2 
                    onMouseEnter={() => toggleHover("FRONTEND", true)}
                    onMouseLeave={() => toggleHover("FRONTEND", false)}
                    transition={{ duration: 1, ease: 'easeOut'}}
                    className={`h-min hover:cursor-pointer ${frontend && 'underline'}` }
                    onClick={()=>toggleOpen('FRONTEND')}
                >
                    FRONTEND
                </motion.h2>
            </li>
            <li className='flex gap-2 place-content-end text-gray-800 hover:text-black'>
                {hoverGlobalStateManagement && '<'}
                <motion.h2 
                    onMouseEnter={() => toggleHover("GLOBALSTATEMANAGEMENT", true)}
                    onMouseLeave={() => toggleHover("GLOBALSTATEMANAGEMENT", false)}
                    transition={{ duration: 1, ease: 'easeOut'}}
                    className={`h-min hover:cursor-pointer ${globalStateManagement && 'underline'}` }
                    onClick={()=>toggleOpen('GLOBALSTATEMANAGEMENT')}
                >
                    GLOBAL STATE MANAGEMENT
                </motion.h2>
            </li>
            <li className='flex gap-2 place-content-end text-gray-800 hover:text-black'>
                {hoverBackend && '<'} 
                <motion.h2 
                    onMouseEnter={() => toggleHover("BACKEND", true)}
                    onMouseLeave={() => !backend && toggleHover("BACKEND", false)}
                    transition={{ duration: 1, ease: 'easeOut'}}
                    className={`h-min hover:cursor-pointer ${backend && 'underline'}` }
                    onClick={()=>toggleOpen('BACKEND')}
                >
                    BACKEND
                </motion.h2>
            </li>
            <li className='flex gap-2 place-content-end text-gray-800 hover:text-black'>
                {hoverUiux && '<'}
                <motion.h2 
                   onMouseEnter={() => toggleHover("UIUX", true)}
                   onMouseLeave={() => toggleHover("UIUX", false)}
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
                {frontend && <motion.ul
                    className=' right-36 my-auto flex flex-col gap-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <li>React</li>
                    <li>Angular</li>
                    <li>TailwindCSS</li>
                    <li>Typescript</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Flexbox</li>
                    <li>Grid</li>
                    <li>WCAG</li>
                </motion.ul>
                } 

                {/* Global state management */}
                {globalStateManagement && <motion.ul
                    className=' right-36 my-auto flex flex-col gap-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <li>NGXS</li>
                    <li>Zustand</li>
                    <li>React Redux</li>
                </motion.ul>
                }

                {/* BACKEND */}
                {backend && <motion.ul
                    className=' right-36 my-auto flex flex-col gap-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
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
                }       

                {/* UI/UX */}
                {uiux &&
                <motion.ul
                    className=' right-36 my-auto flex flex-col gap-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <li>Figma</li>
                    <li>Adobe Illustrator</li>
                </motion.ul>
        }
            </motion.section>

        </motion.section>
       
    )
}
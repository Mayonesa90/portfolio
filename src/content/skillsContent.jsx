import {motion} from 'motion/react'
import {useState} from 'react'

export function SkillsContent({isVisible}){

    const [frontend, setFrontend] = useState(true)
    const [backend, setBackend] = useState(false)
    const [uiux, setUiux] = useState(false)
    const [globalStateManagement, setGlobalStateManagement] = useState(false)

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
            className="font-Lato flex flex-row-reverse place-content-between max-w-xl relative overflow-x-hidden min-h-[360px] "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 1 }}
            transition={{ duration: 0 }}
        >   
        <ul className='flex flex-col font-Lato italic font-extra-bold text-lg w-fit my-auto'>
            <li className={`flex place-content-end text-gray-800 hover:text-black  pr-2 py-2 ${frontend && 'text-black bg-[#DB6232] bg-opacity-30'}`}>
                <motion.h2 
                    onMouseEnter={() => toggleHover("FRONTEND", true)}
                    onMouseLeave={() => toggleHover("FRONTEND", false)}
                    transition={{ duration: 1, ease: 'easeInOut'}}
                    className={`h-min hover:cursor-pointer  pl-[5.6rem]` }
                    onClick={()=>toggleOpen('FRONTEND')}
                >
                    FRONTEND
                </motion.h2>
            </li>
            <li className={`flex place-content-end text-gray-800 hover:text-black  pr-2 py-2 ${globalStateManagement && 'text-black bg-[#DB6232] bg-opacity-30'}`}>
                <motion.h2 
                    onMouseEnter={() => toggleHover("GLOBALSTATEMANAGEMENT", true)}
                    onMouseLeave={() => toggleHover("GLOBALSTATEMANAGEMENT", false)}
                    transition={{ duration: 1, ease: 'easeInOut'}}
                    className={`h-min hover:cursor-pointer ` }
                    onClick={()=>toggleOpen('GLOBALSTATEMANAGEMENT')}
                >
                    GLOBAL STATE MANAGEMENT
                </motion.h2>
            </li>
            <li className={`flex place-content-end text-gray-800 hover:text-black pr-2 py-2 ${backend && 'text-black bg-[#DB6232] bg-opacity-30'}`}>
                <motion.h2 
                    onMouseEnter={() => toggleHover("BACKEND", true)}
                    onMouseLeave={() => !backend && toggleHover("BACKEND", false)}
                    transition={{ duration: 1, ease: 'easeInOut'}}
                    className={`h-min hover:cursor-pointer ` }
                    onClick={()=>toggleOpen('BACKEND')}
                >
                    BACKEND
                </motion.h2>
            </li>
            <li className={`flex place-content-end text-gray-800 hover:text-black pr-2 py-2 ${uiux && 'text-black bg-[#DB6232] bg-opacity-30'}`}>
                <motion.h2 
                   onMouseEnter={() => toggleHover("UIUX", true)}
                   onMouseLeave={() => toggleHover("UIUX", false)}
                    transition={{ duration: 1, ease: 'easeInOut'}}
                    className={`h-min hover:cursor-pointer` }
                    onClick={()=>toggleOpen('UIUX')}
                >
                    UI/UX
                </motion.h2>
            </li>
        </ul>
       
    
            <motion.section className='flex flex-row-reverse w-screen '>
                {/* Frontend */}
                {frontend && <motion.section
                    className=' my-auto flex flex-col gap-2 bg-[#DB6232] bg-opacity-30 py-3 pr-5 h-full w-full sm-custom:w-full sm-custom:w-2/3'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <ul className='flex flex-col my-auto  gap-2'>
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
                    </ul>
                </motion.section>
                } 

                {/* Global state management */}
                {globalStateManagement && <motion.section
                    className=' right-36 my-auto flex flex-col bg-[#DB6232] bg-opacity-30 py-3 pr-5 pl-20  h-full w-full sm-custom:w-2/3'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >  
                    <ul className='flex flex-col my-auto  gap-2'>
                        <li>NGXS</li>
                        <li>Zustand</li>
                        <li>React Redux</li>
                    </ul>
                </motion.section>
                }

                {/* BACKEND */}
                {backend && <motion.section
                    className=' right-36 my-auto flex flex-col gap-2 bg-[#DB6232] bg-opacity-30 py-3 pr-5 pl-20  h-full w-full sm-custom:w-2/3'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <ul className='flex flex-col my-auto  gap-2'>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>SQL/NoSQL</li>
                        <li>PHP</li>
                        <li>AWS Cloudwatch</li>
                        <li>AWS DynamoDB</li>
                        <li>AWS Lambda</li>
                        <li>AWS API Gateway</li>
                        <li>RESTful API</li>
                    </ul>
                </motion.section>
                }       

                {/* UI/UX */}
                {uiux &&
                <motion.section
                    className=' right-36 my-auto flex flex-col gap-2 bg-[#DB6232] bg-opacity-30 py-3 px-5  pl-20  h-full w-full sm-custom:w-2/3'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <ul  className='flex flex-col my-auto  gap-2'>
                        <li>Figma</li>
                        <li>Adobe Illustrator</li>
                    </ul>
                </motion.section>
        }
            </motion.section>

        </motion.section>
       
    )
}
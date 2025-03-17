import {useEffect, useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {AboutContent} from '../content/aboutContent'
import {SkillsContent} from '../content/skillsContent'
import {PortfolioContent} from '../content/portfolioContent'
import { RedTriangle } from './dropDownTriangles/redTriangle'
import { GreenTriangle } from './dropDownTriangles/greenTriangle'
import { BlueTriangle } from './dropDownTriangles/blueTriangle'

export function DropDown() {

    const [about, setAbout] = useState(false)
    const [skills, setSkills] = useState(false)
    const [portfolio, setPortfolio] = useState(false)
    const [dropDownState, setDropDownState] = useState(false)

    const redTriangleData = {
        height: '357',
        width: '500',
        initialPath: "M380 1000 L500 350 H0 L870 200Z",
        finalPath: "M380 1000 L500 400 H0 L870 200Z",
        color: "#DB6232",
        fillOpacity: "0.29",
    }

    const greenTriangleData = {
        initialPath: "M473 0V1000H0L473 0Z",
        finalPath: "M2000 0V1198H0L2000 0Z",
        color: "#AFDA54",
        fillOpacity: "0.44",
    }

    const blueTriangleData = {
        initialPath: "M2000 0V677L0 0H2000Z",
        finalPath: "M2000.5 0V2518.5L0.5 0H2000.5Z",
        color: "#B7EDD2",
        fillOpacity: "0.51",
    }

    const toggleOpen = (title) => {
        setAbout((prev) => title === "ABOUT" ? !prev : false);
        setSkills((prev) => title === "SKILLS" ? !prev : false);
        setPortfolio((prev) => title === "PORTFOLIO" ? !prev : false);

    }
    
    useEffect(() => {
        setDropDownState(about || skills || portfolio);
    }, [about, skills, portfolio]);

    return (
        <AnimatePresence>
            <main className={`flex flex-col flex-wrap relative ${dropDownState ? ' h-fit  pb-10 mt-10' : 'min-h-full place-content-center flex-grow' }` }> 
                
                {/* ABOUT */}
                <motion.div 
                    initial={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 0, x: '100%'}}
                    animate={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 100, x: '0%'}}
                    transition={{ duration: 1.5, delay: 0, ease: 'easeInOut'}}
                    className="text-right px-6 w-full place-self-end relative"
                >
                    <motion.h1 
                        onMouseDown={() => toggleOpen('ABOUT')} 
                        className={`text-right font-Gentle text-5xl z-10 hover:cursor-pointer
                            ${!about 
                                ? 'tracking-tight hover:tracking-widest' 
                                : 'tracking-widest hover:tracking-tight'} `
                            }
                        >
                            About
                        </motion.h1>

                    { about && 
                    <motion.article 
                        initial={{opacity: 0, x: '100%'}}
                        animate={about ? { opacity: 100, x: '0%'} : { opacity: 0, x: '100%' }}
                        exit={about ? { opacity: 0, x: '100%' } : { opacity: 0, x: '100%' }}
                        transition={{ duration: 1, ease: 'easeInOut'}}
                        className='relative bottom-0 flex place-content-end'
                        > <AboutContent /> 
                    </motion.article>}

                    <RedTriangle animateTriangle={about}/>
                </motion.div>

                {/* SKILLS */}
                <motion.div 
                    initial={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 0, x: '100%'}}
                    animate={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 100, x: '0%'}}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut'}}
                    className="text-right px-6 hover:cursor-pointer w-full place-self-end relative"
                >
                    <motion.h1 
                        onMouseDown={() => toggleOpen('SKILLS')} 
                        className={`text-right font-Gentle text-5xl z-10  ${!skills ? 'tracking-tight hover:tracking-widest' : 'tracking-widest hover:tracking-tight'} `}

                    >
                        Skills
                    </motion.h1>
                
                    { skills && 
                        <motion.article 
                            className=' px-6 pb-10 '
                            initial={{opacity: 0, x: '100%'}}
                            animate={skills ? { opacity: 100, x: '0%'} : { opacity: 0, x: '100%' }}
                            exit={skills ? { opacity: 0, x: '100%' } : { opacity: 0, x: '100%' }}
                            transition={{ duration: 1, ease: 'easeInOut'}}
                        > 
                            <SkillsContent /> 
                        </motion.article> 
                    }
                    <GreenTriangle animateTriangle={skills}/>
                </motion.div>
                
                {/* PORTFOLIO */}
                <motion.div 
                    className="text-right px-6 hover:cursor-pointer w-full place-self-end relative"
                    initial={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 0, x: '100%'}}
                    animate={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 100, x: '0%'}}
                    transition={{ duration: 1.5, delay: 1, ease: 'easeInOut'}}
                >
                    <motion.h1 
                        onMouseDown={() => toggleOpen('PORTFOLIO')} 
                        className={`text-right font-Gentle text-5xl z-10  ${!portfolio ? 'tracking-tight hover:tracking-widest' : 'tracking-widest hover:tracking-tight'} `}

                    >
                        Portfolio
                    </motion.h1>
               
                    {portfolio && 
                        <motion.article 
                            className=' px-6 pb-10'
                            initial={{opacity: 0, x: '100%'}}
                            animate={portfolio ? { opacity: 100, x: '0%'} : { opacity: 0, x: '100%' }}
                            exit={portfolio ? { opacity: 0, x: '100%' } : { opacity: 0, x: '100%' }}
                            transition={{ duration: 1, ease: 'easeInOut'}}
                        > 
                            <PortfolioContent />
                        </motion.article>
                    }
                    <BlueTriangle animateTriangle={portfolio}/>
                </motion.div>
        </main>

       </AnimatePresence>
    
    )
}
import {useEffect, useState} from 'react'
import { AnimatePresence, motion } from 'motion/react'
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
    // className={`flex flex-col flex-wrap relative ${dropDownState ? ' h-fit  pb-10 mt-10' : 'min-h-full place-content-center flex-grow' }` 

    return (
        
            <motion.main 
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5}}
                className={`flex flex-col flex-wrap relative min-h-full flex-grow place-content-center` 
                }> 
                
                {/* ABOUT */}
                <motion.div 
                    initial={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 0, x: '100%'}}
                    animate={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 100, x: '0%'}}
                    transition={{ duration: 1.5, delay: 0, ease: 'easeInOut'}}
                    className="text-right px-6 w-full place-self-end relative h-fit"
                >
                    <motion.h1
                        initial={about ? {y: '100%', letterSpacing: '0.1em'} : {y: '0%', letterSpacing: '-0.025em'}}
                        animate={about ? { y: '0%'} : { y: '0%'}}
                        exit={about ? {y: '100%'} : {y: '0%'}}
                        whileHover={about ? {letterSpacing: '-0.025em'} : {letterSpacing: '0.1em'}}
                        transition={{ duration: 1, ease: 'easeOut'}}
                        onMouseDown={() => toggleOpen('ABOUT')} 
                        className='text-right font-Gentle text-5xl z-10 hover:cursor-pointer' 
                        >
                            About
                        </motion.h1>
                    
                    <AnimatePresence>

                    <motion.article 
                        initial={about ? {opacity: 0, x: '100%', maxHeight: 500 } : {opacity: 0, x: '100%', maxHeight: 0}}
                        animate={about ? { opacity: 100, x: '0%', maxHeight: 500} : { opacity: 0, x: '100%', maxHeight: 0}}
                        exit={about ? { opacity: 0, x: '100%', maxHeight: 500} : { opacity: 0, x: '100%', maxHeight: 0}}
                        transition={{ 
                            maxHeight: {duration: 1, ease: 'easeInOut'},
                            x: {duration: 1, ease: 'easeInOut', delay: 0.5},
                            opacity: {duration: 0.5, ease: 'easeInOut'}
                        }}
                        className='relative bottom-0 flex place-content-end'
                    > 
                        <AboutContent /> 
                    </motion.article>

                    </AnimatePresence>

                    <RedTriangle animateTriangle={about}/>
                </motion.div>

                {/* SKILLS */}
                <motion.div 
                    initial={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 0, x: '100%'}}
                    animate={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 100, x: '0%'}}
                    transition={{ duration: 1.5, delay: 0, ease: 'easeInOut'}}
                    className="text-right px-6 w-full place-self-end relative h-fit"
                >
                    <motion.h1
                        initial={skills ? {y: '100%', letterSpacing: '0.1em'} : {y: '0%', letterSpacing: '-0.025em'}}
                        animate={skills ? { y: '0%'} : { y: '0%'}}
                        exit={skills ? {y: '100%'} : {y: '0%'}}
                        whileHover={skills ? {letterSpacing: '-0.025em'} : {letterSpacing: '0.1em'}}
                        transition={{ duration: 1, ease: 'easeOut'}}
                        onMouseDown={() => toggleOpen('SKILLS')} 
                        className='text-right font-Gentle text-5xl z-10 hover:cursor-pointer' 
                        >
                            Skills
                        </motion.h1>
                    
                    <AnimatePresence>

                    <motion.article 
                        initial={skills ? {opacity: 0, x: '100%', maxHeight: 500 } : {opacity: 0, x: '100%', maxHeight: 0}}
                        animate={skills ? { opacity: 100, x: '0%', maxHeight: 500} : { opacity: 0, x: '100%', maxHeight: 0}}
                        exit={skills ? { opacity: 0, x: '100%', maxHeight: 500} : { opacity: 0, x: '100%', maxHeight: 0}}
                        transition={{ 
                            maxHeight: {duration: 1, ease: 'easeInOut'},
                            x: {duration: 1, ease: 'easeInOut', delay: 0.5},
                            opacity: {duration: 0.5, ease: 'easeInOut'}
                        }}
                        className='relative bottom-0 flex place-content-end'
                    > 
                        <SkillsContent /> 
                    </motion.article>

                    </AnimatePresence>

                    <GreenTriangle animateTriangle={skills}/>
                </motion.div>
                
                {/* PORTFOLIO */}
                <motion.div 
                    initial={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 0, x: '100%'}}
                    animate={about || skills || portfolio ? { opacity: 100, x: '0%'} : { opacity: 100, x: '0%'}}
                    transition={{ duration: 1.5, delay: 0, ease: 'easeInOut'}}
                    className="text-right px-6 w-full place-self-end relative h-fit"
                >
                    <motion.h1
                        initial={portfolio ? {y: '100%', letterSpacing: '0.1em'} : {y: '0%', letterSpacing: '-0.025em'}}
                        animate={portfolio ? { y: '0%'} : { y: '0%'}}
                        exit={portfolio ? {y: '100%'} : {y: '0%'}}
                        whileHover={portfolio ? {letterSpacing: '-0.025em'} : {letterSpacing: '0.1em'}}
                        transition={{ duration: 1, ease: 'easeOut'}}
                        onMouseDown={() => toggleOpen('PORTFOLIO')} 
                        className='text-right font-Gentle text-5xl z-10 hover:cursor-pointer' 
                        >
                            Portfolio
                        </motion.h1>
                    
                    <AnimatePresence>

                    <motion.article 
                        initial={portfolio ? {opacity: 0, x: '100%', maxHeight: 500 } : {opacity: 0, x: '100%', maxHeight: 0}}
                        animate={portfolio ? { opacity: 100, x: '0%', maxHeight: 500} : { opacity: 0, x: '100%', maxHeight: 0}}
                        exit={portfolio ? { opacity: 0, x: '100%', maxHeight: 500} : { opacity: 0, x: '100%', maxHeight: 0}}
                        transition={{ 
                            maxHeight: {duration: 1, ease: 'easeInOut'},
                            x: {duration: 1, ease: 'easeInOut', delay: 0.5},
                            opacity: {duration: 0.5, ease: 'easeInOut'}
                        }}
                        className='relative bottom-0 flex place-content-end'
                    > 
                        <PortfolioContent /> 
                    </motion.article>

                    </AnimatePresence>

                    <BlueTriangle animateTriangle={portfolio}/>
                </motion.div>
        </motion.main>

    
    )
}
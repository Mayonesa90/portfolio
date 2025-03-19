import {useState} from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {AboutContent} from '../content/aboutContent'
import {SkillsContent} from '../content/skillsContent'
import {PortfolioContent} from '../content/portfolioContent'
import { RedTriangle } from './dropDownTriangles/redTriangle'
import { GreenTriangle } from './dropDownTriangles/greenTriangle'
import { BlueTriangle } from './dropDownTriangles/blueTriangle'
import { Portfolio2Content } from '../content/portfolio2Content'

export function DropDown() {

    const [about, setAbout] = useState(false)
    const [skills, setSkills] = useState(false)
    const [portfolio, setPortfolio] = useState(false)

    const toggleOpen = (title) => {
        setAbout((prev) => title === "ABOUT" ? !prev : false);
        setSkills((prev) => title === "SKILLS" ? !prev : false);
        setPortfolio((prev) => title === "PORTFOLIO" ? !prev : false);

    }

    return (
        
            <motion.main 
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5}}
                className={`flex flex-col flex-wrap relative min-h-full flex-grow place-content-center overflow-x-hidden` 
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
                        className='w-fit ml-auto place-self-end text-right font-Gentle text-4xl sm-custom:text-5xl z-10 hover:cursor-pointer' 
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
                            x: {duration: 1, ease: 'easeInOut', delay: 0.75},
                            opacity: {duration: 0.5, ease: 'easeInOut', delay: 0.5}
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
                    transition={{ duration: 1.5, delay: 0.25, ease: 'easeInOut'}}
                    className="text-right px-6 w-full place-self-end relative h-fit"
                >
                    <motion.h1
                        initial={skills ? {y: '100%', letterSpacing: '0.1em'} : {y: '0%', letterSpacing: '-0.025em'}}
                        animate={skills ? { y: '0%'} : { y: '0%'}}
                        exit={skills ? {y: '100%'} : {y: '0%'}}
                        whileHover={skills ? {letterSpacing: '-0.025em'} : {letterSpacing: '0.1em'}}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.25}}
                        onMouseDown={() => toggleOpen('SKILLS')} 
                        className='w-fit ml-auto place-self-end text-right font-Gentle text-4xl sm-custom:text-5xl z-10 hover:cursor-pointer' 
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
                            x: {duration: 1, ease: 'easeInOut', delay: 0.75},
                            opacity: {duration: 0.25, ease: 'easeInOut', delay: 0.5}
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
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut'}}
                    className="text-right px-6 w-full place-self-end relative h-fit"
                >
                    <motion.h1
                        initial={portfolio ? {y: '100%', letterSpacing: '0.1em'} : {y: '0%', letterSpacing: '-0.025em'}}
                        animate={portfolio ? { y: '0%'} : { y: '0%'}}
                        exit={portfolio ? {y: '100%'} : {y: '0%'}}
                        whileHover={portfolio ? {letterSpacing: '-0.025em'} : {letterSpacing: '0.1em'}}
                        transition={{ duration: 1, ease: 'easeOut'}}
                        onMouseDown={() => toggleOpen('PORTFOLIO')} 
                        className='w-fit ml-auto place-self-end  text-right font-Gentle text-4xl sm-custom:text-5xl z-10 hover:cursor-pointer' 
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
                            x: {duration: 1, ease: 'easeInOut', delay: 0.75},
                            opacity: {duration: 0.5, ease: 'easeInOut', delay: 0.5}
                        }}
                        className='relative bottom-0 flex place-content-end'
                    > 
                        <Portfolio2Content /> 
                    </motion.article>

                    </AnimatePresence>

                    <BlueTriangle animateTriangle={portfolio}/>
                </motion.div>
        </motion.main>

    
    )
}
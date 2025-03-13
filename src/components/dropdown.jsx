import {useEffect, useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {AboutContent} from '../content/aboutContent'
import {SkillsContent} from '../content/skillsContent'
import {PortfolioContent} from '../content/portfolioContent'
import PolygonRed from '../assets/dropdown/polygon-red.svg'
import PolygonBlue from '../assets/dropdown/polygon-blue.svg'
import PolygonGreen from '../assets/dropdown/polygon-green.svg'

export function DropDown() {

    const [about, setAbout] = useState(false)
    const [skills, setSkills] = useState(false)
    const [portfolio, setPortfolio] = useState(false)
    const [dropDownState, setDropDownState] = useState(false)

    const toggleOpen = (title) => {
        setAbout((prev) => title === "ABOUT" ? !prev : false);
        setSkills((prev) => title === "SKILLS" ? !prev : false);
        setPortfolio((prev) => title === "PORTFOLIO" ? !prev : false);

    }
    
    useEffect(() => {
        setDropDownState(about || skills || portfolio);
    }, [about, skills, portfolio]);

    return (
       <>
        {dropDownState ? (
            <main className='flex flex-col h-fit relative pb-10'>
            {!about ? (
                <div className="text-right px-6 hover:cursor-pointer w-full place-self-end relative">
                    <motion.h1 
                        initial={{ opacity: 0, y: 0}}
                        animate={{ opacity: 1, y: 0}}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 2 }}
                        onMouseDown={() => toggleOpen('ABOUT')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest z-10'
                    >
                        About
                    </motion.h1>
                    <img src={PolygonRed} alt="" className='absolute bottom-0 z-[-10] w-96 right-0' />
                </div>
            ) : (
                <AnimatePresence>
                <motion.section 
                    key="about"
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 1 }}
                    className='relative h-full'
                >
                    <div className='px-6 text-right hover:cursor-pointer w-full place-self-end '>
                        <h1
                            onMouseDown={() => toggleOpen('ABOUT')} 
                            className='font-Gentle tracking-widest text-5xl hover:tracking-normal'>
                                About
                        </h1>
                    </div>
                    <motion.article 
                        className='px-6 pb-10'
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                    >
                        <AboutContent />
                    </motion.article>
                    <motion.img 
                        src={PolygonRed} 
                        alt="" 
                        className='absolute bottom-0 z-[-10] w-full right-0' 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                    />
                </motion.section>
            </AnimatePresence>
            )}
             {!skills ? (
                <div className="text-right px-6 hover:cursor-pointer w-full place-self-end relative">
                    <motion.h1 
                        onMouseDown={() => toggleOpen('SKILLS')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'
                        
                    >
                        Skills
                    </motion.h1>
                    <img src={PolygonGreen} alt="" className='absolute bottom-0 z-[-20] w-96 right-0' />
                </div>
            ) : (
                <motion.section 
                    key="skills"
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 1 }}
                    className='relative h-full'    
                >
                    <div className='px-6 text-right hover:cursor-pointer w-full place-self-end top-3'>
                        <h1 onMouseDown={() => toggleOpen('SKILLS')} className='font-Gentle tracking-widest text-5xl hover:tracking-normal'>Skills</h1>
                    </div>
                    <article className=' px-6 pb-10'>
                        <SkillsContent />
                    </article>
                    <img src={PolygonGreen} alt="" className='absolute bottom-0 z-[-20] w-96 right-0' />
                </motion.section>
            )}
             {!portfolio ? (
                <div className="text-right px-6 hover:cursor-pointer place-self-end relative">
                    <motion.h1 
                        onMouseDown={() => toggleOpen('PORTFOLIO')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'
                    >
                        Portfolio
                    </motion.h1>
                    <img src={PolygonBlue} alt="" className='absolute top-0 z-[-30] w-96 right-0'/>
                </div>
            ) : (
                <motion.section 
                key="portfolio"
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }} 
                transition={{ duration: 1 }}
                className='relative h-full'>
                    <div className='px-6 text-right hover:cursor-pointer w-full place-self-end'>
                        <h1 onMouseDown={() => toggleOpen('PORTFOLIO')} className='font-Gentle tracking-widest text-5xl hover:tracking-normal '>Portfolio</h1>
                    </div>
                    <article className=' px-6 pb-10'>
                        <PortfolioContent />
                    </article>
                    <img src={PolygonBlue} alt="" className='absolute top-0 z-[-30] w-full right-0'/>
                </motion.section>
            )}
        </main>
        ) : (
            <main className='flex flex-col h-full place-content-center relative'>

                <div className="text-right px-6 hover:cursor-pointer place-self-end relative w-full">
                    
                    <motion.h1 
                        onMouseDown={() => toggleOpen('ABOUT')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        About
                    </motion.h1>
                    <motion.img src={PolygonRed} alt="" className='absolute bottom-0 z-[-1] w-96 right-0 ' 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        />
                </div>
          
            
                <div className="text-right px-6 hover:cursor-pointer  place-self-end relative w-full">
                    <motion.h1 
                        onMouseDown={() => toggleOpen('SKILLS')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest z-20'
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, delay: 1.25 }}
                    >
                        Skills
                    </motion.h1>
                    <motion.img src={PolygonGreen} alt="" className='absolute bottom-0 z-[-50] w-44 right-0 '
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, delay: 0.75 }}
                    />
                </div>
            
                <div className="text-right px-6 hover:cursor-pointer place-self-end relative w-full">
                    <motion.h1 
                        onMouseDown={() => toggleOpen('PORTFOLIO')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'   
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        Portfolio
                    </motion.h1>
                    <motion.img src={PolygonBlue} alt="" className='absolute top-0 z-[-50] w-80 bottom-0 right-0'
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, delay: 1 }}
                    />
                </div>
           
        </main>
        )}

       </>
    )
}
import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {AboutContent} from '../content/aboutContent'
import {SkillsContent} from '../content/skillsContent'
import {PortfolioContent} from '../content/portfolioContent'


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
                <div className="text-right px-6 backdrop-blur-sm bg-gradient-radial hover:cursor-pointer max-w-xl place-self-end relative">
                    <motion.h1 
                        onMouseDown={() => toggleOpen('ABOUT')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'
                    >
                        About
                    </motion.h1>
                </div>
            ) : (
                <section>
                    <div className='px-6 text-right hover:cursor-pointer max-w-xl place-self-end relative '>
                        <h1 onMouseDown={() => toggleOpen('ABOUT')} className='font-Gentle tracking-widest hover:tracking-normal text-5xl '>About</h1>
                    </div>
                    <article className=' px-6 pb-10'>
                        <AboutContent />
                    </article>
                </section>
            )}
             {!skills ? (
                <div className="text-right px-6 backdrop-blur-sm bg-gradient-radial hover:cursor-pointer max-w-xl place-self-end">
                    <motion.h1 
                        onMouseDown={() => toggleOpen('SKILLS')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'
                        
                    >
                        Skills
                    </motion.h1>
                </div>
            ) : (
                <section>
                    <div className='px-6 text-right hover:cursor-pointer max-w-xl place-self-end top-3'>
                        <h1 onMouseDown={() => toggleOpen('SKILLS')} className='font-Gentle tracking-widest text-5xl hover:tracking-normal'>Skills</h1>
                    </div>
                    <article className=' px-6 pb-10'>
                        <SkillsContent />
                    </article>
                </section>
            )}
             {!portfolio ? (
                <div className="text-right px-6 backdrop-blur-sm bg-gradient-radial hover:cursor-pointer max-w-xl place-self-end">
                    <motion.h1 
                        onMouseDown={() => toggleOpen('PORTFOLIO')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'
                    >
                        Portfolio
                    </motion.h1>
                </div>
            ) : (
                <section>
                    <div className='px-6 text-right hover:cursor-pointer max-w-xl place-self-end'>
                        <h1 onMouseDown={() => toggleOpen('PORTFOLIO')} className='font-Gentle tracking-widest text-5xl hover:tracking-normal '>Portfolio</h1>
                    </div>
                    <article className=' px-6 pb-10'>
                        <PortfolioContent />
                    </article>
                </section>
            )}
        </main>
        ) : (
            <main className='flex flex-col h-full place-content-center relative'>

                <div className="text-right px-6 backdrop-blur-sm bg-gradient-radial hover:cursor-pointer max-w-xl place-self-end relative">
                    <motion.h1 
                        onMouseDown={() => toggleOpen('ABOUT')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'
                    >
                        About
                    </motion.h1>
                </div>
          
            
                <div className="text-right px-6 backdrop-blur-sm bg-gradient-radial hover:cursor-pointer max-w-xl place-self-end">
                    <motion.h1 
                        onMouseDown={() => toggleOpen('SKILLS')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'
                    >
                        Skills
                    </motion.h1>
                </div>
            
                <div className="text-right px-6 backdrop-blur-sm bg-gradient-radial hover:cursor-pointer max-w-xl place-self-end">
                    <motion.h1 
                        onMouseDown={() => toggleOpen('PORTFOLIO')} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'   
                    >
                        Portfolio
                    </motion.h1>
                </div>
           
        </main>
        )}

       </>
    )
}
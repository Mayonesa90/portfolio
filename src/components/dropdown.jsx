import {useState} from 'react'
import {motion} from 'framer-motion'


export function DropDown({title, content}) {

    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }
    

    return (
        <>
            {!open ? (
                <div
                
                className="text-right px-6 backdrop-blur-sm bg-gradient-radial hover:cursor-pointer"
              >
                    <motion.h1 
                        onMouseDown={toggleOpen} 
                        className='hover:font-thin text-right font-Gentle text-5xl hover:tracking-widest'
                        
                    >
                        {title}
                    </motion.h1>
                </div>
            ) : (
                <>
                 <div
                    className='px-6 text-right hover:cursor-pointer'
                >
                    <h1 onMouseDown={toggleOpen} className='font-Gentle tracking-widest text-5xl '>{title}</h1>
                </div>
                <div className=' px-6 pb-10'>
                    {content}
                </div>
                </>
            )}
        </>
    )
}
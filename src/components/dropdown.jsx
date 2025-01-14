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
                
                className="text-right px-6 backdrop-blur-sm bg-gradient-radial"
              >
                    <motion.h1 
                        onMouseDown={toggleOpen} 
                        className='hover:font-thin text-right italic font-work-sans-semi-bold text-5xl hover:cursor-pointer'
                        
                    >
                        {title}
                    </motion.h1>
                </div>
            ) : (
                <>
                 <div
                    className='px-6 text-right'
                >
                    <h1 onMouseDown={toggleOpen} className='italic font-work-sans-thin text-5xl hover:cursor-pointer'>{title}</h1>
                </div>
                <div className=' px-6 pb-10'>
                    {content}
                </div>
                </>
            )}
        </>
    )
}
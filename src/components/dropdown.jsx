import {useState} from 'react'


export function DropDown({title, content}){

    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            {!open ? (
                <div className='text-right px-6 backdrop-blur-sm bg-gradient-radial'>
                    <h1 onMouseDown={toggleOpen} className='text-right italic font-work-sans-semi-bold text-5xl hover:cursor-pointer'>{title}</h1>
                </div>
            ) : (
                <>
                <div className='px-6 text-right'>
                    <h1 onMouseDown={toggleOpen} className='italic font-work-sans-semi-bold text-5xl hover:cursor-pointer'>{title}</h1>
                </div>
                <div className=' px-6 pb-10'>
                    {content}
                </div>
                </>
            )}
        </>
    )
}
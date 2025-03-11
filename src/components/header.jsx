import Name from '../assets/name.svg'

export function Header(){
    return (
        <header className='z-50 flex flex-col flex-wrap pt-10 sticky top-0 w-full items-center backdrop-blur-sm'>
            <div className='flex flex-col flex-grow-0 '>
                {/* <img src={Name} alt="Maya Arzapalo Björklund" className='max-w-96 stroke-animation' /> */}
                <h1 className='font-Gentle text-6xl'>Maya Arzapalo Björklund</h1>
            </div>
        </header>
    )
}
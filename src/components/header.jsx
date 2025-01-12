import Name from '../assets/name.svg'

export function Header(){
    return (
        <header className='flex flex-col flex-wrap pt-10 sticky top-0 w-full items-center backdrop-blur-sm'>
            <div className='flex flex-col flex-grow-0 '>
                <img src={Name} alt="Maya Arzapalo Björklund" className='max-w-96' />
            </div>
        </header>
    )
}
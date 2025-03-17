
export function Header(){
    return (
        <header className='z-50 flex flex-col flex-wrap top-5 w-fit items-center px-5 sticky'>
            <section className='flex flex-col w-full'>
                <h1 className='font-Gentle text-6xl max-w-sm leading-[3rem] tracking-tight'>Maya Arzapalo Björklund</h1>
                <section className="text-center">
                    <h2 className="italic font-Lato-Italic opacity-75 font-extra-bold text-xl tracking-tight">FRONTEND DEVELOPER</h2>
                    <p className="font-Lato text-black opacity-65 text-center ml-16">(with backend skills)</p>
                </section>
            </section>
        </header>
    )
}
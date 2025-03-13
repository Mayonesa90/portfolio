
export function Header(){
    return (
        <header className='z-50 flex flex-col flex-wrap top-5 w-fit items-center px-5 sticky'>
            <section className='flex flex-col w-full'>
                <h1 className='font-Gentle text-6xl max-w-sm'>Maya Arzapalo Björklund</h1>
                <section className="text-left">
                    <h2 className="italic font-Kollektif-BoldItalic text-xl tracking-wider">FRONTEND DEVELOPER</h2>
                    <p className="italic font-Kollektif text-gray">(with backend skills)</p>
                </section>
            </section>
        </header>
    )
}
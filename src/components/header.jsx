import { Mailbox } from "./mailbox"
export function Header(){
    return (
        <header className='z-50git flex flex-wrap top-0 pt-5 px-5 sticky justify-between bg-[#fbfbfb]'>
            <section className='flex flex-col sm-custom:w-fit'>
                <h1 className='font-Gentle w-min text-3xl sm-custom:text-6xl max-w-sm leading-6 sm-custom:leading-[3rem] tracking-tight'>Maya Arzapalo Björklund</h1>
                <section className="text-center leading-3">
                    <h2 className="text-right italic font-Lato-Italic opacity-75 font-extra-bold text-sm sm-custom:text-xl tracking-tight">FRONTEND DEVELOPER</h2>
                    <p className="font-Lato text-black opacity-65 text-center ml-16 text-xs sm-custom:text-lg">(with backend skills)</p>
                </section>
            </section>
            <Mailbox />
        </header>
    )
}
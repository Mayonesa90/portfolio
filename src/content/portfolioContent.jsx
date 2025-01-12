import { ImgToVid } from '../components/imgToVid'
import FlexboxManiaImg from '../assets/01flexboxmania-img.png'
import FlexboxManiaVid from '../assets/01flexboxmania-vid.mp4'

export function PortfolioContent(){
    return(
        <div className="flex flex-col">
            <h1 className=" tracking-widest my-6 text-center text-shadow text-pink  font-light  text-3xl">SCHOOL PROJECTS</h1>
            <ImgToVid img={FlexboxManiaImg} vid={FlexboxManiaVid}/>
            <article className='flex flex-col gap-2 mt-4'>
                <section className='flex gap-1'>
                    <h2 className=' tracking-widest lg:w-[25%] md:w-[25%] text-sm text-right'>
                        TITLE:
                    </h2>
                    <p className=' text-base font-semibold italic md:w-[75%] lg:w-[75%]'>
                        Flexbox mania
                    </p>
                </section>
                <section className='flex gap-1'>
                    <h2 className=' tracking-widest lg:w-[25%] md:w-[25%] text-sm text-right '>
                        COURSE:
                    </h2>
                    <p className=' text-base font-semibold md:w-[75%] lg:w-[75%]'>
                        HTML/CSS
                    </p>
                </section>
                <section className='flex gap-1 '>
                    <h2 className=' tracking-widest lg:w-[25%] md:w-[25%] text-sm text-right'>
                        DESCRIPTION:
                    </h2>
                    <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-balance'> 
                        Individual examination project in HTML/CSS. A simple responsive shopping page. Design by sketch.
                    </p>
                </section>
                <section className='flex gap-1'>
                    <h2 className=' tracking-widestlg:w-[25%] md:w-[25%] text-sm text-right'>
                        TECHNIQUES:
                    </h2>
                    <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-balance'>
                        Flexbox, Keyframes, HTML, CSS
                    </p>
                </section>
                <section className='flex gap-1'>
                    <h2 className=' tracking-widest lg:w-[25%] md:w-[25%] text-sm text-right'>
                        REPOSITORY:
                    </h2>
                    <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-balance'>
                        https://github.com/Mayonesa90/Maya-Arzapalo-Bjorklund_FU-FE23_individuell-examination
                    </p>
                </section>
            </article>
        </div>
    )
}


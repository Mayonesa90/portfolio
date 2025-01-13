import { ImgToVid } from '../components/imgToVid'
import FlexboxManiaImg from '../assets/01flexboxmania-img.png'
import FlexboxManiaVid from '../assets/01flexboxmania-vid.mp4'

export function PortfolioContent(){
    return(
        <div className="flex flex-col items-center">
            <h1 className=" tracking-widest my-6 text-center text-shadow text-pink  font-light  text-3xl">SCHOOL PROJECTS</h1>
            <ImgToVid img={FlexboxManiaImg} vid={FlexboxManiaVid}/>
            <article className='flex flex-col gap-2 mt-4 max-w-xl'>
                <section className='flex gap-1 flex-col sm-custom:flex-row'>
                    <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                        TITLE:
                    </h2>
                    <p className=' text-base font-semibold italic md:w-[75%] lg:w-[75%] text-pretty '>
                        Flexbox mania
                    </p>
                </section>
                <section className='flex gap-1 flex-col sm-custom:flex-row'>
                    <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm  '>
                        COURSE:
                    </h2>
                    <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        HTML/CSS
                    </p>
                </section>
                <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                    <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                        DESCRIPTION:
                    </h2>
                    <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'> 
                        Individual examination project in HTML/CSS. A simple responsive shopping page. Design by sketch.
                    </p>
                </section>
                <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                    <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                        TECHNIQUES:
                    </h2>
                    <p className='text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        Flexbox, Keyframes, HTML, CSS
                    </p>
                </section>
                <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                    <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                        REPOSITORY:
                    </h2>
                    <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        https://github.com/Mayonesa90/Maya-Arzapalo-Bjorklund_FU-FE23_individuell-examination
                    </p>
                </section>
            </article>
        </div>
    )
}


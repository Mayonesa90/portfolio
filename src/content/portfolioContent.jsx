import { ImgToVid } from '../components/imgToVid'
import FlexboxManiaImg from '../assets/01flexboxmania-img.png'
import FlexboxManiaVid from '../assets/01flexboxmania-vid.mp4'
import SolarisImg from '../assets/02solaris-img.png'
import SolarisVid from '../assets/02solaris-vid.mp4'
import ReactifiedResumeImg from '../assets/03reactifiedresume-img.png'
import ReactifiedResumeVid from '../assets/03reactifiedresume-vid.mp4'
import JustPostItImg from '../assets/04justpostit-img.png'
import JustPostItVid from '../assets/04justpostit-vid.mp4'
import IntervalImg from '../assets/05interval-img.png'
import IntervalVid from '../assets/05interval-vid.mp4'
import StrajkImg from '../assets/06strajk-img.png'
import StrajkVid from '../assets/06strajk-vid.mp4'
import FourElementsImg from '../assets/07fourelements-img.png'
import FourElementsVid from '../assets/07fourelements-vid.mp4'
import HogwartsLoginImg from '../assets/08hogwartslogin-img.png'
import HogwartsLoginVid from '../assets/08hogwartslogin-vid.mp4'
import MyPageImg from '../assets/09mypage-img.png'
import MyPageVid from '../assets/09mypage-vid.mp4'

export function PortfolioContent(){
    return(
        <div className="flex flex-col items-center gap-10">
            <h1 className=" tracking-widest my-6 text-center text-shadow text-pink  font-light  text-3xl">SCHOOL PROJECTS</h1>
            <div className='flex flex-col'>
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
            <div className='flex flex-col'>
            <ImgToVid img={SolarisImg} vid={SolarisVid}/>
                <article className='flex flex-col gap-2 mt-4 max-w-xl'>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            TITLE:
                        </h2>
                        <p className=' text-base font-semibold italic md:w-[75%] lg:w-[75%] text-pretty '>
                            Solaris
                        </p>
                    </section>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm  '>
                            COURSE:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                            Javascript
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            DESCRIPTION:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'> 
                        Individual examination project in Javascript. A page displaying the planets in our solar system, information fetched from API.
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            TECHNIQUES:
                        </h2>
                        <p className='text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        HTML, CSS, Vanilla javascript, fetch data from API, Keyframes, Flexbox
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            REPOSITORY:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        https://github.com/Mayonesa90/Solaris
                        </p>
                    </section>
                </article>
            </div>
            <div className='flex flex-col'>
            <ImgToVid img={ReactifiedResumeImg} vid={ReactifiedResumeVid}/>
                <article className='flex flex-col gap-2 mt-4 max-w-xl'>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            TITLE:
                        </h2>
                        <p className=' text-base font-semibold italic md:w-[75%] lg:w-[75%] text-pretty '>
                            Reactified Resume
                        </p>
                    </section>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm  '>
                            COURSE:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                            Frameworks/React
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            DESCRIPTION:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'> 
                        Individual examination project in frameworks course. Single page application that acts like a resume, portfolio fetches my repositories from Github with API. It also has a dark mode button. Design by me.                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            TECHNIQUES:
                        </h2>
                        <p className='text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        React, Vite, TailwindCSS, React Router Dom, Redux                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            REPOSITORY:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        https://github.com/Mayonesa90/reactified-resume
                        </p>
                    </section>
                </article>
            </div>
            <div className='flex flex-col'>
            <ImgToVid img={HogwartsLoginImg} vid={HogwartsLoginVid}/>
                <article className='flex flex-col gap-2 mt-4 max-w-xl'>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            TITLE:
                        </h2>
                        <p className=' text-base font-semibold italic md:w-[75%] lg:w-[75%] text-pretty '>
                            Hogwarts login
                        </p>
                    </section>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm  '>
                            COURSE:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                            Web server programming (PHP)
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            DESCRIPTION:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'> 
                        Individual examination project in course PHP. A simple login-page with security measures.                    
                        </p>
                        </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            TECHNIQUES:
                        </h2>
                        <p className='text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        PHP, AMPPS, MySQL, Apache, Docker, Composer                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            REPOSITORY:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        https://github.com/Mayonesa90/Hogwarts-PHP-login
                        </p>
                    </section>
                </article>
            </div>
            <div className='flex flex-col'>
            <ImgToVid img={JustPostItImg} vid={JustPostItVid}/>
                <article className='flex flex-col gap-2 mt-4 max-w-xl'>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            TITLE:
                        </h2>
                        <p className=' text-base font-semibold italic md:w-[75%] lg:w-[75%] text-pretty '>
                            Just Post It
                        </p>
                    </section>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm  '>
                            COURSE:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        Cloud environment 
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            DESCRIPTION:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'> 
                        Individual examination fullstack-project in cloud environment course. Single page application where the user can post a note, delete or modify the note, sort notes by date or username. Design by me.                         </p>
                        </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            TECHNIQUES:
                        </h2>
                        <p className='text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        React, Vite, TailwindCSS, React Router Dom, Redux, AWS-Lambda, AWS-DynamoDB, AWS-S3                    
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            REPOSITORY:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        https://github.com/Mayonesa90/just-post-it                        </p>
                    </section>
                </article>
            </div>
            <div className='flex flex-col'>
            <ImgToVid img={IntervalImg} vid={IntervalVid}/>
                <article className='flex flex-col gap-2 mt-4 max-w-xl'>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            TITLE:
                        </h2>
                        <p className=' text-base font-semibold italic md:w-[75%] lg:w-[75%] text-pretty '>
                            Interval
                        </p>
                    </section>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm  '>
                            COURSE:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        UI/UX
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            DESCRIPTION:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'> 
                        Individual examination project in UI/UX. Timer app that includes an interval option. Focus on UX to enhance the experience. Design from sketch.
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            TECHNIQUES:
                        </h2>
                        <p className='text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        React, Vite, React-Router, TailwindCSS, Framer-Motion, Easytimer                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            REPOSITORY:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        https://github.com/Mayonesa90/timer-app                     
                        </p>
                    </section>
                </article>
            </div>
            <div className='flex flex-col'>
            <ImgToVid img={StrajkImg} vid={StrajkVid}/>
                <article className='flex flex-col gap-2 mt-4 max-w-xl'>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            TITLE:
                        </h2>
                        <p className=' text-base font-semibold italic md:w-[75%] lg:w-[75%] text-pretty '>
                            Strajk
                        </p>
                    </section>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm  '>
                            COURSE:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        Fullstack with Typescript
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            DESCRIPTION:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'> 
                        Individual examination project in course Fullstack with Typescript. Booking app for bowling. With this single page application the user can book a day and time to bowl, the application has error handling so that the number of bowlers doesn’t exceed number of lanes.
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            TECHNIQUES:
                        </h2>
                        <p className='text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        React, Vite, React-Router, TailwindCSS, Framer-Motion, Zustand, Typescript                    
                        </p>    
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            REPOSITORY:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        https://github.com/Mayonesa90/STRAJK                  
                        </p>
                    </section>
                </article>
            </div>
            <div className='flex flex-col'>
            <ImgToVid img={FourElementsImg} vid={FourElementsVid}/>
                <article className='flex flex-col gap-2 mt-4 max-w-xl'>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            TITLE:
                        </h2>
                        <p className=' text-base font-semibold italic md:w-[75%] lg:w-[75%] text-pretty '>
                            Four Elements
                        </p>
                    </section>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm  '>
                            COURSE:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        Fullstack with Typescript
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            DESCRIPTION:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'> 
                        Group examination project in course Fullstack with Typescript. App to order food from take-away restaurant. With this single page application the user can make an order and receive a confirmation, or create an account and save the order to order history. The staff needs to login to view and manage the order. Inventory is checked before and updated after order.                        
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            TECHNIQUES:
                        </h2>
                        <p className='text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        React, Vite, React-Router, TailwindCSS, Typescript, React Router Dom, Framer-motion, AWS-DynamoDB, AWS-S3, Middy, Bcrypt, Jsonwebtoken, Uuid                        </p>    
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            REPOSITORY:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        https://github.com/4E-Four-Elements-Project                
                        </p>
                    </section>
                </article>
            </div>
            <h1 className=" tracking-widest my-6 text-center text-shadow text-pink  font-light  text-3xl">PRIVATE PROJECTS</h1>
            <div className='flex flex-col'>
            <ImgToVid img={MyPageImg} vid={MyPageVid}/>
                <article className='flex flex-col gap-2 mt-4 max-w-xl'>
                    <section className='flex gap-1 flex-col sm-custom:flex-row'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            TITLE:
                        </h2>
                        <p className=' text-base font-semibold italic md:w-[75%] lg:w-[75%] text-pretty '>
                            My Page
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            DESCRIPTION:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'> 
                        A digital buisness card.
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm'>
                            TECHNIQUES:
                        </h2>
                        <p className='text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        Html, CSS and Vanilla javascript, Keyframes
                        </p>    
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            REPOSITORY:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        https://github.com/Mayonesa90/myPage
                        </p>
                    </section>
                    <section className='flex gap-1 flex-wrap sm-custom:flex-nowrap'>
                        <h2 className='w-28 tracking-widest lg:w-[25%] md:w-[25%] text-sm '>
                            LIVE:
                        </h2>
                        <p className=' text-base font-semibold md:w-[75%] lg:w-[75%] text-pretty'>
                        https://mayosite.netlify.app/    
                        </p>
                    </section>
                </article>
            </div>
        </div>
    )
}


import { useState, useEffect } from "react";
import { Tag } from "../components/Tag";
import { SlideShow } from "../components/slideShow";
import { AnimatePresence, motion } from "motion/react";

import ReactifiedResume1 from '../assets/portfolio/01-reactified-resume/Skärmavbild 2025-03-19 kl. 12.53.37.png';
import ReactifiedResume2 from '../assets/portfolio/01-reactified-resume/Skärmavbild 2025-03-19 kl. 12.54.13.png';
import ReactifiedResume3 from '../assets/portfolio/01-reactified-resume/Skärmavbild 2025-03-19 kl. 12.54.20.png';
import ReactifiedResume4 from '../assets/portfolio/01-reactified-resume/Skärmavbild 2025-03-19 kl. 12.54.23.png';
import JustPostIt1 from '../assets/portfolio/02-just-post-it/Skärmavbild 2025-03-19 kl. 15.06.36.png';
import JustPostIt2 from '../assets/portfolio/02-just-post-it/Skärmavbild 2025-03-19 kl. 15.06.51.png';
import JustPostIt3 from '../assets/portfolio/02-just-post-it/Skärmavbild 2025-03-19 kl. 15.07.03.png';
import JustPostIt4 from '../assets/portfolio/02-just-post-it/Skärmavbild 2025-03-19 kl. 15.09.16.png';
import GryffindorLogin1 from '../assets/portfolio/03-gryffindor-login/Skärmavbild 2025-03-19 kl. 15.41.18.png';
import GryffindorLogin2 from '../assets/portfolio/03-gryffindor-login/Skärmavbild 2025-03-19 kl. 15.41.35.png';
import GryffindorLogin3 from '../assets/portfolio/03-gryffindor-login/Skärmavbild 2025-03-19 kl. 15.41.40.png';
import GryffindorLogin4 from '../assets/portfolio/03-gryffindor-login/Skärmavbild 2025-03-19 kl. 15.41.43.png';
import Interval1 from '../assets/portfolio/04-interval/Skärmavbild 2025-03-19 kl. 16.00.51.png';
import Interval2 from '../assets/portfolio/04-interval/Skärmavbild 2025-03-19 kl. 15.57.20.png';
import Interval3 from '../assets/portfolio/04-interval/Skärmavbild 2025-03-19 kl. 15.58.00.png';
import Interval4 from '../assets/portfolio/04-interval/Skärmavbild 2025-03-19 kl. 15.58.51.png';
import Interval5 from '../assets/portfolio/04-interval/Skärmavbild 2025-03-19 kl. 15.59.17.png';
import Interval6 from '../assets/portfolio/04-interval/Skärmavbild 2025-03-19 kl. 15.59.32.png';
import Strajk1 from '../assets/portfolio/05-strajk/Skärmavbild 2025-03-19 kl. 16.11.35.png';
import Strajk2 from '../assets/portfolio/05-strajk/Skärmavbild 2025-03-19 kl. 16.11.43.png';
import Strajk3 from '../assets/portfolio/05-strajk/Skärmavbild 2025-03-19 kl. 16.11.43.png';
import Strajk4 from '../assets/portfolio/05-strajk/Skärmavbild 2025-03-19 kl. 16.12.47.png';
import LarDigTecken1 from '../assets/portfolio/06-lar-dig-tecken/Skärmavbild 2025-03-19 kl. 16.22.29.png';
import LarDigTecken2 from '../assets/portfolio/06-lar-dig-tecken/Skärmavbild 2025-03-19 kl. 16.22.54.png';
import LarDigTecken3 from '../assets/portfolio/06-lar-dig-tecken/Skärmavbild 2025-03-19 kl. 16.23.06.png';
import LarDigTecken4 from '../assets/portfolio/06-lar-dig-tecken/Skärmavbild 2025-03-19 kl. 16.23.29.png';
import LarDigTecken5 from '../assets/portfolio/06-lar-dig-tecken/Skärmavbild 2025-03-19 kl. 16.24.18.png';
import LarDigTecken6 from '../assets/portfolio/06-lar-dig-tecken/Skärmavbild 2025-03-19 kl. 16.24.31.png';
import MyPage1 from '../assets/portfolio/07-myPage/Skärmavbild 2025-03-19 kl. 16.48.17.png';
import MyPage2 from '../assets/portfolio/07-myPage/Skärmavbild 2025-03-19 kl. 16.48.34.png';
import FourElements1 from '../assets/portfolio/08-four-elements/Skärmavbild 2025-03-19 kl. 18.46.46.png';
import FourElements2 from '../assets/portfolio/08-four-elements/Skärmavbild 2025-03-19 kl. 18.46.57.png';
import FourElements3 from '../assets/portfolio/08-four-elements/Skärmavbild 2025-03-19 kl. 18.48.39.png';
import FourElements4 from '../assets/portfolio/08-four-elements/Skärmavbild 2025-03-19 kl. 18.48.48.png';
import FourElements5 from '../assets/portfolio/08-four-elements/Skärmavbild 2025-03-19 kl. 18.50.04.png';
import FourElements6 from '../assets/portfolio/08-four-elements/Skärmavbild 2025-03-19 kl. 18.50.13.png';
import FourElements7 from '../assets/portfolio/08-four-elements/Skärmavbild 2025-03-19 kl. 18.50.37.png';
import FourElements8 from '../assets/portfolio/08-four-elements/Skärmavbild 2025-03-19 kl. 18.51.28.png';
import FourElements9 from '../assets/portfolio/08-four-elements/Skärmavbild 2025-03-19 kl. 18.53.26.png';
import FourElements10 from '../assets/portfolio/08-four-elements/Skärmavbild 2025-03-19 kl. 18.53.58.png';

const reactifiedImages = [
    ReactifiedResume1,
    ReactifiedResume2,
    ReactifiedResume3,
    ReactifiedResume4
  ];

const justPostItImages = [
    JustPostIt1,
    JustPostIt2,
    JustPostIt3,
    JustPostIt4
  ];

const gryffindorImages = [
    GryffindorLogin1,
    GryffindorLogin2,
    GryffindorLogin3,
    GryffindorLogin4
  ];

const intervalImages = [
    Interval1,
    Interval2,
    Interval3,
    Interval4,
    Interval5,
    Interval6
  ];

const strajkImages = [
    Strajk1,
    Strajk2,
    Strajk3,
    Strajk4
  ];

const larDigTeckenImages = [
    LarDigTecken1,
    LarDigTecken2,
    LarDigTecken3,
    LarDigTecken4,
    LarDigTecken5,
    LarDigTecken6
  ];

const myPageImages = [
    MyPage1,
    MyPage2
  ];

const fourElementsImages = [
    FourElements1,
    FourElements2,
    FourElements3,
    FourElements4,
    FourElements5,
    FourElements6,
    FourElements7,
    FourElements8,
    FourElements9,
    FourElements10
  ];

export function Portfolio2Content() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // const containerVariants = {
    //     hidden: { opacity: 0 },
    //     visible: { 
    //         opacity: 1,
    //         transition: { 
    //             staggerChildren: 1 // Adjust this value for more/less delay between children
    //         }
    //     }
    // };
    
    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    
    return (
        <main className={`no-scrollbar flex flex-col font-Lato gap-y-10 max-w-screen-xl-custom overflow-y-scroll ${isMobile ? 'pb-40' : 'pb-0'}`}>
            <AnimatePresence>
            
            <motion.section 
                key={"portfolio-header"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col-reverse md-custom:flex-row flex-nowrap gap-5"
            >
                <article className={`flex flex-1 flex-col gap-3 min-w-80 self-start ${!isMobile ? 'self-start' : 'self-end'}`}>
                    <h2 className="font-Lato italic font-extra-bold text-lg">LÄR DIG TECKEN</h2>
                    <p className="text-sm">Angular protype for card game to learn TAKK,user can adjust a lot of setting like which type of image or video they want to use, how many cards to play with and witch category. When the user select the wrong card a the frame changes color and a voice says &quot;Try again&quot;, when the user pics the right card the frame changes to green.</p>
                    <footer className="flex gap-2 justify-end  mb-5 flex-wrap">
                        <Tag title="Angular" />
                        <Tag title="Typescript" />
                        <Tag title="NGXS" />
                        <Tag title="TailwindCSS" />
                    </footer>
                </article>

            {!isMobile
            ? <section className="grid grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg-custom flex-2">
                <img src={LarDigTecken1} alt="" />
                <img src={LarDigTecken2} alt="" />
                <img src={LarDigTecken3} alt="" />
                <img src={LarDigTecken4} alt="" />
                <img src={LarDigTecken5} alt="" />
                <img src={LarDigTecken6} alt="" />
              </section> 
            
            : <SlideShow images={larDigTeckenImages} />}
                
            </motion.section>

            <motion.section 
                key={"four-elements"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col-reverse md-custom:flex-row flex-nowrap gap-5"
            >
                <article className={`flex flex-1 flex-col gap-3 min-w-80 self-start ${!isMobile ? 'self-start' : 'self-end'}`}>
                    <h2 className="font-Lato italic font-extra-bold text-lg">FOUR ELEMENTS</h2>
                    <p className="text-sm">SPA for users to make, edit and delete orders with or without an account. Staff can add, edit and delete items from menu and process the order before sending it to the chefs.</p>
                    <footer className="flex gap-2 justify-end  mb-5 flex-wrap">
                        <Tag title="React" />
                        <Tag title="Vite" />
                        <Tag title="Typescript" />
                        <Tag title="React Ruter" />
                        <Tag title="TailwindCSS" />
                        <Tag title="Motion" />
                        <Tag title="AWS DynamoDB" />
                        <Tag title="AWS Lambda" /> 
                        <Tag title="AWS S3" />
                        <Tag title="JWT" />
                        <Tag title="BCrypt" />
                        <Tag title="UUID" />
                        <Tag title="Serverless" />
                        <Tag title="Validation" />
                    </footer>
                </article>

            {!isMobile
            ? <section className="grid grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg-custom flex-2">
                <img src={FourElements1} alt="" />
                <img src={FourElements2} alt="" />
                <img src={FourElements3} alt="" />
                <img src={FourElements4} alt="" />
                <img src={FourElements5} alt="" />
                <img src={FourElements6} alt="" />
                <img src={FourElements7} alt="" />
                <img src={FourElements8} alt="" />
                <img src={FourElements9} alt="" />
                <img src={FourElements10} alt="" />
              </section> 
            
            : <SlideShow images={fourElementsImages} />}
                
            </motion.section>

            <motion.section 
                key={"gryffindor-login"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1}}
                className="flex flex-col-reverse md-custom:flex-row flex-nowrap gap-5"
            >
                <article className={`flex flex-1 flex-col gap-3 min-w-80 self-start ${!isMobile ? 'self-start' : 'self-end'}`}>
                    <h2 className="font-Lato italic font-extra-bold text-lg">GRYFFINDOR LOGIN</h2>
                    <p className="text-sm">
                        PHP login page with validation, error handling and session management. MySQL database for user information.
                    </p>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Mayonesa90/Hogwarts-PHP-login"
                        className="self-end w-fit text-blue-500 hover:underline hover:cursor-pointer bold text-sm"
                    >
                            GitHub repo
                    </a>
                    <footer className="flex gap-2 justify-end  mb-5 flex-wrap">
                        <Tag title="PHP" />
                        <Tag title="MySQL" />
                        <Tag title="AMPPS" />
                    </footer>
                </article>

            {!isMobile
            ? <section className="grid grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg-custom flex-2">
                <img src={GryffindorLogin1} alt="" />
                <img src={GryffindorLogin2} alt="" />
                <img src={GryffindorLogin3} alt="" />
                <img src={GryffindorLogin4} alt="" />
              </section> 
            
            : <SlideShow images={gryffindorImages} />}
                
            </motion.section>

            <motion.section 
                key={"just-post-it"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col-reverse md-custom:flex-row flex-nowrap gap-5"
            >
                <article className={`flex flex-1 flex-col gap-3 min-w-80 self-start ${!isMobile ? 'self-start' : 'self-end'}`}>
                    <h2 className="font-Lato italic font-extra-bold text-lg">JUST POST IT</h2>
                    <p className="text-sm">Frontend: SPA where user can add, modify and delete notes, sort them by date or time.
                    Backend: Databases built with DynamoDB, Lambda function to get, post, put and delete notes. Validation for input and error handling.
                    </p>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Mayonesa90/just-post-it"
                        className="self-end w-fit text-blue-500 hover:underline hover:cursor-pointer bold text-sm"
                    >
                            GitHub repo
                    </a>
                    <footer className="flex gap-2 justify-end  mb-5 flex-wrap">
                        <Tag title="React" />
                        <Tag title="Vite" />
                        <Tag title="TailwindCSS" />
                        <Tag title="API" />
                        <Tag title="React Router" />
                        <Tag title="AWS S3" />
                        <Tag title="AWS Lambda" />
                        <Tag title="DynamoDB" />
                        <Tag title="UUID" />
                        <Tag title="Serverless" />
                    </footer>
                </article>

            {!isMobile
            ? <section className="grid grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg-custom flex-2">
                <img src={JustPostIt1} alt="" />
                <img src={JustPostIt2} alt="" />
                <img src={JustPostIt3} alt="" />
                <img src={JustPostIt4} alt="" />
              </section> 
            
            : <SlideShow images={justPostItImages} />}
                
            </motion.section>

            <motion.section 
                key={"interval"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col-reverse md-custom:flex-row flex-nowrap gap-5"
            >
                <article className={`flex flex-1 flex-col gap-3 min-w-80 self-start ${!isMobile ? 'self-start' : 'self-end'}`}>
                    <h2 className="font-Lato italic font-extra-bold text-lg">INTERVAL</h2>
                    <p className="text-sm">SPA for interval timing, user can set timer with intervals, background color chanages as time progresses.</p>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Mayonesa90/timer-app "
                        className="self-end w-fit text-blue-500 hover:underline hover:cursor-pointer bold text-sm"
                    >
                            GitHub repo
                    </a>
                    <footer className="flex gap-2 justify-end  mb-5 flex-wrap">
                        <Tag title="React" />
                        <Tag title="Vite" />
                        <Tag title="TailwindCSS" />
                        <Tag title="React Router" />
                        <Tag title="Easytimer" />
                        <Tag title="Framer Motion" />
                    </footer>
                </article>

            {!isMobile
            ? <section className="grid grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg-custom flex-2">
                <img src={Interval1} alt="" />
                <img src={Interval2} alt="" />
                <img src={Interval3} alt="" />
                <img src={Interval4} alt="" />
                <img src={Interval5} alt="" />
                <img src={Interval6} alt="" />
              </section> 
            
            : <SlideShow images={intervalImages} />}
                
            </motion.section>

            <motion.section 
                key={"strajk"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col-reverse md-custom:flex-row flex-nowrap gap-5"
            >
                <article className={`flex flex-1 flex-col gap-3 min-w-80 self-start ${!isMobile ? 'self-start' : 'self-end'}`}>
                    <h2 className="font-Lato italic font-extra-bold text-lg">STRAJK</h2>
                    <p className="text-sm">SPA for booking bowling lane with error handling and confirmation</p>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Mayonesa90/STRAJK   "
                        className="self-end w-fit text-blue-500 hover:underline hover:cursor-pointer bold text-sm"
                    >
                            GitHub repo
                    </a>
                    <footer className="flex gap-2 justify-end  mb-5 flex-wrap">
                        <Tag title="React" />
                        <Tag title="Typescript" />
                        <Tag title="Vite" />
                        <Tag title="TailwindCSS" />
                        <Tag title="React Router" />
                        <Tag title="Zustand" />
                        <Tag title="Framer Motion" />
                    </footer>
                </article>

            {!isMobile
            ? <section className="grid grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg-custom flex-2">
                <img src={Strajk1} alt="" />
                <img src={Strajk2} alt="" />
                <img src={Strajk3} alt="" />
                <img src={Strajk4} alt="" />
              </section> 
            
            : <SlideShow images={strajkImages} />}
                
            </motion.section>

            <motion.section 
                key={"reactified-resume"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col-reverse md-custom:flex-row flex-nowrap gap-5"
            >
                <article className={`flex flex-col flex-1 gap-3 min-w-80  ${!isMobile ? 'self-start' : 'self-end'}`}>
                    <h2 className="font-Lato italic font-extra-bold text-lg">REACTIFIED RESUME</h2>
                    <motion.p variants={childVariants} className="text-sm">
                        SPA with repositories fetched from API, Redux for dark mode.
                    </motion.p>
                    <motion.a 
                        variants={childVariants}
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Mayonesa90/reactified-resume"
                        className="self-end w-fit text-blue-500 hover:underline hover:cursor-pointer bold text-sm"
                    >
                            GitHub repo
                    </motion.a>
                    <motion.footer variants={childVariants} className="flex gap-2 justify-end  mb-5 flex-wrap">
                        <Tag title="React" />
                        <Tag title="Vite" />
                        <Tag title="TailwindCSS" />
                        <Tag title="API" />
                        <Tag title="Redux" />
                    </motion.footer>
                </article>

            {!isMobile
            ? <section className="grid grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg-custom flex-2">
                <img src={ReactifiedResume1} alt="" />
                <img src={ReactifiedResume2} alt="" />
                <img src={ReactifiedResume3} alt="" />
                <img src={ReactifiedResume4} alt="" />
              </section> 
            
            : <SlideShow images={reactifiedImages} />}
                
            </motion.section>

            <motion.section 
                key={"my-page"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col-reverse md-custom:flex-row flex-nowrap gap-5"
            >
                <article className={`flex flex-1 flex-col gap-3 min-w-80 self-start ${!isMobile ? 'self-start' : 'self-end'}`}>
                    <h2 className="font-Lato italic font-extra-bold text-lg">MY PAGE</h2>
                    <p className="text-sm">Digital buisness card</p>
                    <footer className="flex gap-2 justify-end  mb-5 flex-wrap">
                        <Tag title="HTML5" />
                        <Tag title="CSS3" />
                        <Tag title="Javascript SE6" />
                    </footer>
                </article>

            {!isMobile
            ? <section className="grid grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg-custom flex-2">
                <img src={MyPage1} alt="" />
                <img src={MyPage2} alt="" />
              </section> 
            
            : <SlideShow images={myPageImages} />}
                
            </motion.section>
            </AnimatePresence>
        </main>
    )
}
import { ImgToVid } from '../components/imgToVid'
import FlexboxManiaImg from '../assets/01flexboxmania-img.png'
import FlexboxManiaVid from '../assets/01flexboxmania-vid.mp4'

export function PortfolioContent(){
    return(
        <div className="flex flex-col">
            <h1 className=" text-center text-shadow text-pink  font-light  text-3xl">SCHOOL PROJECTS</h1>
            <ImgToVid img={FlexboxManiaImg} vid={FlexboxManiaVid}/>
        </div>
    )
}
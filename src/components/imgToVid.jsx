import {useState} from 'react'
// import PlayBtn from '../assets/playBtn.svg'

export function ImgToVid({img, vid}){
    const [video, setVideo] = useState(false)

    return (
        <>
            {!video ? (
                <div className='self-center relative'>
                    <img onMouseDown={() => setVideo(true)} src={img} className='  '/>
                    {/* <button><img src={PlayBtn} alt="" /></button> */}
                </div>
            ) : (
                <video onMouseDown={() => setVideo(false)} autoPlay loop muted className=' self-center '>
                    <source src={vid} type='video/mp4'/>
                </video>
            )}
        </>
    )
}
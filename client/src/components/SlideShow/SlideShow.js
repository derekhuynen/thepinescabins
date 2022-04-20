import react, {useState} from 'react'
import './slideShow.css'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";

export default function SlideShow({cabin}){
    const [index, setIndex] = useState(0)


    return(
        <div className={"sliderShow-container"}>
            <img src={`https://wpines.s3.us-west-1.amazonaws.com/${cabin.photos[index]}`} alt={cabin.cabinName}/>
            <div className={"sliderShow-arrow"} style={{left: 15}} onClick={()=> {
                if(index > 0){
                    setIndex(index-1)
                }
            }}>
                <BsFillArrowLeftCircleFill/>
            </div>

            <div className={"sliderShow-arrow"} style={{right: 15}} onClick={()=> {
                if(index < 4){
                    setIndex(index+1)
                }
            }}>
                <BsFillArrowRightCircleFill/>
            </div>
        </div>
    )
}
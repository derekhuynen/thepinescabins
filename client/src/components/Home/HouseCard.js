import React, {useState} from 'react';
import '../../css/HouseCard.css'
import { Icon } from "@iconify/react";
import starFilled from '@iconify/icons-ant-design/star-filled';
import { useHistory } from "react-router-dom";
import SlideShow from '../SlideShow/SlideShow.js'



const displayRating = (cabin) => {
    return (
            <div className={'houseCard__price'}>
                <h2 style={{float: 'left'}}><Icon icon = {starFilled} color="#e61e4d" width="18" height="18" inline={true}/></h2>
                <h3 style={{float: 'left'}}>{cabin.rating.overallRating} </h3>
                <h3 className={"gray"} style={{float: 'left'}}>({cabin.rating.overallCount})</h3>
                <h4 style={{float: 'right'}}>{cabin.license}</h4>
            </div>
        )
}

function HouseCard({cabin}) {
    const history = useHistory();


    return (
        <div key={cabin.cabinCode} className={'houseCard'}>
            <div className={"houseCard__img"}>
                <SlideShow cabin = {cabin}/>
            </div>

            <div className="houseCard__info" onClick={() => history.push(`/cabin/${cabin._id}`)}>
                <h2>{cabin.cabinName}</h2>
                <div className={'houseCard__guest__info'}>
                    <h4><span>Guests: {cabin.guests}</span></h4>
                    <h4><span>Bedrooms: {cabin.bedrooms}</span></h4>
                    <h4><span>Bathrooms: {cabin.bathrooms}</span></h4>
                </div>
                {cabin.rating ? displayRating(cabin) : "No Rating"}
            </div>
        </div>
    )
}

export default HouseCard
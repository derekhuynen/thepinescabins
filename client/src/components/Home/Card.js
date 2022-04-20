import React from 'react';
import '../../css/Card.css'
import { useHistory } from "react-router-dom";

function HouseCard({image1, title, icon, link}) {
    const history = useHistory();


    return (
        <div className='card' onClick={() => history.push(link)}>
            <div className={"imageDiv"}>
                <img src={image1} alt=""/>
            </div>

            <div className="card__info">
                <div className={'card__title'}>
                    <h2 style={{float: 'left'}}>{title}</h2>
                    <h2 style={{float: 'right'}}>{icon}</h2>
                </div>
            </div>
        </div>
    )
}

export default HouseCard
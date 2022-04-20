import React, {useEffect, useState} from 'react';
import '../../css/Home.css';
import Banner from '../Nav/Banner'
import HouseCard from './HouseCard'
import Card from './Card'

import House from '../../CabinPhotos/Cabins/GoldRushSmall.JPG'
import Hiking from '../../CabinPhotos/City720/Hiking.JPG'
import Village from '../../CabinPhotos/City720/Village.JPG'

// import { Icon } from '@iconify/react';
// import baselineHiking from '@iconify/icons-ic/baseline-hiking';
// import iRestaurant from '@iconify/icons-medical-icon/i-restaurant';
// import houseDoor from '@iconify/icons-bi/house-door';



function Home() {
    const [cabinList, setCabinList] = useState([])

    useEffect(() => {
        fetch(process.env.BASE_URL + "/cabin")
            .then(res =>
                res.json
            ).then( data => {
                console.log(data.item)
                setCabinList(data.item)
        })
            .catch(function (error) {
                console.log(error);
            })
    }, [])



    const items = cabinList.map((cabin,index) => {
        return(
            <HouseCard cabin={cabin} key={index}/>
        )
    })

    return (
        <div className='home'>
            <Banner/>

            <div className='home__section'>
                <Card
                    image1={House}
                    title="All Cabins"
                    link= "/cabins"
                    // icon={<Icon icon={houseDoor} width="20" height="20" inline={true}/>}
                />
                <Card
                    image1= {Hiking}
                    title="Things To Do"
                    link= "/activities"
                    // icon={<Icon icon={baselineHiking} width="20" height="20" inline={true}/>}
                />
                <Card
                    image1={Village}
                    title="Restaurants"
                    link= "/restaurants"
                    // icon={<Icon icon={iRestaurant} width="20" height="20" inline={true}/>}
                />
            </div>
            {cabinList ?
            <div className='home__section'>
                {items}
            </div>
                : "Loading"}
        </div>
    )
}

export default Home
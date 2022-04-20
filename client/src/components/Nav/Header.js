import React, {useEffect, useState} from 'react'
import '../../css/Header.css'
import { Link } from "react-router-dom";
import Logo from '../../CabinPhotos/Logo.png'
// import Weather from '../Weather/Weather'



// const URL = "https://api.openweathermap.org/data/2.5/weather?q=big bear lake&units=imperial&appid=" + process.env.REACT_APP_WEATHER_KEY;


function Header() {
    // const [data, setData] = useState({});
    // const [loading, setLoading] = useState(false)



    // useEffect(() => {
    //     axios.get(URL)
    //         .then(res => {
    //             setData (res.data);
    //         }).then( ()=> {
    //             setLoading(true)
    //     })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }, [])


    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src= {Logo}
                    alt="Pines Cabins, Big Bear Lake, Cabin Management"
                />
            </Link>
            <div className={'weatherRight'}>
                {/*{loading ? <Weather data={data}/> : console.log("Loading")}*/}
            </div>

        </div>
    )
}

export default Header
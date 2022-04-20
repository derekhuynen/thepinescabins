import React from 'react'
import '../../css/Banner.css'
import { Button } from "@material-ui/core";
import  {useHistory}  from "react-router-dom";

function Banner() {
    const history = useHistory();

    return (
        <div className='banner'>
            <div className='banner__info'>
                <h1>Family Owned</h1>
                <h4>
                    Big Bear Cabin Management Company
                </h4>
                <Button onClick={() => history.push('/contact')} variant='outlined'>Contact Us</Button>
            </div>
        </div>
    )
}

export default Banner
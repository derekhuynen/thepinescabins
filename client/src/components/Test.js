import react, {useEffect, useState} from 'react'
import '../App.css'


export default function Test(){

    const [data,setData] = useState();

    useEffect(() => {
        fetch( window.location.origin + "/api")
            .then(res => res.text())
            .then(result => {
                console.log(result)
            })

        //     .then(result => {
        //         console.log("Message: " + result)
        //     setData(result);
        // })


            .catch(err => {
                console.log(err);
            })

    })

    return(
        <div className={"App"}>
            {}
            {console.log(window.location.href)}
            {data ? data : "loading"}
            Hello
        </div>
    )
}
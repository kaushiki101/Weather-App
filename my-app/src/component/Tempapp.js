import React, { useEffect, useState } from "react";
import './Tempapp.css'

const Tempapp = () => {
    const [city, setcity] = useState(null)
    const [search, setsearch] = useState("MUMBAI")


    useEffect(() => {
        const fetchapi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cb2c4b1e584528fc98cf5a27a4539d2e`
            const respnse = await fetch(url);
            const resjson = await respnse.json()
            // console.log(resjson)
            setcity(resjson.main);
        };

        fetchapi();
    }, [search])
    
    return (

        <div className="headers">
            <div className="title">
                <h1 className='main '>WEATHER APP</h1>
                <div >
                

                </div>

                <div>
                    <input type="search" className="button" onChange={(event) => {
                        setsearch(event.target.value)
                    }} value={search} />
                </div>

                {!city ? (
                    <button className="ERROR">ENTER SOME DATA</button>
                ) : (
                    <div className="small-div">
                        <h3 className='location'>{search}</h3>
                        <h3 className='temp'>{city.temp}</h3>
                        {/* <div className='report'> CLEARSKY</div> */}
                        <br></br>
                        <button className="temper">  <h1>{city.temp_min}</h1>
                            MIN TEMP </button>
                        <button className="temper"><h1>{city.temp_max}</h1>
                            MAX TEMP </button>
                    </div>

                )}


            </div>
        </div>
    );
}
export default Tempapp;

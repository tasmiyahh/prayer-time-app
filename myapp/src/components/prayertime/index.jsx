import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import PrayerCard from '../prayercard'

function Prayertime() {
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [data, setData] = useState([])

    const submithandler = (e) => {

        e.preventDefault()
        axios({
            method: "get",
             url: `http://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&current`
            
        })
            .then(response => {
                console.log(response.data.data)
                setData(response.data.data)
               
              
            })
            .catch(err => {
                console.log(err)
            })
    }

   
   

    return (
        <div>
             <h1>PRAYER TIMING APP</h1>

            <form onSubmit={submithandler}>
                <input type="text" placeholder='enter your country' onChange={(e) => {
                    setCountry(e.target.value)
                }} />
                <input type="text" placeholder='enter city name' onChange={(e) => {
                    setCity(e.target.value)
                }} />
                <button>prayer time</button>
            </form>
            

           
           

          <div>
            {data?.map((eachdata, index) => (
                <PrayerCard
                    key = {index}
                    date = {eachdata.date.readable}
                    fajr={eachdata.timings.Fajr}
                    Dhuhr={eachdata.timings.Dhuhr}
                    Asr={eachdata.timings.Asr}
                    Maghrib={eachdata.timings.Maghrib}
                    Isha={eachdata.timings.Isha}
                    Sunrise={eachdata.timings.Sunrise}
                    Sunset={eachdata.timings.Sunset}
                    timezone = {eachdata.timezone}




                />
            ))}


            </div>



         


        </div>
    )
}

export default Prayertime
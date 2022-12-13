import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import PrayerCard from '../prayercard'

function Prayertime() {
    const [city, setCity] = useState("Karachi")
    const [country, setCountry] = useState("Pakistan")
    const [data, setData] = useState([])

    const submithandler = (e) => {

        e.preventDefault()
        axios({
            method: "get",
            url: `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`
        })
            .then(res => {
                console.log(res.data.data)
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div>
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
            {data.map((eachdata, index) => (
                <PrayerCard

                    fajr={eachdata.fajr}
                    Dhuhr={eachdata.Dhuhr}
                    Asr={eachdata.Asr}
                    Maghrib={eachdata.Maghrib}
                    Isha={eachdata.Isha}
                    Sunrise={eachdata.Sunrise}
                    Sunset={eachdata.Sunset}




                />
            ))}

            </div>



            {/* {data.map((eachdata, index)=>(
          <PrayerCard
          fajr = {eachdata.fajr}
          Dhuhr = {eachdata.Dhuhr}
          Asr = {eachdata.Asr}
          Maghrib = {eachdata.Maghrib}
          Isha = {eachdata.Isha}
          Sunrise = {eachdata.Sunrise}
          Sunset = {eachdata.Sunset}

           />
        ))}
      
 */}


        </div>
    )
}

export default Prayertime
